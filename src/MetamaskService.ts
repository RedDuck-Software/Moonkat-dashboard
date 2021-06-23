import { erc20TokenContractAbi } from "./constants";
import { ethers } from "ethers";

declare global {
  interface Window {
    ethereum: any;
  }
}
const provider = new ethers.providers.Web3Provider(window.ethereum);

export default class MetamaskService {
  public static async getContractInstance(contractAddress: string) {
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, erc20TokenContractAbi, signer);
    return contract;
  }
}
