import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Voter, VoterInterface } from "../../../contracts/test/Voter";
declare type VoterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Voter__factory extends ContractFactory {
    constructor(...args: VoterConstructorParams);
    deploy(dao_: string, proposalId_: BigNumberish, support_: BigNumberish, useReason_: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<Voter>;
    getDeployTransaction(dao_: string, proposalId_: BigNumberish, support_: BigNumberish, useReason_: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): Voter;
    connect(signer: Signer): Voter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506040516102d13803806102d183398101604081905261002f9161007d565b600080546001600160a01b039095166001600160a01b031990951694909417909355600191909155600280549215156101000261ffff1990931660ff909216919091179190911790556100e9565b6000806000806080858703121561009357600080fd5b84516001600160a01b03811681146100aa57600080fd5b60208601516040870151919550935060ff811681146100c857600080fd5b606086015190925080151581146100de57600080fd5b939692955090935050565b6101d9806100f86000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630fb524ce14610051578063119f87471461005b5780632dfca4451461007f5780634162169f14610096575b600080fd5b6100596100c1565b005b6002546100689060ff1681565b60405160ff90911681526020015b60405180910390f35b61008860015481565b604051908152602001610076565b6000546100a9906001600160a01b031681565b6040516001600160a01b039091168152602001610076565b600254610100900460ff1615610163576000546001546002546040516364c0599560e01b8152600481019290925260ff16602482015260606044820152600b60648201526a39b7b6b2903932b0b9b7b760a91b60848201526001600160a01b03909116906364c059959060a4015b600060405180830381600087803b15801561014957600080fd5b505af115801561015d573d6000803e3d6000fd5b50505050565b60005460015460025460405163227d647b60e11b8152600481019290925260ff1660248201526001600160a01b03909116906344fac8f69060440161012f56fea26469706673582212200ffe3ee5c511d48883dc2a2971aa174b06449367f084fee24b933bc46fe3f9b764736f6c63430008130033";
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        name?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): VoterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Voter;
}
export {};
