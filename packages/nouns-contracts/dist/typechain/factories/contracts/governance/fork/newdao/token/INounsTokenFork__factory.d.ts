import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsTokenFork, INounsTokenForkInterface } from "../../../../../../contracts/governance/fork/newdao/token/INounsTokenFork";
export declare class INounsTokenFork__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): INounsTokenForkInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsTokenFork;
}
