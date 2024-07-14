import { FETCH_USER_PROFILE, UPDATE_USER_PROFILE } from '../types';
import { getUserProfile, updateUserProfileService } from '../../services/userService';

export const fetchUserProfile = () => async (dispatch) => {
    const data = await getUserProfile();
    dispatch({ type: FETCH_USER_PROFILE, payload: data });
};

export const updateUserProfile = (profile) => async (dispatch) => {
    const data = await updateUserProfileService(profile);
    dispatch({ type: UPDATE_USER_PROFILE, payload: data });
};
