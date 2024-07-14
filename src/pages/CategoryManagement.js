import React from 'react';
import CategoryList from '../components/Category/CategoryList';
import CategoryForm from '../components/Category/CategoryForm';

const CategoryManagement = () => {
    return (
        <div>
            <CategoryForm />
            <CategoryList />
        </div>
    );
};

export default CategoryManagement;
