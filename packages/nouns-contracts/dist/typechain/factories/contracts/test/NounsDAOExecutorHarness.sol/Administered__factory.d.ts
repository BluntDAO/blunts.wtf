import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Administered, AdministeredInterface } from "../../../../contracts/test/NounsDAOExecutorHarness.sol/Administered";
export declare class Administered__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): AdministeredInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Administered;
}
