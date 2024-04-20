import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsDAO, INounsDAOInterface } from "../../../../../contracts/governance/data/NounsDAOData.sol/INounsDAO";
export declare class INounsDAO__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): INounsDAOInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDAO;
}
