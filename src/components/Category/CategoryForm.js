import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addCategory, updateCategory } from '../../redux/actions/categoryActions';

const CategoryForm = ({ category }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: category || {} });
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (category) {
            dispatch(updateCategory(data));
        } else {
            dispatch(addCategory(data));
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">{category ? 'Update' : 'Add'} Category</button>
            </form>
        </div>
    );
};

export default CategoryForm;
