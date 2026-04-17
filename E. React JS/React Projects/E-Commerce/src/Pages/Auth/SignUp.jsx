import { useState } from "react";
import { FaGoogle, FaFacebookF, FaTwitter, FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router";
import signupImage from '../../assets/login_signupImage.png'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section className='container m-auto px-5 my-8 md:py-0'>
            <div className="flex flex-col md:flex-row-reverse items-center">
                {/* Left Side */}
                <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 sm:p-4 md:p-6">
                    <div className="w-full max-w-md bg-white px-5 py-5 rounded-2xl shadow md:shadow-lg border border-gray-200 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Create Account</h2>
                        <p className="text-gray-500 mb-6">Fill in your details to create a new account</p>

                        <form className="space-y-2">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full py-2.5 pl-5 rounded-md bg-gray-100 border border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email Address"
                                    className="w-full py-2.5 pl-5 rounded-md bg-gray-100 border border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
                                </div>

                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        className="w-full py-2.5 pl-5 rounded-md bg-gray-100 border border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                                    />

                                    <span
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-5 top-2.5 cursor-pointer text-gray-500"
                                    >
                                        {showPassword ? <FaEyeSlash size={23} /> : <FaEye size={23} />}
                                    </span>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Confirm Password</label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        placeholder="Confirm Password"
                                        className="w-full py-2.5 pl-5 rounded-md bg-gray-100 border border-gray-200 shadow text-gray-700  placeholder-gray-400 transition-all duration-300 focus:outline-none focus:bg-white focus:border-[#F73B71] focus:ring-2 focus:ring-[#F73B71]/20"
                                    />
                                    <span
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-5 top-2.5 cursor-pointer text-gray-500"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={23} /> : <FaEye size={23} />}
                                    </span>
                                </div>
                            </div>

                            {/* Button */}
                            <button className="w-full bg-[#F73B71]/90 text-white py-2 rounded-lg hover:bg-[#F73B71] transition cursor-pointer">Create Account</button>
                        </form>

                        {/* Login redirect */}
                        <p className="text-sm text-gray-500 mt-4 text-center">Already have an account?
                            <Link to='/login'>
                                <span className="text-red-400 cursor-pointer"> Login</span>
                            </Link>
                        </p>


                        {/* Social Icons */}
                        <div className="flex justify-center gap-3 mt-3">
                            <button className="p-4 border cursor-pointer main-color border-gray-300 bg-gray-100 rounded-full hover:border-[#F73B71] transition-all"><FaGoogle /></button>

                            <button className="p-4 border cursor-pointer main-color border-gray-300 bg-gray-100 rounded-full hover:border-[#F73B71] transition-all"><FaFacebookF /></button>

                            <button className="p-4 border cursor-pointer main-color border-gray-300 bg-gray-100 rounded-full hover:border-[#F73B71] transition-all"><FaTwitter /></button>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden md:block md:w-1/2">
                    <img
                        src={signupImage}
                        alt="login"
                        className="w-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
}

export default SignUp;