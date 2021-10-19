import { signInWithEmailLink } from '@firebase/auth';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth.js';
import './Login.css';

const Login = () => {

    const { signInGoogle } = useAuth();
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
                <div class="border border-dark">
                    <h2>Sign-In</h2>
                    <form onSubmit={signInWithEmailLink}>
                        <input type="email" id="" placeholder="Your Email" />
                        <br />
                        <input type="password" name="" id="" placeholder="Your Password" /> <br />
                        <input type="submit" value="Sign-In" />
                    </form>
                    <div>---------------or-----------------</div>
                    <button className="btn-regular" onClick={handleGoogleLogin}>Google Sign-In</button>
                </div>
                <br />
                <div class="border border-dark">
                    <p>New to POWER GYMNSTER?  <Link to="register"><button className="btn-regular">Create Your Account</button></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;