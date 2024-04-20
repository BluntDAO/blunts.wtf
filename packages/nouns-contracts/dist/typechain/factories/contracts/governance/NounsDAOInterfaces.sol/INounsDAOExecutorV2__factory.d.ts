import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsDAOExecutorV2, INounsDAOExecutorV2Interface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/INounsDAOExecutorV2";
export declare class INounsDAOExecutorV2__factory {
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
    static createInterface(): INounsDAOExecutorV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDAOExecutorV2;
}
