import { FETCH_USER_PROFILE, UPDATE_USER_PROFILE } from '../types';

const initialState = {
    profile: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case UPDATE_USER_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
