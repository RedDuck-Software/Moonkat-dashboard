import {
  erc20TokenContractAbi,
  pancakeRouterContractAbi,
  pancackePairContractAbi,
  CONTRACT_ADDRESS,
} from "./constants";
import { ethers, Contract, BigNumber } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { faThinkPeaks } from "@fortawesome/free-brands-svg-icons";
import { Console } from "console";
import InputDataDecoder from 'ethereum-input-data-decoder';

declare global {
  interface Window {
    ethereum: any;
  }
}
export enum WalletType{ 
  Metamask,
  WalletConnect
}

export default class MetamaskService {
  contract?: Contract;
  walletProvider;
  web3Provider;

  constructor(walletProvider) { 
    this.walletProvider = walletProvider;
    this.web3Provider = new ethers.providers.Web3Provider(walletProvider);
  }

  public getWeb3Provider() { 
    return this.web3Provider;
  }


  public static async createWalletProviderFromType(type: WalletType) {
    console.log("Creating wallet provider: ", type);
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

  public async getContractInstance(contractAddress: string) {
    const provider = this.web3Provider;

    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, erc20TokenContractAbi, signer);
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
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      "0x55d398326f99059ff775485246999027b3197955",
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
    const pathResult = await this.mkatBNBBUSDPath(amount);
    return pathResult[2] / 10 ** 18;
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
          "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
          "0x55d398326f99059ff775485246999027b3197955",
        ])
      )[1] /
      10 ** 18;
    const mkatUSD = await this.getMkatValueInBUSD(mkat);

    // console.log("bnbUSD:", bnbUSD);
    // console.log("mkatUSD:", mkatUSD);

    return bnbUSD + mkatUSD;
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

    return await this.contract.pancakeRouter();
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
    let block = await this.web3Provider.getBlockNumber();

    let priceFound = false;
    const router = await this.getPancakeRouterAddress();

    console.log("router: ", router);
    console.log(block);

    let txs = []
    let foundPriceDecodedTx = null;

    do {
      const curBlock = await this.web3Provider.getBlockWithTransactions(block);

      txs = curBlock.transactions;
      
      txs = txs.filter(function(t)  {
        return t.to == router &&  [
          "0x7ff36ab5", // swapExactETHForTokens
          "0xb6f9de95", // swapExactETHForTokensSupportingFeeOnTransferTokens
          "0xfb3bdb41", // swapETHForExactTokens
        ].includes(t.data.substring(0,10));        
      });
      
      foundPriceDecodedTx = this.getLastMKATSwapTx(txs);
      
      if(foundPriceDecodedTx == null) { 
        block--;
        continue;
      }

      priceFound = true;

    }while(!priceFound);

    console.log("Price found: ", foundPriceDecodedTx);

    const txReceipt = await this.web3Provider.getTransactionReceipt(foundPriceDecodedTx.tx.hash);

    console.log(txReceipt);

    const txDecodedOutput = this.decodeOutputData(foundPriceDecodedTx.tx.output);

    console.log("Decoded output: ", txDecodedOutput);
  }


  private decodeOutputData(outputData) { 
    const decoder = new InputDataDecoder(pancakeRouterContractAbi);

    const result = decoder.decodeData(outputData);

    return result;
  }

  private getLastMKATSwapTx(txs) {
    if(txs.length == 0) return null;

    const decodedTxs = [];

    txs.forEach(t => {
      decodedTxs.push({ decoded: this.decodeInputData(t.data), tx: t} );
    });
    
    const filteredDecodedTxs = decodedTxs.filter(function(t)  { 
       return "0x" + t.decoded.inputs[1].pop() == "0xe9e7cea3dedca5984780bafc599bd69add087d56";
    });

    console.log(filteredDecodedTxs);

    return filteredDecodedTxs.length == 0 ? null : filteredDecodedTxs[0];
  }

  private decodeInputData(inputData) { 
    const decoder = new InputDataDecoder(pancakeRouterContractAbi);

    const result = decoder.decodeData(inputData);

    return result;
  } 
}
