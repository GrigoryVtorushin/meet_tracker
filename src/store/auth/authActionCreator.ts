import {IUser} from "../../types/interfaces.ts";
import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import authSlice, {loginSuccess} from "./authSlice.ts";


export const login = (data: IUser) => {
    return async (dispatch: AppDispatch) => {
        console.log('log')

        try {
            const response = await $api.post('/login', {
                email: data.email,
                password: data.password
            })
            dispatch(loginSuccess({
                accessToken: response.data.accessToken,
                isAuth: !!response.data.accessToken,
                user: response.data.user
            }));
        } catch (error) {
            console.log(error)
        }
    }
}

export const register = (data: IUser) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.post('/register', {
                email: data.email,
                password: data.password
            })
            console.log(response)

        } catch (error) {
            console.log(error)
        }


    }
}

