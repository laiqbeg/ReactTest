import api from './api';

export const getCategories = async () => {
    const response = { data: [] };//await api.get('/categories');
    return response.data;
};

export const addCategoryService = async (category) => {
    const response = await api.post('/categories', category);
    return response.data;
};

export const updateCategoryService = async (category) => {
    const response = await api.put(`/categories/${category.id}`, category);
    return response.data;
};

export const deleteCategoryService = async (id) => {
    await api.delete(`/categories/${id}`);
};
