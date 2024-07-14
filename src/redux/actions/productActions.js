import { FETCH_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT } from '../types';
import { getProducts, addProductService, updateProductService, deleteProductService } from '../../services/productService';

export const fetchProducts = () => async (dispatch) => {
    const products = await getProducts();
    dispatch({ type: FETCH_PRODUCTS, payload: products });
};

export const addProduct = (product) => async (dispatch) => {
    const newProduct = await addProductService(product);
    dispatch({ type: ADD_PRODUCT, payload: newProduct });
};

export const updateProduct = (product) => async (dispatch) => {
    const updatedProduct = await updateProductService(product);
    dispatch({ type: UPDATE_PRODUCT, payload: updatedProduct });
};

export const deleteProduct = (id) => async (dispatch) => {
    await deleteProductService(id);
    dispatch({ type: DELETE_PRODUCT, payload: id });
};
