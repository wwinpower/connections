import {SerializedError} from "@reduxjs/toolkit";

export interface IConnections {
    [key: string]: IConnectionBody
}

export interface IConnectionBody {
    ss58Format?: number | null,
    tokenDecimals?: Array<number | undefined>,
    tokenSymbol?: Array<string | undefined>,
    SS58Prefix?: number | null,
    ss58format?: number | null,
    icon: string | undefined,
    name: string | undefined
}

export interface IConnection {
    name: string,
    data: IConnectionBody,
    connect?: boolean
}

export interface IState {
    isLoading: boolean,
    error?: SerializedError | string,
    connection?: IConnection[],
    minute: number,
    initialized?: boolean,
}

