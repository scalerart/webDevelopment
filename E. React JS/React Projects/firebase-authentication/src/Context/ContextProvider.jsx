import React, { createContext, useEffect, useState } from 'react';
import auth from '../Auth/firebae.config'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Create User Function
    const registerUser = (email, rePassword) => {
        return createUserWithEmailAndPassword(auth, email, rePassword);
    };

    // Save User
    const saveUser = (user) => {
        setUser(user);
    };

    const logOut = () => {
        return signOut(auth);
    }

    // Monitor auth state changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setLoading(false);
        })
    }, [])

    const userInformation = {
        registerUser,
        saveUser,
        user,
        logOut
    };

    return (
        <UserContext.Provider value={userInformation}>
            {!loading && children}
        </UserContext.Provider>
    );
};

export default ContextProvider;