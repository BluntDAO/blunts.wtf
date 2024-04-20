import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "../../common";
export declare namespace NounsDAOStorageV3 {
    type DynamicQuorumParamsStruct = {
        minQuorumVotesBPS: BigNumberish;
        maxQuorumVotesBPS: BigNumberish;
        quorumCoefficient: BigNumberish;
    };
    type DynamicQuorumParamsStructOutput = [number, number, number] & {
        minQuorumVotesBPS: number;
        maxQuorumVotesBPS: number;
        quorumCoefficient: number;
    };
}
export interface NounsDAOV3DynamicQuorumInterface extends utils.Interface {
    functions: {
        "dynamicQuorumVotes(uint256,uint256,(uint16,uint16,uint32))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "dynamicQuorumVotes"): FunctionFragment;
    encodeFunctionData(functionFragment: "dynamicQuorumVotes", values: [
        BigNumberish,
        BigNumberish,
        NounsDAOStorageV3.DynamicQuorumParamsStruct
    ]): string;
    decodeFunctionResult(functionFragment: "dynamicQuorumVotes", data: BytesLike): Result;
    events: {};
}
export interface NounsDAOV3DynamicQuorum extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NounsDAOV3DynamicQuorumInterface;
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
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        dynamicQuorumVotes(againstVotes: BigNumberish, totalSupply: BigNumberish, params: NounsDAOStorageV3.DynamicQuorumParamsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
