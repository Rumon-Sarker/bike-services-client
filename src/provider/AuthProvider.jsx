import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //socail Login
    const socailLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)

    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth, user)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            const loginUser = {
                email: currentUser.email
            }
            if (currentUser && currentUser.email) {

                console.log("LoginUser", loginUser)
                fetch('https://test-nine-flame-81.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loginUser)

                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("jwt-token-secret", data.token);

                    }
                    )
            }
            else {
                localStorage.removeItem("jwt-token-secret")
            }
        })
        return () => {
            return unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loading,
        socailLogin,
        createUser,
        singIn,
        logOut

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;