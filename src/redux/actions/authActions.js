import { LOGIN_SUCCESS, LOGOUT } from '../types';
import { login as loginService } from '../../services/authService';

export const login = (credentials) => async (dispatch) => {
    const data = await loginService(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
};

export const logout = () => {
    localStorage.removeItem('token');
    return { type: LOGOUT };
};
