import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchUserProfile, updateUserProfile } from '../redux/actions/userActions';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const profile = useSelector(state => state.user.profile);

    useEffect(() => {
        //dispatch(fetchUserProfile());
    }, [dispatch]);

    useEffect(() => {
        if (profile) {
            reset(profile);
        }
    }, [profile, reset]);

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
                        {...register('name', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        {...register('email', { required: true })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        {...register('password')}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Update Profile</button>
            </form>
        </div>
    );
};

export default UserProfile;
