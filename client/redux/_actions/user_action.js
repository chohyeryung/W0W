import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

export function loginUser(dataToSubmit) {
    const request = axios({
        method: 'post',
        data: dataToSubmit,
        url: 'http://localhost:5000/users/login',
        changeOrigin: true,
    }).then(response => response.data)
    // const request = axios.post('/users/login', dataToSubmit)
    //     .then(response => response.data)
    
    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function registerUser(dataToSubmit) {
    const request = axios({
        method: 'post',
        data: dataToSubmit,
        url: 'http://localhost:5000/users/register',
        changeOrigin: true,
    }).then(response => response.data)
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}