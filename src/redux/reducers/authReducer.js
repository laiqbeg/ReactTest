import { LOGIN_SUCCESS, LOGOUT } from '../types';

const initialState = {
    isAuthenticated: !!localStorage.getItem('token'), // Check if token exists in local storage
    token: localStorage.getItem('token') || null,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log(state);
            return {
                ...state,
                token: action.payload.token,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};

export default authReducer;
