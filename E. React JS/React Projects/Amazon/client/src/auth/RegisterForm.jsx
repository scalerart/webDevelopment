import { useContext, useRef, useState } from "react";
import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash,
    FaGoogle,
    FaFacebookF,
    FaGithub,
    FaUser,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../context/ContextProvider";
import {
    GoogleAuthProvider,
    sendEmailVerification,
    signInWithPopup,
    updateProfile,
} from "firebase/auth";

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const formRef = useRef(null);
    const { registerUser, saveUser, auth } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;

        setError(null);
        setSuccessMessage(null);

        if (password !== rePassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        registerUser(email, password)
            .then((res) => {
                const user = res.user;

                updateProfile(user, {
                    displayName: name,
                }).then(() => saveUser(user));

                sendEmailVerification(user)
                    .then(() => {
                        setSuccessMessage('Thank you for signing up! Please verify your email to activate your account')
                    })

                setSuccessMessage("Account created successfully");
                form.reset();

                setTimeout(() => {
                    setSuccessMessage(null),
                        navigate('/login')
                }, 3000);

            })
            .catch(() => {
                setError("Registration failed");
                setTimeout(() => setError(null), 3000);
            });
    };

    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((res) => {
                saveUser(res.user);
                setSuccessMessage("Google signup successful 🎉");

                setTimeout(() => setSuccessMessage(null), 3000);
            })
            .catch(() => {
                setError("Google signup failed");
                setTimeout(() => setError(null), 3000);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white p-8">

                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-gray-800">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 text-sm mt-1 mb-6">
                    Join us and start shopping
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

                    {/* Name */}
                    <div className="relative">
                        <FaUser className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full name"
                            className="w-full pl-10 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-200 focus:border-orange-400 outline-none transition"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            className="w-full pl-10 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-200 focus:border-orange-400 outline-none transition"
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
                            className="absolute top-4 right-3 cursor-pointer text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type={showRePassword ? "text" : "password"}
                            name="rePassword"
                            placeholder="Confirm password"
                            className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-100 focus:bg-white border border-gray-200 focus:border-orange-400 outline-none transition"
                            required
                        />
                        <div
                            className="absolute top-4 right-3 cursor-pointer text-gray-500"
                            onClick={() => setShowRePassword(!showRePassword)}
                        >
                            {showRePassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Messages */}
                    {successMessage && (
                        <p className="text-green-600 text-sm text-center animate-pulse">
                            {successMessage}
                        </p>
                    )}

                    {error && (
                        <p className="text-red-500 text-sm text-center animate-pulse">
                            {error}
                        </p>
                    )}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold transition cursor-pointer shadow-md"
                    >
                        Create Account
                    </button>
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
                        className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border bg-white hover:bg-gray-50 transition cursor-pointer"
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

                {/* Login link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-orange-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterForm;