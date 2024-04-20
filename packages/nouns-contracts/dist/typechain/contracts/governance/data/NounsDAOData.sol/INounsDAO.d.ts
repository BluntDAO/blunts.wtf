import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../../../common";
export declare namespace NounsDAOStorageV3 {
    type ProposalCondensedStruct = {
        id: BigNumberish;
        proposer: string;
        proposalThreshold: BigNumberish;
        quorumVotes: BigNumberish;
        eta: BigNumberish;
        startBlock: BigNumberish;
        endBlock: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        abstainVotes: BigNumberish;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumberish;
        creationBlock: BigNumberish;
        signers: string[];
        updatePeriodEndBlock: BigNumberish;
        objectionPeriodEndBlock: BigNumberish;
        executeOnTimelockV1: boolean;
    };
    type ProposalCondensedStructOutput = [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        string[],
        BigNumber,
        BigNumber,
        boolean
    ] & {
        id: BigNumber;
        proposer: string;
        proposalThreshold: BigNumber;
        quorumVotes: BigNumber;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        vetoed: boolean;
        executed: boolean;
        totalSupply: BigNumber;
        creationBlock: BigNumber;
        signers: string[];
        updatePeriodEndBlock: BigNumber;
        objectionPeriodEndBlock: BigNumber;
        executeOnTimelockV1: boolean;
    };
}
export interface INounsDAOInterface extends utils.Interface {
    functions: {
        "proposalsV3(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "proposalsV3"): FunctionFragment;
    encodeFunctionData(functionFragment: "proposalsV3", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "proposalsV3", data: BytesLike): Result;
    events: {};
}
export interface INounsDAO extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: INounsDAOInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<[NounsDAOStorageV3.ProposalCondensedStructOutput]>;
    };
    proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ProposalCondensedStructOutput>;
    callStatic: {
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<NounsDAOStorageV3.ProposalCondensedStructOutput>;
    };
    filters: {};
    estimateGas: {
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        proposalsV3(proposalId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
