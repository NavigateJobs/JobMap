
import axios from "axios";
import { JobLocator } from "../store/user.mmkv";

const apiClient = axios.create({
    baseURL: 'https://bemaps-customer.onrender.com/api/v1'
})

apiClient.interceptors.request.use(
    (config) => {
        const token = JobLocator.getString('token');

        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        console.log(':arrow_right: [Request]', config.method?.toUpperCase(), config.url);
        console.log(':arrow_right: [Request Headers]', config.headers);
        console.log(':arrow_right: [Request Body]', config.data);

        return config;
    },
    (error) => {
        console.error(error);
        if (error.response) {
            console.log(':x: [Response Error]', error.response.status);
            console.log(':x: [Error Data]', error.response.data);
        } else {
            console.log(':x: [Network Error]', error.message);
        }
        return Promise.reject(error);
    }
);
apiClient.interceptors.response.use(
    (response) => {
        console.log(':arrow_left: [Response]', response.config.url);
        console.log(':arrow_left: [Response]', response.config.url);

        return response
    },
    (error) => {
        if(error.response) {
            console.log(':x: [Response Error]', error.response.status)
            console.log(':x: [Error Data]', error.response.data)
        } else {
            console.log(':x: [Network Error]', error.message)
        }
        return Promise.reject(error)
    }
)

export default apiClient