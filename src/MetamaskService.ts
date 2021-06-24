import { erc20TokenContractAbi, CONTRACT_ADDRESS } from "./constants";
import { ethers } from "ethers";
import { formatNumberWithSpace } from "./utils/utils";

declare global {
  interface Window {
    ethereum: any;
  }
}

const provider = new ethers.providers.Web3Provider(window.ethereum);

export default class MetamaskService {
  // contract?: Contract;
  // maxMkatTx?: string;
  // myBnbReward?: string;

  public async getContractInstance(contractAddress: string) {
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, erc20TokenContractAbi, signer);
  }

  public async getMaxTx() {
    const contract = await this.getContractInstance(CONTRACT_ADDRESS);
    console.log(contract._maxTxAmount().toString());
    return formatNumberWithSpace(contract._maxTxAmount().toString());
  }
  public async getBnbReward(addr: string) {
    const contract = await this.getContractInstance(CONTRACT_ADDRESS);
    const bnbReward = await contract.calculateBNBReward(addr);
    return formatNumberWithSpace(bnbReward.toString());
  }

  public async getBalance(addr: string) {
    const contract = await this.getContractInstance(CONTRACT_ADDRESS);
    const tokenBalance = await contract.balanceOf(addr);
    return formatNumberWithSpace(tokenBalance.toString());
  }
}
