import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                {/* Left Info */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Have any questions or want to work with us? Feel free to reach out.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-600 text-white rounded-lg">
                                <FaMapMarkerAlt />
                            </div>
                            <p className="text-gray-700">Feni, Bangladesh</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-600 text-white rounded-lg">
                                <FaPhoneAlt />
                            </div>
                            <p className="text-gray-700">+880 1234-567890</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-indigo-600 text-white rounded-lg">
                                <FaEnvelope />
                            </div>
                            <p className="text-gray-700">info@example.com</p>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        Send Message
                    </h3>

                    <form className="space-y-5">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />

                        <textarea
                            rows="4"
                            placeholder="Your Message"
                            className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
