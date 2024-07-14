import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://your-api-url.com', // Replace with your API URL
});

// Request interceptor to add the JWT token to headers
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Get token from localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor to handle responses and errors
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized error, e.g., redirect to login
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;
