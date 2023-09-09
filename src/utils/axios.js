import Axios from 'axios';

const axios = Axios.create()


const beforeRequest = config => {
    // handle config
    return config
}

axios.interceptors.request.use(beforeRequest)

const responseSuccess = response => {
    return response
}

const responseFailed = error => {
    return error
}

axios.interceptors.response.use(responseSuccess, responseFailed)

export default axios;
