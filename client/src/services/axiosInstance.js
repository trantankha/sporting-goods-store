import axios from "axios";
import isTokenExpired from '../utils/tokenUtils';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {
        'Content-Type': 'application/json'
    },
});

let failedQueue = [];
let isRefreshing = false;

const processQueue = (error, token = null) => {
    failedQueue.forEach(prom => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });

    failedQueue = [];
};



axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accesstoken');
        if (token && !isTokenExpired(token)) {
            config.headers['Authorization'] = `Bearer ${token}`;
        } else {
            console.warn("Token is expired or invalid.");
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject });
                })
                    .then(token => {
                        originalRequest.headers['Authorization'] = 'Bearer ' + token;
                        return axiosInstance(originalRequest);
                    })
                    .catch(err => {
                        return Promise.reject(err);
                    });
            }

            // originalRequest._retry = true;
            // isRefreshing = true;

            // const refreshToken = localStorage.getItem('refreshToken');
            // return new Promise(function (resolve, reject) {
            //     axios.post('http://localhost:5000/api/auth/refresh', { token: refreshToken })
            //         .then(({ data }) => {
            //             localStorage.setItem('accesstoken', data.accessToken);
            //             localStorage.setItem('refreshToken', data.refreshToken);
            //             axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + data.accessToken;
            //             originalRequest.headers['Authorization'] = 'Bearer ' + data.accessToken;
            //             processQueue(null, data.accessToken);
            //             resolve(axiosInstance(originalRequest));
            //         })
            //         .catch((err) => {
            //             processQueue(err, null);
            //             localStorage.removeItem('accesstoken');
            //             localStorage.removeItem('refreshToken');
            //             window.location.href = '/login';
            //             reject(err);
            //         })
            //         .finally(() => {
            //             isRefreshing = false;
            //         });
            // });
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;