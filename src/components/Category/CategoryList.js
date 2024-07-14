import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from '../../redux/actions/categoryActions';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteCategory(id));
    };

    return (
        <div className="container">
            <h1>Category List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleDelete(category.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CategoryList;
