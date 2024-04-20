import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20Transferer, ERC20TransfererInterface } from "../../../contracts/utils/ERC20Transferer";
declare type ERC20TransfererConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Transferer__factory extends ContractFactory {
    constructor(...args: ERC20TransfererConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC20Transferer>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC20Transferer;
    connect(signer: Signer): ERC20Transferer__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061020e806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80630e50b7e814610030575b600080fd5b61004361003e366004610163565b610055565b60405190815260200160405180910390f35b6040516370a0823160e01b815233600482015260009081906001600160a01b038516906370a0823190602401602060405180830381865afa15801561009e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100c29190610196565b6040516323b872dd60e01b81523360048201526001600160a01b03858116602483015260448201839052919250908516906323b872dd906064016020604051808303816000875af115801561011b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061013f91906101af565b509392505050565b80356001600160a01b038116811461015e57600080fd5b919050565b6000806040838503121561017657600080fd5b61017f83610147565b915061018d60208401610147565b90509250929050565b6000602082840312156101a857600080fd5b5051919050565b6000602082840312156101c157600080fd5b815180151581146101d157600080fd5b939250505056fea26469706673582212203cd52bf327c90fd4819a97a611402345057fb783527c97763a8d734d165d461564736f6c63430008130033";
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
    static createInterface(): ERC20TransfererInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC20Transferer;
}
export {};
