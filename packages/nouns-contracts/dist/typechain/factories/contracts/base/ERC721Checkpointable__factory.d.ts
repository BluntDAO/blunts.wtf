import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC721Checkpointable, ERC721CheckpointableInterface } from "../../../contracts/base/ERC721Checkpointable";
export declare class ERC721Checkpointable__factory {
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
    static createInterface(): ERC721CheckpointableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721Checkpointable;
}
