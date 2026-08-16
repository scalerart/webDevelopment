import React, { createContext, useEffect, useState } from 'react';
import auth from '../auth/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    // Register New User
    const registerUser = (email, rePassword) => {
        return createUserWithEmailAndPassword(auth, email, rePassword);
    };

    // Save User
    const saveUser = (user) => {
        setUser(user);
    }

    // Log out
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
    }, []);

    // Total Cart Item
    const cartItem = (item) => {
        setItem(item)
    }

    const userInformation = {
        registerUser,
        user,
        logOut,
        saveUser,
        auth,
        cartItem,
        item,
        setItem
    };

    return (
        <UserContext.Provider value={userInformation}>
            {!loading && children}
        </UserContext.Provider>
    );
};

export default ContextProvider;