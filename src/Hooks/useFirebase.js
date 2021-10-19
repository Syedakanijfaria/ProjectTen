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

    const createNewUserWithEmail = () => {
        //e.preventDefaault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //const user = result.user;
                console.log(result.user);
            })
    }
    const signInWithEmail = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                //const user = result.user;
                console.log(result.user);
            })
    }

    const signInGoogle = () => {
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
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
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return {
        user,
        createNewUserWithEmail,
        signInWithEmail,
        signInGoogle,
        logOut
    }
}

export default useFirebase;