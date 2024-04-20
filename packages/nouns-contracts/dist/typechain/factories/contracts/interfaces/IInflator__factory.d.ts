import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IInflator, IInflatorInterface } from "../../../contracts/interfaces/IInflator";
export declare class IInflator__factory {
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
    static createInterface(): IInflatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IInflator;
}
