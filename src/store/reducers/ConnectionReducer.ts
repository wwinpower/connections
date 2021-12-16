import {createSlice} from '@reduxjs/toolkit'
import {fetchAllConnection, fetchConnectionStatus} from "../actions/ConnectionAction";
import {IConnection, IState} from "../../types/connection";

let TestState: IConnection[] = [
    {
        "name": "edgeware",
        "data": {
            "ss58Format": 7,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "EDG"
            ],
            "icon": "edgeware-circle.svg",
            "name": "Edgeware"
        },
        "connect": true
    },
    {
        "name": "calamari",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "KMA"
            ],
            "ss58format": 78,
            "icon": "calamari.png",
            "name": "Calamari"
        },
        "connect": false
    },
    {
        "name": "bifrost",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "BNC"
            ],
            "icon": "bifrost.svg",
            "name": "Bifrost"
        },
        "connect": true
    },
    {
        "name": "statemine",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "KSM"
            ],
            "icon": "statemine.svg",
            "name": "Statemine"
        },
        "connect": false
    },
    {
        "name": "karura",
        "data": {
            "ss58Format": 8,
            "tokenDecimals": [
                12,
                12,
                12,
                12,
                12,
                12,
                12
            ],
            "tokenSymbol": [
                "KAR",
                "KUSD",
                "KSM",
                "LKSM",
                "BNC",
                "VSKSM",
                "PHA"
            ],
            "icon": "karura.svg",
            "name": "Karura"
        },
        "connect": true
    },
    {
        "name": "shiden",
        "data": {
            "ss58Format": 5,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "SDN"
            ],
            "icon": "shiden.png",
            "name": "Shiden"
        },
        "connect": true
    },
    {
        "name": "centrifuge",
        "data": {
            "ss58Format": 36,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "CFG"
            ],
            "icon": "centrifuge.png",
            "name": "Centrifuge"
        },
        "connect": true
    },
    {
        "name": "basilisk",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "BSX"
            ],
            "icon": "basilisk.png",
            "name": "Basilisk"
        },
        "connect": true
    },
    {
        "name": "altair",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "AIR"
            ],
            "icon": "altair.svg",
            "name": "Altair"
        },
        "connect": true
    },
    {
        "name": "kilt",
        "data": {
            "ss58Format": 38,
            "tokenDecimals": [
                15
            ],
            "tokenSymbol": [
                "KILT"
            ],
            "icon": "kilt.png",
            "name": "Kilt Spiritnet"
        },
        "connect": true
    },
    {
        "name": "moonriver",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "MOVR"
            ],
            "SS58Prefix": 1285,
            "icon": "moonriver.svg",
            "name": "Moonriver"
        },
        "connect": true
    },
    {
        "name": "subsocial",
        "data": {
            "ss58Format": 28,
            "tokenDecimals": [
                11
            ],
            "tokenSymbol": [
                "SUB"
            ],
            "icon": "subsocial.svg",
            "name": "Subsocial"
        },
        "connect": true
    },
    {
        "name": "polkadot",
        "data": {
            "ss58Format": 0,
            "tokenDecimals": [
                10
            ],
            "tokenSymbol": [
                "DOT"
            ],
            "icon": "polkadot.svg",
            "name": "Polkadot"
        },
        "connect": true
    },
    {
        "name": "kusama",
        "data": {
            "ss58Format": 2,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "KSM"
            ],
            "icon": "kusama.svg",
            "name": "Kusama"
        },
        "connect": true
    },
    {
        "name": "sora",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                18
            ],
            "tokenSymbol": [
                "XOR"
            ],
            "icon": "sora-substrate.svg",
            "name": "SORA"
        },
        "connect": true
    },
    {
        "name": "nodle",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                11
            ],
            "tokenSymbol": [
                "NODL"
            ],
            "icon": "nodle.svg",
            "name": "Nodle"
        },
        "connect": true
    },
    {
        "name": "unique",
        "data": {
            "ss58Format": null,
            "tokenDecimals": [
                15
            ],
            "tokenSymbol": [
                "testUNQ"
            ],
            "icon": "unique.svg",
            "name": "Unique testnet"
        },
        "connect": true
    },
    {
        "name": "khala",
        "data": {
            "ss58Format": 30,
            "tokenDecimals": [
                12
            ],
            "tokenSymbol": [
                "PHA"
            ],
            "icon": "khala.svg",
            "name": "Khala"
        },
        "connect": true
    },
    {
        "name": "darwinia",
        "data": {
            "ss58Format": 18,
            "tokenDecimals": [
                9,
                9
            ],
            "tokenSymbol": [
                "RING",
                "KTON"
            ],
            "icon": "darwinia.png",
            "name": "Darwinia"
        },
        "connect": true
    }
]

const initialState: IState = {
    isLoading: false,
    error: '',
    connection: [],
    minute: 5,
    initialized: false
}

const connection = createSlice({
    name: "connection",
    initialState,
    reducers: {
        connectionStatusAdd: (state) => {
            state.connection = TestState;
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAllConnection.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchAllConnection.fulfilled, (state, {payload}) => {
                state.connection = payload
                state.isLoading = false;
            })
            .addCase(fetchAllConnection.rejected, (state, {error}) => {
                state.isLoading = false;
                state.error = error;
            })
            .addCase(fetchConnectionStatus.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(fetchConnectionStatus.fulfilled, (state, {payload}) => {
                state.connection = payload
                state.isLoading = false;
            })
            .addCase(fetchConnectionStatus.rejected, (state, {error}) => {
                state.isLoading = false;
                state.error = error;
            })
    }
})

export const {connectionStatusAdd} = connection.actions

export default connection.reducer;
