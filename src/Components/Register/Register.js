import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './Register.css';

const Register = () => {
    const { handleNewUserWithEmail, handlePasswordChange, handleEmailChange } = useAuth();
    return (
        <div className="register">
            <div className="">
                <div className="border border-dark bg-color p-4 mt-5">
                    <h2>Create Your Account</h2>
                    <div className="p-4">
                        <label htmlFor="email" >Email: </label>
                        <input onBlur={handleEmailChange} type="email" placeholder="Your Email" /> <br />
                        <label htmlFor="email" >Password: </label>
                        <input onBlur={handlePasswordChange} type="password" placeholder="Your Password" /> <br />
                        <br />
                        <button className="px-4 btn-warning" onClick={handleNewUserWithEmail} >Sign-up</button>
                    </div>
                </div>
                <br />
                <div className="border bg-color border-dark p-4">
                    <p>Already have an account?
                        <Link to="login">
                            <button className="btn-warning px-4">Sign-In</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Register;