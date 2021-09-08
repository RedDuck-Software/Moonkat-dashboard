import {
  erc20TokenContractAbi,
  pancakeRouterContractAbi,
  pancackePairContractAbi,
  claimerContractAbi,
  CONTRACT_ADDRESS,
  CLAIMER_CONTRACT_ADDRESS,
} from "./constants";
import { ethers, Contract, BigNumber, utils } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";

declare global {
  interface Window {
    ethereum: any;
  }
}
export enum WalletType{ 
  Metamask,
  WalletConnect
}

const WBNB_ADDRESS = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";
const BUSD_ADDRESS = "0x55d398326f99059ff775485246999027b3197955";

export default class MetamaskService {
  contract?: Contract;
  walletProvider;
  web3Provider;
  oneMkatBnb;

  constructor(walletProvider) { 
    this.walletProvider = walletProvider;
    this.web3Provider = new ethers.providers.Web3Provider(walletProvider);
  }

  public async updateMKATBusdValue() { 
    this.oneMkatBnb = ((await this.getPriceFromLastTrade()) / 10 ** 9).toFixed(18);
  }


  public getWeb3Provider() { 
    return this.web3Provider;
  }


  public static async createWalletProviderFromType(type: WalletType) {
    if(type == WalletType.WalletConnect) { 
      const walletConnectProvider = new WalletConnectProvider({
        rpc:  {56: "https://bsc-dataseed.binance.org/"} ,
        chainId: 56,
        qrcode: true, // Required
      });

      await walletConnectProvider.enable();

      return walletConnectProvider;
    }
    if(type == WalletType.Metamask) { 
      return window.ethereum;
    }
    else throw new Error("Invalid type");
  }
  

  public async getRemainsPreSaleTokens(address: string) {
    const contract = await this.getClaimerContractInstance(CLAIMER_CONTRACT_ADDRESS);
    return await contract.calculateRemainsTokens(address);
  }


  public async getContractInstance(contractAddress: string) {
    const provider = this.web3Provider;

    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, erc20TokenContractAbi, signer);
  }

  public async getClaimerContractInstance(contractAddress: string) {
    const provider = this.web3Provider;

    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, claimerContractAbi , signer);
  }

  public async getPancakeRouterContractInstance(pancakeContractAddress: string) {
    const provider = this.web3Provider;

    const signer = provider.getSigner();
    return new ethers.Contract(pancakeContractAddress, pancakeRouterContractAbi, signer);
  }

  public async getPancakePairContractInstance(pancakePairContractAddress: string) {
    const provider = this.web3Provider;

    const signer = provider.getSigner();
    return new ethers.Contract(pancakePairContractAddress, pancackePairContractAbi, signer);
  }

  public async getPoolReservesBNB() {
    const provider = this.web3Provider;

    const res = provider.getBalance(CONTRACT_ADDRESS);
    // console.log("POOL RESERVES" + res);

    return res;
  }

  
  private async getPricesPath(amount: BigNumber, path: string[]) {
    if (amount.isZero()) {
      return new Array(path.length).fill(BigNumber.from([0]));
    } else {
      const contract = await this.getPancakeRouterContractInstance(await this.getPancakeRouterAddress());
      const res = await contract.getAmountsOut(amount, path);
      return res;
    }
  }

  private async mkatBNBBUSDPath(amount: BigNumber) {
    return this.getPricesPath(amount, [
      CONTRACT_ADDRESS,
      WBNB_ADDRESS,
      BUSD_ADDRESS,
    ]);
  }

  public async getNextClaimDate(address: string) {
    const claimDateUnixSeconds = await this.contract.nextAvailableClaimDate(address);
    const ms = claimDateUnixSeconds * 1000;

    return new Date(ms);
  }

  public async getMkatValueInBUSD(amount: BigNumber) {
    if (amount.isZero()) {
      return 0;
    }

    const oneTokenBnbPrice = this.oneMkatBnb;
    const amountBnbPrice = utils.parseEther(oneTokenBnbPrice.toString()).mul(amount);
  
    const res =  (await this.getPricesPath(
      amountBnbPrice,
        [
          WBNB_ADDRESS,
          BUSD_ADDRESS,
        ]
    ))[1];

    return res;
  }

  public async getMKATValueInBNB(amount: BigNumber) {
    const pathResult = await this.mkatBNBBUSDPath(amount);
    return amount.isZero() ? 0 : pathResult[1] / 10 ** 18;
  }

  public async totalLiquidityPoolInBUSD() {
    const poolReserves = await this.getPancakePairPoolReserves();
    // console.log("poolRes:", poolReserves);

    const mkat = poolReserves[0];
    const bnb = poolReserves[1];

    const bnbUSD =
      (
        await this.getPricesPath(bnb, [
          WBNB_ADDRESS,
          BUSD_ADDRESS,
        ])
      )[1];
    const mkatUSD = await this.getMkatValueInBUSD(mkat);

    // console.log("bnbUSD:", bnbUSD);
    // console.log("mkatUSD:", mkatUSD);

    return bnbUSD.add(mkatUSD);
  }

  public async getPancakePairPoolReserves() {
    const contract = await this.getPancakePairContractInstance(await this.getPancakePairAddress());
    const res = await contract.getReserves();
    return res;
  }

  public async getPancakePairAddress() {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }
    return await this.contract.pancakePair();
  }

  public async getPancakeRouterAddress() {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }

    return await this.contract.uniswapV2Router();
  }

  public async getMaxTx() {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }

    const maxTxAmount = await this.contract._maxTxAmount();
    // console.log("getMaxTx", maxTxAmount);

    return maxTxAmount / 10 ** 9;
  }

  public async getMaxTxBNB() {
    const maxTxMKAT = await this.getMaxTx();
    const nonCastedMKAT = BigNumber.from(maxTxMKAT).mul(BigNumber.from(10 ** 9));
    return await this.getMKATValueInBNB(nonCastedMKAT);
  }

  public async getBnbReward(addr: string) {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }
    // console.log("getBnbReward", this.contract);
    // console.log("address: " + addr);

    const contract = await this.getContractInstance(CONTRACT_ADDRESS);
    const bnbReward = await contract.calculateBNBReward(addr);
    return bnbReward;
  }

  public async getBalance(addr: string) {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }

    const tokenBalance = await this.contract.balanceOf(addr);

    return tokenBalance;
  }

  public async getPriceFromLastTrade() { 
    const amountOut = await this.getPricesPath(BigNumber.from("10000"), [WBNB_ADDRESS, CONTRACT_ADDRESS ] );

    return parseFloat(utils.formatEther(amountOut[0].toString())) / parseFloat(utils.formatUnits(amountOut[1].toString(), 9))
  }

  public getClaimerContractAddress(signerAddress:string) {
    const problematicAddresses = [
      "0x03CE7ad9E91Ca95576B90B00B780328677c8DC5F",
      "0x05Fb9594BbF49979D5Ca5c95a913BF4995F4C096",
      "0x06e5a9feb9e33BCae23a2f53E70A513fba96bc77",
      "0x0bA2f9edB9734F5c6715F86079649f3814C5Fd98",
      "0x0E08d3048c5435d30eF83c55915227e3ca4Aa3BA",
      "0x0Ec8BC018C50502254A1f257471698212bC54cC7",
      "0x14318237a1f45792533eB5A34925245f17a4F660",
      "0x19689D6f4AD16bdec73f9648326A38C27BfBe961",
      ]

    if (problematicAddresses.includes(signerAddress))
    {
      // stub address for those addresses that had incorrect amounts specified
      return "0x1B3DB5Fe578b26b4FA0A891B0D76aD80c89B2b06";
    }
    else
    { // real claiming contract address 
      return "0xC990ff5175BdE3C12b160787AC8A6570bA144B85";
    }
  }


}
