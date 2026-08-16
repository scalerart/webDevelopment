import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB29wndQEbMew15eSvlQLfYPAM7hXwWzI8",
    authDomain: "fir-af51a.firebaseapp.com",
    projectId: "fir-af51a",
    storageBucket: "fir-af51a.firebasestorage.app",
    messagingSenderId: "439550699583",
    appId: "1:439550699583:web:07dc557402c2ff2864708a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;