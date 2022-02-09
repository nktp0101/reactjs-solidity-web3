import { ethers } from "ethers";
import {
  getTestSmartContractAbi,
  getTestSmartContractAddress,
} from "../config/web3";

export class ContractTest extends ethers.Contract {
  constructor(provider, signerAccount) {
    const contractAddress = getTestSmartContractAddress();
    const contractAbi = getTestSmartContractAbi();

    if (!provider) {
      super(contractAddress, contractAbi);
    } else {
      const signer = provider.getSigner(signerAccount ?? 0);
      super(contractAddress, contractAbi, signer);
    }
  }
}
