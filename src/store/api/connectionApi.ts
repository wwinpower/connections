import axios from "axios";
import {IConnections} from "../../types/connection";

const instance = axios.create({
    baseURL: "https://app.subsocial.network/subid/api/v1/",
});

export const getAllConnection = async () => {
    const {data} = await instance.get<IConnections>("chains/properties");
    return data;
};

export const getConnectionStatus = async (connectionName: string) => {
    const {data} = await instance.get<boolean>("check/" + connectionName);

    return data;
};
