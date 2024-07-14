import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import SideMenu from './SideMenu';
import Header from './Header';
import { useSelector } from 'react-redux';
import './Layout.css';
import { toggleMenu } from '../../redux/actions/globalActions';

const Layout = () => {
    const toggle = useSelector(state => state.globalState.toggleMenu);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return (
        <div className={toggle ? "body-pd-full-sidebar" : "body-pd"} id="wrapper">
            <Header />
            <SideMenu />
            <div id="page-content-wrapper">
                <div className="container-fluid">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
