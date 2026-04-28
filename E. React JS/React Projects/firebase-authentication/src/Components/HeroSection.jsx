import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                {/* Left Content */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Build Modern Web Apps <br />
                        <span className="text-yellow-300">With Confidence</span>
                    </h1>

                    <p className="text-lg text-white/80 mb-8">
                        Create fast, responsive and beautiful web applications using
                        React, Tailwind CSS and modern technologies.
                    </p>

                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-200 transition flex items-center gap-2">
                            Get Started <FaArrowRight />
                        </button>

                        <button className="px-6 py-3 border border-white rounded-xl hover:bg-white hover:text-indigo-600 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <img
                        src="https://illustrations.popsy.co/white/web-design.svg"
                        alt="Hero"
                        className="w-full max-w-md"
                    />
                </div>
            </div>
        </section>
    );
}
