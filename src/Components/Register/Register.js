
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './Register.css';

const Register = () => {

    const { handleNewUserWithEmail, handlePasswordChange, handleEmailChange } = useAuth();

    return (
        <div className="register">
            <div>
                <div className="border border-dark">
                    <h2>Create Your Account</h2>
                    <form onSubmit={handleNewUserWithEmail}>
                        <label htmlFor="email" >Email: </label>
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" /> <br />
                        <label htmlFor="email" >Password: </label>
                        <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
                        <br />
                        <button className="ms-5" type="submit" >Sign-up</button>
                    </form>
                </div>





                <br />
                <div className="border border-dark">
                    <p>Already have an account?</p><Link to="login">
                        <button className="btn-regular ms-5">Sign-In</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Register;