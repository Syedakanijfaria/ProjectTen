import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase.js';
import './Login.css';

const Login = () => {
    const { user, signInGoogle } = useFirebase();
    return (
        <div className="login">
            <div>
                <div class="border border-dark">
                    <h2>Sign-In</h2>
                    <form onSubmit="">
                        <input type="email" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" placeholder="Your Password" /> <br />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
                <br />
                <div class="border border-dark">
                    <p>New to POWER GYMNSTER?  <Link to="register"><button className="btn-regular">Create Your Account</button></Link></p>
                    <div>---------------or-----------------</div>
                    <button className="btn-regular" onClick={signInGoogle}>Google Sign-In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;