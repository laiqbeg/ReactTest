import api from './api';

export const login = async (credentials) => {
    // const response = await api.post('/auth/login', credentials);
    // if (response.data.token) {
    //     localStorage.setItem('token', response.data.token); // Save token to localStorage
    // }
    // return response.data;
    var data = { token: 'Laiq', user: { name: 'laiq' } }
    localStorage.setItem('token', data.token);
    return data;
};

export const getProfile = async () => {
    const response = await api.get('/auth/profile');
    return response.data;
};

export const updateProfile = async (data) => {
    const response = await api.put('/auth/profile', data);
    return response.data;
};
