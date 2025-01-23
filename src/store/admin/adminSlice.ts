import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/interfaces.ts";

interface IAdminStatePayload {
    page: number,
    per_page: number,
    total: number,
    items: IUser[]
}

interface ISttModelsPayload {
    name: string,
    description: string,
    types: [
        {
            name: string,
            is_downloaded: boolean
        }
    ]
}

interface IllmModel {
    name: string,
    modified_at: string,
    size: number,
    digest: string,
    details: {
        format: string,
        family: string,
        families: string[],
        parameter_size: string,
        quantization_level: string,
    }
}

interface ILlmModelsPayload {
    models: IllmModel[]
}

const initialState: IAdminStatePayload = {
    page: 1,
    per_page: 10,
    total: 1,
    items: [],
    sttModels: [],
    llmModels: []
}

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        getUsersSuccess(state, action: PayloadAction<IAdminStatePayload>){
            state.page = action.payload.page;
            state.per_page = action.payload.per_page;
            state.total = action.payload.total;
            state.items = action.payload.items;
        },
        setUsers(state, action: PayloadAction<IAdminStatePayload>){
            state.items = action.payload.items
        },
        setSttModels(state, action: PayloadAction<ISttModelsPayload[]>) {
            state.sttModels = action.payload
        },
        setLlmModels(state, action: PayloadAction<ILlmModelsPayload>) {
            state.llmModels = action.payload.models
        },

    }
})

export const {
    getUsersSuccess,
    setUsers,
    setSttModels,
    setLlmModels

} = adminSlice.actions
export default adminSlice.reducer