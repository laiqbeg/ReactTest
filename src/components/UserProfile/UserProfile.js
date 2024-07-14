import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../../redux/actions/userActions';

const UserProfile = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);

    const onSubmit = (data) => {
        dispatch(updateUserProfile(data));
    };

    return (
        <div className="container">
            <h1>User Profile</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        defaultValue={user.name}
                        {...register('name', { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        defaultValue={user.email}
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span>This field is required</span>}
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default UserProfile;
