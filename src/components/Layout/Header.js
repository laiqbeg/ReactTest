import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, } from '../../redux/actions/authActions';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //     <div className="container-fluid">
        //         <Link className="navbar-brand" to="/dashboard">Admin Panel</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav ms-auto">
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/user-profile">Profile</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <header className="header" id="header">
            <div className="header_toggle">
                {/* <i class='bi bi-x' id="header-toggle"></i>  */}
            </div>
            {
                isAuthenticated ?
                    <a href="#" className="nav_link"> <i className='bi bi-box-arrow-right' onClick={handleLogout}></i> <span className="nav_name"></span> </a>
                    : null}
            {/* <div class="header_img"> <img src="" alt="" />User </div> */}
        </header>
    );
};

export default Header;
