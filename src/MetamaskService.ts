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

  public async initialize() { 
    this.oneMkatBnb = await this.getOneMkatPrice();
    this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
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

  public getTokenContractInstance() { 
    return this.contract;
  }

  private async getContractInstance(contractAddress: string) {
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

  private async getMkatBnbUsdPrices(amount: BigNumber) {
    return this.getPricesPath(amount, [
      CONTRACT_ADDRESS,
      WBNB_ADDRESS,
      BUSD_ADDRESS,
    ]);
  }

  public async getMkatValueInBUSD(amount: BigNumber)  {
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

  public async getMkatPriceInBnb(amount: BigNumber) : Promise<BigNumber> {
    if (amount.isZero()) 
      return new Promise(resolve => resolve(BigNumber.from("0")));

    const pathResult = await this.getMkatBnbUsdPrices(amount);
    return pathResult[1];
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
      this.contract = this.getTokenContractInstance();
    }
    return await this.contract.pancakePair();
  }

  public async getPancakeRouterAddress() {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }

    return await this.contract.uniswapV2Router();
  }

  public async getStaticRewardInfoOf(addr: string) {
    return await this.contract.getAccountDividendsInfo(addr);
  }

  public async getBalance(addr: string) : Promise<BigNumber> {
    if (!this.contract) {
      this.contract = this.getTokenContractInstance();
    }

    const tokenBalance = await this.contract.balanceOf(addr);

    return tokenBalance;
  }

  public async getOneMkatPrice(): Promise<BigNumber> { 
    return await this.getMkatPriceInBnb(utils.parseUnits("1", 18));
  }
}
