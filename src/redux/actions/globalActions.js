import { MENU_TOGGLE } from '../types';

export const toggleMenu = (val) => async (dispatch) => {
    dispatch({ type: MENU_TOGGLE, payload: val });
};