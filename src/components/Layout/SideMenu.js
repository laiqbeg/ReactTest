import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import { toggleMenu } from '../../redux/actions/globalActions';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
    const toggle = useSelector(state => state.globalState.toggleMenu);
    const dispatch = useDispatch();
    const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleSubMenuClick = (index) => {
        if (activeSubMenu === index) {
            setActiveSubMenu(null); // Collapse if already active
        } else {
            setActiveSubMenu(index); // Expand if not active
        }
    };

    const menuItems = [
        {
            name: 'Dashboard',
            icon: 'bi bi-house',
            link: '/dashboard',
            isActive: true, // Example of active menu item
            subMenuItems: []
        },
        {
            name: 'Users',
            icon: 'bi bi-files',
            link: '/user',
            subMenuItems: []
        },
        {
            name: 'Product',
            icon: 'bi bi-files',
            link: '/product',
            subMenuItems: [
                { name: 'Add Product', link: '/product/add' },
                { name: 'View Products', link: '/product/view' }
            ]
        },
        {
            name: 'Messages',
            icon: 'bi bi-files',
            link: '/product',
            subMenuItems: []
        },
        {
            name: 'Category',
            icon: 'bi bi-files',
            link: '/category',
            subMenuItems: [
                { name: 'Add Category', link: '/category/add' },
                { name: 'View Categories', link: '/category/view' }
            ]
        }
    ];

    return (

        <div id="nav-bar" className={toggle ? "l-navbar show" : "l-navbar"}>
            <nav className="nav">
                <div>
                    <a href="#" className="nav_logo" onClick={() => dispatch(toggleMenu(toggle))}>
                        <i className='bi bi-list'></i>
                        <span className="nav_logo-name">Comapny</span>
                    </a>
                    <div className="nav_list">
                        <Link to="/dashboard" className="nav_link active">
                            <i className='bi bi-house'></i>
                            <span className="nav_name">Dashboard</span>
                        </Link>
                        <Link to="/user" className="nav_link">
                            <i className='bi bi-files'></i>
                            <span className="nav_name">Users</span>
                        </Link>
                        <Link to="/product" className="nav_link">
                            <i className='bi bi-files'></i>
                            <span className="nav_name">Product</span>
                        </Link>
                        <Link to="/category" className="nav_link">
                            <i className='bi bi-files'></i>
                            <span className="nav_name">Category</span>
                        </Link>
                        {/* {menuItems.map((menuItem, index) => (
                            <div key={index} className={`nav_link ${activeSubMenu === index ? 'active' : ''}`}>
                                <div className="nav_link" onClick={() => handleSubMenuClick(index)}>
                                    <i className={menuItem.icon}></i>
                                    <span className="nav_name">{menuItem.name}</span>
                                </div>
                                {menuItem.subMenuItems.length > 0 && activeSubMenu === index && (
                                    <div className="sub-menu">
                                        {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                                            <Link key={subIndex} to={subMenuItem.link} className="sub-menu-link">{subMenuItem.name}</Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))} */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
