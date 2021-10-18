import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className="register">
            <div>
                <div class="border border-dark">
                    <h2>Create Your Account</h2>
                    <form onSubmit="">
                        <input type="email" placeholder="Your Email" /> <br />
                        <input type="password" placeholder="Your Password" /> <br />
                        <input type="password" placeholder="Re-enter Your Password" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <br />
                <div class="border border-dark">
                    <p>Already have an account?<Link to="/login">  <button className="btn-regular">Sign-In</button></Link></p>
                    <div>---------------or-----------------</div>
                    <button className="btn-regular">Google Sign-In</button>
                </div>

            </div>
        </div >
    );
};

export default Register;