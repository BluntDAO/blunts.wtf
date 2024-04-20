import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsDescriptor, INounsDescriptorInterface } from "../../../contracts/interfaces/INounsDescriptor";
export declare class INounsDescriptor__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
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
            internalType: string;
            name: string;
            type: string;
        })[];
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
    static createInterface(): INounsDescriptorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDescriptor;
}
