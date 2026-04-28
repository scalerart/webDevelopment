import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Auth.</h2>
                    <p className="text-sm leading-relaxed">
                        Build modern web applications with clean UI and smooth user
                        experience. We focus on performance and design.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Services</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Subscribe</h3>
                    <p className="text-sm mb-4">Get latest updates and news.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="w-full px-3 py-2 rounded-l-lg bg-gray-800 text-sm focus:outline-none"
                        />
                        <button className="bg-indigo-600 px-4 rounded-r-lg text-white text-sm hover:bg-indigo-700">
                            Send
                        </button>
                    </div>

                    {/* Social */}
                    <div className="flex gap-4 mt-6">
                        <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 cursor-pointer">
                            <FaFacebookF />
                        </div>
                        <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 cursor-pointer">
                            <FaTwitter />
                        </div>
                        <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 cursor-pointer">
                            <FaInstagram />
                        </div>
                        <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-600 cursor-pointer">
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                © {new Date().getFullYear()} YourBrand. All rights reserved.
            </div>
        </footer >
    );
}
