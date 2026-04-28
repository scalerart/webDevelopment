import { useContext, useRef, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-router";
import { UserContext } from "../Context/ContextProvider";
import { GoogleAuthProvider, sendEmailVerification, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "./firebae.config";

export default function RegistrationForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    const { registerUser, saveUser } = useContext(UserContext);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rePassword = e.target.rePassword.value;
        const termsAccepted = e.target.acceptedChecked.checked;

        setTimeout(() => {
            setSuccessMessage(null);
            setErrorMessage(null);
        }, 4000);

        if (password !== rePassword) {
            alert('Password do not match!');
            return;
        }
        else if (password.length < 6 || rePassword.length < 6) {
            setErrorMessage('Your password must be at least 6 characters');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        if (!passwordRegex.test(rePassword)) {
            setErrorMessage('Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character');
            return;
        }
        else if (!termsAccepted) {
            setErrorMessage('You must accept the terms and conditions to register.');
            return;
        }


        registerUser(email, rePassword)
            .then(res => {
                const user = res.user;

                updateProfile(user, {
                    displayName: name
                })
                    .then(() => {
                        saveUser(user)
                    })
                setSuccessMessage('Register Successfully...');

                // Verification Email
                sendEmailVerification(user)
                    .then(() => {
                        setSuccessMessage('Please check your email and verify your account.');
                    })
                    .catch(() => {
                        setErrorMessage("Something went wrong!");
                    })

                // Reset Form Value
                form.reset();
            })
            .catch(() => {
                setErrorMessage("Something went wrong!");
            })
    };

    // Google Sign In
    const handleGoogleSignIn = () => {

        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const user = res.user;
                saveUser(user);
                setSuccessMessage('Register Successfully...');

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
        <div className="min-h-screen flex flex-col gap-5 items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
            <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white text-center mb-6">
                    Create Account
                </h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
                    {/* Name */}
                    <div className="relative">
                        <FaUser className="absolute top-4 left-3 text-white/70" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-white/70" />
                        <input
                            type="email"
                            name="email"
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

                    {/* Confirm Password */}
                    <div className="relative">
                        <FaLock className="absolute top-4 left-3 text-white/70" />
                        <input
                            type={showRePassword ? "text" : "password"}
                            name="rePassword"
                            placeholder="Confirm Password"
                            className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                        <div
                            className="absolute top-4 right-3 text-white/70 cursor-pointer"
                            onClick={() => setShowRePassword(!showRePassword)}
                        >
                            {showRePassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex justify-between items-center text-sm text-white/80">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="acceptedChecked"
                                className="accent-white"
                            />I agree to the <span className="hover:underline cursor-pointer text-white">Terms & Conditions</span>
                        </label>
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 cursor-pointer transition"
                    >
                        Register
                    </button>

                    {
                        successMessage && <p className="text-center px-1 py-1 bg-green-100 text-green-800 animate-bounce">{successMessage}</p>
                    }
                    {
                        errorMessage && <p className="text-center px-1 py-1 bg-red-100 text-red-800 animate-bounce">{errorMessage}</p>
                    }
                </form>

                {/* Divider */}
                <div className="flex items-center my-3">
                    <div className="flex-1 h-px bg-white/30"></div>
                    <span className="px-3 text-white/70 text-sm">OR</span>
                    <div className="flex-1 h-px bg-white/30"></div>
                </div>

                {/* Social Login */}
                <div className="space-y-3">
                    <button onClick={handleGoogleSignIn} className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-200 cursor-pointer transition">
                        <FaGoogle /> Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 cursor-pointer transition">
                        <FaFacebookF /> Continue with Facebook
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-200 cursor-pointer transition">
                        <FaGithub /> Continue with Github
                    </button>
                </div>

                <p className="text-center text-white/80 mt-6 text-sm">
                    Already have an account? <Link to={'/login'}><span className="underline cursor-pointer">Login</span></Link>
                </p>
            </div>
        </div>
    );
}
