import axios from 'axios';

const http = axios.create()


const beforeRequest = config => {
    // handle config
    return config
}

http.interceptors.request.use(beforeRequest)

const responseSuccess = response => {
    return response
}

const responseFailed = error => {
    return error
}

http.interceptors.response.use(responseSuccess, responseFailed)

export default http;
