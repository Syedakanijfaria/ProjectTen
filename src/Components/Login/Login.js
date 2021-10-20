import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './Login.css';

const Login = () => {

    const { signInGoogle, handleSignInWithEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';

    const handleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
        // .finally(() => setIsLoading(false));
    }
    return (
        <div className="login">
            <div className="">
                <div className="border border-dark bg-color p-4 mt-5">
                    <h2>Sign-In</h2>
                    <div className="p-4">
                        <p>Email: <input type="email" placeholder="Your Email"></input></p>
                        <br />
                        <p>Password: <input type="password" placeholder="Your Password"></input></p> <br />
                        <button className="px-4 btn-warning" onClick={handleSignInWithEmail}>Sign-In</button>
                    </div>
                    <div>---------------or-----------------</div>
                    <button className="px-4 btn-warning" onClick={handleGoogleLogin}>Google Sign-In</button>
                </div>
                <br />
                <div className="border border-dark  bg-color p-4">
                    <p>New to POWER GYMNSTER?
                        <Link to="register">
                            <button className="px-4 btn-warning">Create Your Account</button>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;