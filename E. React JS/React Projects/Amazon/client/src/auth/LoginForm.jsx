import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import { useContext, useRef, useState } from "react";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { UserContext } from "../context/ContextProvider";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const loginRef = useRef(null);
    const emailRef = useRef(null);

    const { saveUser, auth } = useContext(UserContext);

    // Handle Submit Form
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = loginRef.current;
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                saveUser(res.user);
                setSuccessMessage("Login successful");
                navigate(from, { replace: true });
                form.reset();

                setTimeout(() => setSuccessMessage(null), 3000);
            })
            .catch(() => {
                setErrorMessage("Invalid email or password");
                setTimeout(() => setErrorMessage(null), 3000);
            });
    };

    const handleResetPassword = () => {
        const email = emailRef.current.value;

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSuccessMessage("Password reset link sent to email");
                setTimeout(() => setSuccessMessage(null), 3000);
            })
            .catch(() => {
                setErrorMessage("Enter valid email first");
                setTimeout(() => setErrorMessage(null), 3000);
            });
    };

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((res) => {
                saveUser(res.user);
                navigate(from, { replace: true });
                setSuccessMessage("Google login successful");

                setTimeout(() => setSuccessMessage(null), 3000);
            })
            .catch(() => {
                setErrorMessage("Google login failed");
                setTimeout(() => setErrorMessage(null), 3000);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-8">

                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 text-sm mb-6">
                    Login to continue your shopping
                </p>

                <form ref={loginRef} onSubmit={handleSubmit} className="space-y-4">

                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Email address"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-200 focus:border-orange-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-200 focus:border-orange-400 outline-none transition"
                            required
                        />

                        <div
                            className="absolute top-4 right-3 text-gray-500 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Forgot */}
                    <div className="flex justify-between text-sm text-gray-500">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" />
                            Remember me
                        </label>

                        <span
                            onClick={handleResetPassword}
                            className="cursor-pointer hover:text-orange-500"
                        >
                            Forgot password?
                        </span>
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer shadow-md"
                    >
                        Login
                    </button>

                    {/* Messages */}
                    {successMessage && (
                        <p className="text-green-600 text-center text-sm animate-pulse">
                            {successMessage}
                        </p>
                    )}

                    {errorMessage && (
                        <p className="text-red-500 text-center text-sm animate-pulse">
                            {errorMessage}
                        </p>
                    )}
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-3 text-gray-400 text-sm">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Social */}
                <div className="space-y-3">

                    <button
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border hover:bg-gray-50 transition cursor-pointer"
                    >
                        <FaGoogle className="text-red-500" />
                        Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer">
                        <FaFacebookF />
                        Continue with Facebook
                    </button>

                    <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition cursor-pointer">
                        <FaGithub />
                        Continue with GitHub
                    </button>
                </div>

                {/* Register */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-orange-500 hover:underline">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default LoginForm;