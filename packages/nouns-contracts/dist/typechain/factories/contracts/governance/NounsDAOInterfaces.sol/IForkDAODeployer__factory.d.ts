import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IForkDAODeployer, IForkDAODeployerInterface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/IForkDAODeployer";
export declare class IForkDAODeployer__factory {
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
    static createInterface(): IForkDAODeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IForkDAODeployer;
}
