import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import {getUsersSuccess} from "./adminSlice.ts";

export const getUsers = (page: number, perPage: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/users?page=${page}&per_page=${perPage}`);
            dispatch(getUsersSuccess({
                page: response.data.page,
                per_page: response.data.per_page,
                total: response.data.total,
                items: response.data.items
            }))
            console.log(response.data)
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