import {
  erc20TokenContractAbi,
  pancakeRouterContractAbi,
  pancackePairContractAbi,
  CONTRACT_ADDRESS,
} from "./constants";
import { ethers, Contract, BigNumber } from "ethers";
import { formatNumberWithSpace } from "./utils/utils";

declare global {
  interface Window {
    ethereum: any;
  }
}

export default class MetamaskService {
  contract?: Contract;
  // maxMkatTx?: string;
  // myBnbReward?: string;

  public async getContractInstance(contractAddress: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, erc20TokenContractAbi, signer);
  }

  public async getPancakeRouterContractInstance(pancakeContractAddress: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    return new ethers.Contract(pancakeContractAddress, pancakeRouterContractAbi, signer);
  }

  public async getPancakePairContractInstance(pancakePairContractAddress: string) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();
    return new ethers.Contract(pancakePairContractAddress, pancackePairContractAbi, signer);
  }

  public async getPoolReservesBNB() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const res = provider.getBalance(CONTRACT_ADDRESS);
    console.log("POOL RESERVES" + res);

    return res;
  }

  private async getPricesPath(amount: BigNumber, path: string[]) {
    if (amount == BigNumber.from([0])) {
      return new Array(path.length).fill(BigNumber.from([0]));
    } else {
      const contract = await this.getPancakeRouterContractInstance(await this.getPancakeRouterAddress());
      const res = await contract.getAmountsOut(amount, path);
      console.log("getPricePath res:", res);
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
    const pathResult = await this.mkatBNBBUSDPath(amount);
    return amount == BigNumber.from([0]) ? 0 : pathResult[2] / 10 ** 18;
  }

  public async getMKATValueInBNB(amount: BigNumber) {
    const pathResult = await this.mkatBNBBUSDPath(amount);
    return amount == BigNumber.from([0]) ? 0 : pathResult[1] / 10 ** 18;
  }

  public async totalLiquidityPoolInBUSD() {
    const poolReserves = await this.getPancakePairPoolReserves();
    console.log("poolRes:", poolReserves);
    
    const mkat = poolReserves[0];
    const bnb = poolReserves[1];

    const bnbUSD = (await this.getPricesPath(bnb, [
      "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
      "0x55d398326f99059ff775485246999027b3197955",
    ]))[1] / 10**18;
    const mkatUSD = await this.getMkatValueInBUSD(mkat);

    console.log("bnbUSD:", bnbUSD);
    console.log("mkatUSD:", mkatUSD);

    return (bnbUSD + mkatUSD);
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
    console.log("getMaxTx", maxTxAmount);

    return maxTxAmount / 10 ** 9;
  }

  public async getMaxTxBNB() {
    const maxTxMKAT = await this.getMaxTx();
    const nonCastedMKAT = BigNumber.from(maxTxMKAT).mul(BigNumber.from(10**9));
    return await this.getMKATValueInBNB(nonCastedMKAT);
  }

  public async getBnbReward(addr: string) {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }
    console.log("getBnbReward", this.contract);
    console.log("address: " + addr);

    const contract = await this.getContractInstance(CONTRACT_ADDRESS);
    const bnbReward = await contract.calculateBNBReward(addr);
    return bnbReward;
  }

  public async getBalance(addr: string) {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }
    console.log("getBalance", addr);

    const tokenBalance = await this.contract.balanceOf(addr);

    console.log("getBalance tokenBalanceStr", tokenBalance.toString());
    return tokenBalance;
  }
}
