import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC1967Upgrade, ERC1967UpgradeInterface } from "../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade";
export declare class ERC1967Upgrade__factory {
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ERC1967UpgradeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1967Upgrade;
}
