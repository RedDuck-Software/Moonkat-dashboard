import { erc20TokenContractAbi, CONTRACT_ADDRESS } from "./constants";
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
    return formatNumberWithSpace(bnbReward.toString());
  }

  public async getBalance(addr: string) {
    if (!this.contract) {
      this.contract = await this.getContractInstance(CONTRACT_ADDRESS);
    }
    console.log("getBalance", addr);

    const tokenBalance = await this.contract.balanceOf(addr);
    const tokenBalanceStr = ethers.utils.hexlify(ethers.BigNumber.from("" + tokenBalance));

    console.log("getBalance tokenBalanceStr", tokenBalanceStr);
    // return formatNumberWithSpace(tokenBalance.toString());
  }
}
