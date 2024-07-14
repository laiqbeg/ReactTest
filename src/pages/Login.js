import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Layout/Header';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        try {
            // Perform login logic, e.g., API call
            const userData = { /* Login credentials */ };
            dispatch(login(userData)).then(() => {
                navigate('/dashboard');
            }).catch((err) => {
                console.error('Login failed', err);
            });;
            // console.log('going to redirect')
            // // Redirect to dashboard after successful login
            // navigate('/dashboard'); // Navigate programmatically to /dashboard route
            // console.log('redirected')
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className={"container"} id="wrapper">
            <Header />
            <div className="container" style={{ width: '400px', marginTop: '150px', border: '1px solid #ccc', borderRadius: '15px', padding: '30px' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>

    );
};

export default Login;
