import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsTokenForkLike, INounsTokenForkLikeInterface } from "../../../../../../contracts/governance/fork/newdao/governance/INounsTokenForkLike";
export declare class INounsTokenForkLike__factory {
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
    static createInterface(): INounsTokenForkLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsTokenForkLike;
}
