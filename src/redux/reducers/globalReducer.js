import { MENU_TOGGLE } from '../types';

const initialState = {
    toggleMenu: false
};

const globalReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case MENU_TOGGLE:
            return {
                ...state,
                toggleMenu: !action.payload
            };
        default:
            return state;
    }
}

export default globalReducer;