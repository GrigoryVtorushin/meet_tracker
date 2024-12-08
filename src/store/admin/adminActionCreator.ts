import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import {getUsersSuccess} from "./adminSlice.ts";

export const getUsers = (page: number, perPage: number, email: string, role: '&role=MANAGER' | '&role=ADMIN' | '', is_banned: boolean) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/users?page=${page}&per_page=${perPage}${email}${role}&is_banned=${is_banned}`);
            dispatch(getUsersSuccess({
                page: response.data.page,
                per_page: response.data.per_page,
                total: response.data.total,
                items: response.data.items
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const banUser = (id: string) => {
    return async () => {
        try {
            await $api.post(`/users/${id}/ban`)
        } catch (error) {
            console.log(error)
        }
    }
}

export const changeUserRole = (id: string, role: 'ADMIN' | 'MANAGER') => {
    return async () => {
        try {
            await $api.patch(`/users/${id}/role`, {
                role: role
            })
        } catch (error) {
            console.log(error)
        }
    }
}