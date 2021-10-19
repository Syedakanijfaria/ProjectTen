import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from "../..//Image/logo/logo.png";
import useAuth from '../../Hooks/useAuth.js';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="container">
            <div className="container">
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
                        <div className="menu-container">
                            <ul className="d-flex align-items-end justify-content-end me-5">
                                <NavLink to="/home">Home</NavLink>
                                <NavLink to="/service">Service</NavLink>
                                <NavLink to="/package" >Package</NavLink>
                                <NavLink to="/trainer">Trainer</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <span style={{ color: 'white' }}>{user.displayName}</span>
                                {
                                    user.email ? <button onClick={logOut}>
                                        Log Out
                                    </button>
                                        :
                                        <NavLink to="/login">Login or Sign-In</NavLink>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;