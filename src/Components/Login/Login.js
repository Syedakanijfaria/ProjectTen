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
            <div>
                <div className="border border-dark">
                    <h2>Sign-In</h2>
                    <div>
                        <input type="email" placeholder="Your Email" />
                        <br />
                        <input type="password" placeholder="Your Password" /> <br />
                        <button onClick={handleSignInWithEmail}>Sign-In</button>
                    </div>
                    <div>---------------or-----------------</div>
                    <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign-In</button>
                </div>
                <br />
                <div className="border border-dark">
                    <p>New to POWER GYMNSTER?  <Link to="register"><button className="btn-regular">Create Your Account</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;