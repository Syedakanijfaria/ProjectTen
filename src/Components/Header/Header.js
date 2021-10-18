import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../..//Image/logo/logo.png";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="row">
                    {/* Logo and logo-icon */}
                    <div className="col-md-2">
                        <div className="logo-img d-flex ">
                            <img className="w-50" src={logo} alt="" />
                            <h3 className="m-auto">POWER GYMNSTER</h3>
                        </div>
                    </div>
                    {/* header nav link */}
                    <div className="col-md-10 m-auto">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/courses">Courses</NavLink>
                                <NavLink to="/teacher">Teacher</NavLink>
                                <a href="#login">Login</a>
                                <NavLink to="/about">About</NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;