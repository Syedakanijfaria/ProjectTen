import { createUserWithEmailAndPassword } from '@firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <div>
                <div class="border border-dark">
                    <h2>Create Your Account</h2>
                    <form onSubmit={createUserWithEmailAndPassword}>
                        <input type="email" placeholder="Your Email" /> <br />
                        <input type="password" placeholder="Your Password" /> <br />
                        <input type="password" placeholder="Re-enter Your Password" />
                        <br />
                        <input className="ms-5" type="submit" value="Sign-Up" />
                    </form>
                </div>
                <br />
                <div class="border border-dark">
                    <p>Already have an account?</p><Link to="login">
                        <button className="btn-regular ms-5">Sign-In</button></Link>
                </div>
            </div>
        </div >
    );
};

export default Register;