import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface User {
    email: string;
    id: string;
    is_active: boolean;
}
interface IAuthStatePayload {
    isAuth: boolean,
    accessToken?: string,
    user: User
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
            state.isAuth = !!action.payload.accessToken;
            state.user = action.payload.user;
            localStorage.setItem('token', state.accessToken);
            localStorage.setItem('user', JSON.stringify(state.user));
        },
        logout(state) {
            state.user = {} as User;
            state.isAuth = false;
            state.accessToken = '';
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})

export const { loginSuccess, logout } = authSlice.actions
export default authSlice.reducer