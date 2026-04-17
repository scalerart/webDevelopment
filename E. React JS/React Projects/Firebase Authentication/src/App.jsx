import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaFacebookF } from "react-icons/fa";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-purple-800 to-pink-800 p-3">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FaUser className="absolute top-4 left-3 text-white/70" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white"
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
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white"
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
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/20 text-white placeholder-white/70
              focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <div
              className="absolute top-4 right-3 text-white/70 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-white text-purple-600 font-semibold hover:bg-purple-100 transition cursor-pointer"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-white/30"></div>
          <span className="px-3 text-white/70 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/30"></div>
        </div>

        {/* Social Login */}
        <div className="space-y-3">
          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-white text-gray-700 font-medium hover:bg-gray-100 transition cursor-pointer">
            <FaGoogle /> Continue with Google
          </button>

          <button className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition cursor-pointer">
            <FaFacebookF /> Continue with Facebook
          </button>
        </div>

        <p className="text-center text-white/80 mt-4 text-sm">
          Already have an account? <span className="underline cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  );
}
