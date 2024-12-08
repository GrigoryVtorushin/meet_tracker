import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/interfaces.ts";

interface IAdminStatePayload {
    page: number,
    per_page: number,
    total: number,
    items: IUser[]
}

const initialState: IAdminStatePayload = {
    page: 1,
    per_page: 10,
    total: 1,
    items: []
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

    }
})

export const {
    getUsersSuccess,
    setUsers

} = adminSlice.actions
export default adminSlice.reducer