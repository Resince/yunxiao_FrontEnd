import Axios from 'axios';
import { myToken } from './token';
import { useStore } from '@/store';


const myAxios = Axios.create({
    baseURL: "http://127.0.0.1:4523/m1/3272445-0-default",
    timeout: 10000
})


const beforeRequest = (config) => {
    const token = myToken.getToken()
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}

const responseSuccess = response => {
    if (response.data.code === 401) {
        const { authStore } = useStore();
        authStore.logout();
    }
    return response
}

const responseFailed = error => {
    if (error.response.status === 401) {
        const { authStore } = useStore();
        authStore.logout();
    }
    return error
}

myAxios.interceptors.request.use(beforeRequest)
myAxios.interceptors.response.use(responseSuccess, responseFailed)

export default myAxios;
