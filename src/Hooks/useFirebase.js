import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize.js";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
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
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result.user);
            })
        // .catch((error) => {

        // })
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    //observer whether user auth state changed or not
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
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