import { useState } from "react";
import { FaGoogle, FaFacebookF, FaTwitter, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import loginImage from '../../assets/login_signupImage.png'

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className='container m-auto px-5 my-8 md:py-0'>
      <div className="flex flex-col md:flex-row-reverse items-center justify-center">
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 sm:p-4 md:p-6">
          <div className="w-full max-w-md bg-white px-8 py-10 rounded-2xl shadow md:shadow-lg border border-gray-200 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Login</h2>
            <p className="text-gray-500 mb-6">
              Enter your email and password to access your account
            </p>

            <form className="space-y-2">
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
                  <span className="text-sm text-red-400 cursor-pointer">Forgot Password?</span>
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

              {/* Button */}
              <button className="w-full bg-[#F73B71]/90 text-white py-2 rounded-lg hover:bg-[#F73B71] transition cursor-pointer">
                Login Now
              </button>
            </form>

            {/* Sign up */}
            <p className="text-sm text-gray-500 mt-4 text-center">
              If you don’t have an account,
              <Link to='/signup'>
                <span className="text-red-400 cursor-pointer"> Sign Up Now</span>
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
            src={loginImage}
            alt="login"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </section>
  );
}
export default LoginPage;