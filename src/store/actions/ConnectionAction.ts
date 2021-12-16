import {createAsyncThunk} from '@reduxjs/toolkit'
import {getAllConnection, getConnectionStatus} from "../api/connectionApi";
import {IConnection} from "../../types/connection";

const connectionStatus = async (filteredConnection: IConnection[]) => {
    try {
        let data = await Promise.all(filteredConnection.map(async (connection: IConnection) => {
            let response = await getConnectionStatus(connection.name)

            return {
                ...connection,
                connect: response
            }
        }));

        return data;
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllConnection = createAsyncThunk(
    "chains/properties",
    async (_: void, thunkAPI) => {
        try {
            const response = await getAllConnection();

            let filtered: IConnection[] = Object
                .entries(response)
                .reduce((acc, [connectionName, connectionBody]): IConnection[] => {
                    if (connectionBody.tokenSymbol && connectionBody.tokenDecimals) {
                        let obj: IConnection = {
                            name: connectionName,
                            data: connectionBody
                        }

                        acc.push(obj)
                    }

                    return acc;
                }, [] as any);


            return connectionStatus(filtered);
        } catch (err) {
            console.error(err)
        }
    }
);

export const fetchConnectionStatus = createAsyncThunk(
    "check/connection",
    async (payload: IConnection[], {rejectWithValue}) => {
        return await connectionStatus(payload);
    }
);
