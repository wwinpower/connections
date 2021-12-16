import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ConnectionReducer from "./reducers/ConnectionReducer";

const rootReducer = combineReducers({
    connection: ConnectionReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;

export type RootState = ReturnType<typeof rootReducer | any>

