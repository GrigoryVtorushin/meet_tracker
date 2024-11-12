import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../types/interfaces.ts";

export interface User {
    email: string;
    id?: string;
    is_active?: boolean;
}
interface IAuthStatePayload {
    isAuth?: boolean,
    accessToken?: string,
    user: User
}

const initialState: IAuthStatePayload = {
    isAuth: false,
    accessToken: '',
    user: {
        email: '',
        id: '',
        is_active: false,
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<IAuthStatePayload>) {
            state.accessToken = action.payload.accessToken;
            state.isAuth = !!action.payload.accessToken;
            state.user = action.payload.user;
            localStorage.setItem('token', state.accessToken);
            localStorage.setItem('user', state.user);
        },
        logout(state) {
            state.user = {
                email: '',
                id: '',
                is_active: false,
            };
            state.isAuth = false;
            state.accessToken = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer