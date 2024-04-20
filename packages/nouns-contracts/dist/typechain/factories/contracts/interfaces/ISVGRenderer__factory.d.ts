import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISVGRenderer, ISVGRendererInterface } from "../../../contracts/interfaces/ISVGRenderer";
export declare class ISVGRenderer__factory {
    static readonly abi: {
        inputs: {
            components: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
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
    static createInterface(): ISVGRendererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISVGRenderer;
}
