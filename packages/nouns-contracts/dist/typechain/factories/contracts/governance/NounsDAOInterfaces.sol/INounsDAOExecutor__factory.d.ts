import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsDAOExecutor, INounsDAOExecutorInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/INounsDAOExecutor";
export declare class INounsDAOExecutor__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): INounsDAOExecutorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDAOExecutor;
}
