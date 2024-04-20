import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC165Upgradeable, ERC165UpgradeableInterface } from "../../../../../@openzeppelin/contracts-upgradeable/utils/introspection/ERC165Upgradeable";
export declare class ERC165Upgradeable__factory {
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
    static createInterface(): ERC165UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC165Upgradeable;
}
