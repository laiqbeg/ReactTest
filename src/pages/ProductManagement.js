import React from 'react';
import ProductList from '../components/Product/ProductList';
import ProductForm from '../components/Product/ProductForm';

const ProductManagement = () => {
    return (
        <div>
            <ProductForm />
            <ProductList />
        </div>
    );
};

export default ProductManagement;
