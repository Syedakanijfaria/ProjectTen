import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize.js";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleNewUserWithEmail = (e, email, password) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //const user = result.user;
                console.log(result.user);
            })
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    const handleSignInWithEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //const user = result.user;
                console.log(result.user);
            })
    }



    const signInGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false));
    }
    //observer whether user auth state changed or not
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    return {
        user,
        isLoading,
        handleNewUserWithEmail,
        handleSignInWithEmail,
        handleEmailChange,
        handlePasswordChange,
        signInGoogle,
        logOut
    }
}

export default useFirebase;