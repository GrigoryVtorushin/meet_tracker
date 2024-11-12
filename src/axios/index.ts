import axios from "axios";

const $api = axios.create({
    withCredentialsL: true,
    baseURL: 'http://meet-tracker.fvds.ru:8000/api'
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;