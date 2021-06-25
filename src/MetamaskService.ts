import { erc20TokenContractAbi, pancakeRouterContractAbi, CONTRACT_ADDRESS, PANCAKE_CONTRACT_ADDRESS } from "./constants";
import { ethers, Contract } from "ethers";
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

  public async getMkatValueInBUSD(amount) {
    const contract = await this.getPancakeRouterContractInstance(PANCAKE_CONTRACT_ADDRESS);

    const res = await contract.getAmountsOut(amount, [CONTRACT_ADDRESS, 0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd, 0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7]);

    console.log(res);

    return res;
  }

  public async getMaxTx() { 
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }

    const maxTxAmount = await this.contract._maxTxAmount();
    console.log("getMaxTx", maxTxAmount);

    return maxTxAmount;
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
