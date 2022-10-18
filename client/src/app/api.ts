import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '',
    headers: {}
})

axiosInstance.interceptors.request.use((config) => {
    return config;
})

export default axiosInstance;