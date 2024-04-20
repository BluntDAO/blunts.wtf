import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MaliciousVoter, MaliciousVoterInterface } from "../../../contracts/test/MaliciousVoter";
declare type MaliciousVoterConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MaliciousVoter__factory extends ContractFactory {
    constructor(...args: MaliciousVoterConstructorParams);
    deploy(dao_: string, proposalId_: BigNumberish, support_: BigNumberish, useReason_: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<MaliciousVoter>;
    getDeployTransaction(dao_: string, proposalId_: BigNumberish, support_: BigNumberish, useReason_: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): MaliciousVoter;
    connect(signer: Signer): MaliciousVoter__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161030938038061030983398101604081905261002f9161007d565b600080546001600160a01b039095166001600160a01b031990951694909417909355600191909155600280549215156101000261ffff1990931660ff909216919091179190911790556100e9565b6000806000806080858703121561009357600080fd5b84516001600160a01b03811681146100aa57600080fd5b60208601516040870151919550935060ff811681146100c857600080fd5b606086015190925080151581146100de57600080fd5b939692955090935050565b610211806100f86000396000f3fe6080604052600436106100435760003560e01c80630fb524ce14610057578063119f87471461006c5780632dfca4451461009d5780634162169f146100c157600080fd5b36610052576100506100f9565b005b600080fd5b34801561006357600080fd5b506100506100f9565b34801561007857600080fd5b506002546100869060ff1681565b60405160ff90911681526020015b60405180910390f35b3480156100a957600080fd5b506100b360015481565b604051908152602001610094565b3480156100cd57600080fd5b506000546100e1906001600160a01b031681565b6040516001600160a01b039091168152602001610094565b600254610100900460ff161561019b576000546001546002546040516364c0599560e01b8152600481019290925260ff16602482015260606044820152600b60648201526a39b7b6b2903932b0b9b7b760a91b60848201526001600160a01b03909116906364c059959060a4015b600060405180830381600087803b15801561018157600080fd5b505af1158015610195573d6000803e3d6000fd5b50505050565b60005460015460025460405163227d647b60e11b8152600481019290925260ff1660248201526001600160a01b03909116906344fac8f69060440161016756fea264697066735822122040fc20dc0ebbac0376061fc8d46692e8136e0a2770db12a205f08783e03e10a464736f6c63430008130033";
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): MaliciousVoterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MaliciousVoter;
}
export {};
