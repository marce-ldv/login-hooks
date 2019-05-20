import axios from "axios";

export const apiConfig = {
    baseURL: 'http://localhost:4000/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

const axiosInstance= axios.create({
    baseURL: apiConfig.baseURL,
    headers: apiConfig.headers,
});

export default axiosInstance;
