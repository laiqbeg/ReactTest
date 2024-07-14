import { FETCH_CATEGORIES, ADD_CATEGORY, UPDATE_CATEGORY, DELETE_CATEGORY } from '../types';
import { getCategories, addCategoryService, updateCategoryService, deleteCategoryService } from '../../services/categoryService';

export const fetchCategories = () => async (dispatch) => {
    const categories = await getCategories();
    dispatch({ type: FETCH_CATEGORIES, payload: categories });
};

export const addCategory = (category) => async (dispatch) => {
    const newCategory = await addCategoryService(category);
    dispatch({ type: ADD_CATEGORY, payload: newCategory });
};

export const updateCategory = (category) => async (dispatch) => {
    const updatedCategory = await updateCategoryService(category);
    dispatch({ type: UPDATE_CATEGORY, payload: updatedCategory });
};

export const deleteCategory = (id) => async (dispatch) => {
    await deleteCategoryService(id);
    dispatch({ type: DELETE_CATEGORY, payload: id });
};
