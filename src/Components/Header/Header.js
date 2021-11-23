import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../..//Image/logo/logo.png";
import useAuth from '../../Hooks/useAuth.js';


const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div className="header sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    {/* Logo and logo-icon */}
                    <div className="col-md-2">
                        <div className="logo-img d-flex">
                            <img className="w-100" src={logo} alt="" />
                            <h3 className="m-auto">POWER GYMNSTER hello</h3>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    {/* header nav link */}
                    <div className="col-md-10 m-auto collapse navbar-collapse" id="navbarNav">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <Link to="/home">Home</Link>

                                <Link to="/package" >Package</Link>
                                <Link to="/trainer">Trainers</Link>
                                <Link to="/about">About us</Link>
                                <span style={{ color: 'white' }}>{user?.displayName}</span>
                                {
                                    user?.email ? <button onClick={logOut}>
                                        Log Out
                                    </button>
                                        :
                                        <Link to="/login">Login or Sign-Up</Link>}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;