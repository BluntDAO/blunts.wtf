import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INounsDAOForkEscrow, INounsDAOForkEscrowInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/INounsDAOForkEscrow";
export declare class INounsDAOForkEscrow__factory {
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
    static createInterface(): INounsDAOForkEscrowInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INounsDAOForkEscrow;
}
