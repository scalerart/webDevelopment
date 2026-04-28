import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import auth from "./firebae.config";
import { UserContext } from "../Context/ContextProvider";

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const loginRef = useRef(null);
    const emailRef = useRef(null);
    const { saveUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = loginRef.current;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setTimeout(() => {
            setSuccessMessage(null);
            setErrorMessage(null);
        }, 4000);

        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                const user = res.user;
                saveUser(user);
                setSuccessMessage('Login Successfully...')
                form.reset();
            })
            .catch(() => {
                setErrorMessage("Something went wrong!");
            })
    };

    // Reset Password
    const handleResetPassword = () => {
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccessMessage('We have send a password reset link to your email. Please click this email.');

                setTimeout(() => {
                    setSuccessMessage(null);
                }, 4000);
            })
            .catch(() => {
                setErrorMessage("Something went wrong!")
                setTimeout(() => {
                    setErrorMessage(null);
                }, 4000);
            })
    }

    // Google Sign In
    const handleGoogleSignIn = () => {

        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                saveUser(user);
                setSuccessMessage('Login Successfully...');

                setTimeout(() => {
                    setSuccessMessage(null);
                }, 4000);
            })
            .catch(() => {
                setErrorMessage("Something went wrong!")
                setTimeout(() => {
                    setErrorMessage(null);
                }, 4000);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                    Login
                </h2>

                <form ref={loginRef} onSubmit={handleSubmit} className="space-y-3">
                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-white/70" />
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Email Address"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-white/70" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                        <div
                            className="absolute top-4 right-3 text-white/70 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Remember + Forgot */}
                    <div className="flex justify-between items-center text-sm text-white/80">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="accent-white" /> Remember me
                        </label>
                        <span onClick={handleResetPassword} className="cursor-pointer hover:underline">Forgot Password?</span>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 cursor-pointer transition"
                    >
                        Login
                    </button>

                    {
                        successMessage && <p className="text-center px-1 py-1 bg-green-100 text-green-800 animate-bounce">{successMessage}</p>
                    }
                    {
                        errorMessage && <p className="text-center px-1 py-1 bg-red-100 text-red-800 animate-bounce">{errorMessage}</p>
                    }
                </form>

                {/* Divider */}
                <div className="flex items-center my-4">
                    <div className="flex-1 h-px bg-white/30"></div>
                    <span className="px-3 text-white/70 text-sm">OR</span>
                    <div className="flex-1 h-px bg-white/30"></div>
                </div>

                {/* Social Login */}
                <div className="space-y-2">
                    <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-200 transition cursor-pointer">
                        <FaGoogle /> Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer">
                        <FaFacebookF /> Continue with Facebook
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-200 transition cursor-pointer">
                        <FaGithub /> Continue with Github
                    </button>
                </div>

                <p className="text-center text-white/80 mt-4 text-sm">
                    Don't have an account? <Link to={'/register'}><span className="underline cursor-pointer">Register</span></Link>
                </p>
            </div>
        </div>
    );
}
