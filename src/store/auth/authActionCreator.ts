import {IUser} from "../../types/interfaces.ts";
import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import authSlice, {loginError, loginSuccess} from "./authSlice.ts";


export const login = (data: IUser) => {
    return async (dispatch: AppDispatch) => {
        console.log('log')

        try {
            const response = await $api.post('/login', {
                email: data.email,
                password: data.password
            })
            dispatch(loginSuccess({
                accessToken: response.data.access_token,
                user: response.data.user,
            }));
            console.log(response);
        } catch (error) {
            if (error.status === 422){
                dispatch(loginError({
                    logError: 'Неверные данные аккаунта'
                }))
            }

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
            dispatch(login(data))
            console.log(response)

        } catch (error) {
            console.log(error)
        }


    }
}

