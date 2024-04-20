import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NounsTokenLike, NounsTokenLikeInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsTokenLike";
export declare class NounsTokenLike__factory {
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
    static createInterface(): NounsTokenLikeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsTokenLike;
}
