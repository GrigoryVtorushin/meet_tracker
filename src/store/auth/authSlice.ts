import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User {
    email: string;
    id: string;
    role: string;
    is_banned: boolean;
}
interface IAuthStatePayload {
    isAuth: boolean,
    accessToken?: string,
    user: User,
    logError?: string
}

const initialState: IAuthStatePayload = {
    isAuth: !!localStorage.getItem('token'),
    accessToken: localStorage.getItem('token') ?? '',
    user: JSON.parse(localStorage.getItem('user')) ?? {} as User
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<IAuthStatePayload>) {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isAuth = !!action.payload.accessToken;
            state.logError = ''
            localStorage.removeItem('logError')
            localStorage.setItem('token', state.accessToken);
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout(state) {
            state.user = {} as User;
            state.isAuth = false;
            state.accessToken = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        },
        loginError(state, action: PayloadAction<IAuthStatePayload>) {
            state.logError = action.payload.logError;
            localStorage.setItem('logError', state.logError)
        }
    }
})

export const { loginSuccess, logout, loginError } = authSlice.actions
export default authSlice.reducer