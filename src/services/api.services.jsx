import axios from "axios"
import { getToken } from "../helper/tokenHelper";

const { VITE_BACKEND_PORT_DEVELOPMENT } = import.meta.env

//for user
axios.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});


const config = {
    headers: { "Content-Type": "multipart/form-data" }
}

//User
export const RegisterUser = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}register`, data)
}

export const LoginUser = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}login`, data, config)
}

//Profile
export const ProfileUpdateAPI = async (data) => {
    return await axios.post(`${VITE_BACKEND_PORT_DEVELOPMENT}user`, data, config)
}
export const ProfileGetAPI = async (data) => {
    return await axios.get(`${VITE_BACKEND_PORT_DEVELOPMENT}user`)
}