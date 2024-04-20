import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NounsDAOStorageV2, NounsDAOStorageV2Interface } from "../../../../contracts/governance/NounsDAOInterfaces.sol/NounsDAOStorageV2";
declare type NounsDAOStorageV2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NounsDAOStorageV2__factory extends ContractFactory {
    constructor(...args: NounsDAOStorageV2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NounsDAOStorageV2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NounsDAOStorageV2;
    connect(signer: Signer): NounsDAOStorageV2__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061031f806100206000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806383cce0e11161008c578063d33219b411610066578063d33219b4146101f7578063d8bff4401461020a578063da35c6641461021d578063f851a4401461022657600080fd5b806383cce0e11461018e578063a67d063514610197578063abb308b2146101aa57600080fd5b806326782247116100c857806326782247146101345780632de45f181461015f5780633932abb1146101725780635c60da1b1461017b57600080fd5b806302a251a3146100ef57806314a67ea41461010b57806317977c6114610114575b600080fd5b6100f860055481565b6040519081526020015b60405180910390f35b6100f860065481565b6100f86101223660046102a0565b600c6020526000908152604090205481565b600154610147906001600160a01b031681565b6040516001600160a01b039091168152602001610102565b600a54610147906001600160a01b031681565b6100f860045481565b600254610147906001600160a01b031681565b6100f860075481565b600e54610147906001600160a01b031681565b6101bd6101b83660046102d0565b610239565b6040805163ffffffff9384168152825161ffff90811660208084019190915284015116818301529101519091166060820152608001610102565b600954610147906001600160a01b031681565b600354610147906001600160a01b031681565b6100f860085481565b600054610147906001600160a01b031681565b600d818154811061024957600080fd5b60009182526020918290206002919091020180546040805160608101825260019093015461ffff8082168552620100008204169484019490945263ffffffff64010000000090940484169083015291909116915082565b6000602082840312156102b257600080fd5b81356001600160a01b03811681146102c957600080fd5b9392505050565b6000602082840312156102e257600080fd5b503591905056fea26469706673582212209d0df1c2f9fc39af1c96d38bdf9c1c8d97113329ad1e67c856169f481d97724164736f6c63430008130033";
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): NounsDAOStorageV2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): NounsDAOStorageV2;
}
export {};
