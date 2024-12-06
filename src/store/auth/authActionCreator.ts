import {IUserAuth} from "../../types/interfaces.ts";
import {AppDispatch} from "../store.ts";
import $api, {API_URL} from "../../axios";
import {loginError, loginRefresh, loginSuccess} from "./authSlice.ts";
import axios from "axios";

export const login = (data: IUserAuth) => {
    return async (dispatch: AppDispatch) => {
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
        }
    }
}

export const register = (data: IUserAuth) => {
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

export const checkAuth = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await axios.post(`${API_URL}/refresh`, {}, {withCredentials: true});
            dispatch(loginRefresh({
                accessToken: response.data.access_token
            }))
        } catch (error) {
            dispatch(loginRefresh({
                accessToken: ''
            }))
        }
    }
}

