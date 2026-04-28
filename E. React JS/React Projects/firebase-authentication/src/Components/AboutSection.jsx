import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src="https://illustrations.popsy.co/white/web-design.svg"
                        alt="About"
                        className="w-full max-w-md"
                    />
                </div>

                {/* Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        About Our Company
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        We are passionate about building modern, scalable and user-friendly
                        web applications. Our team focuses on delivering high quality
                        solutions with the latest technologies.
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <FaCheckCircle className="text-indigo-600 mt-1" />
                            <p className="text-gray-700">High quality and clean code</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaCheckCircle className="text-indigo-600 mt-1" />
                            <p className="text-gray-700">Modern UI/UX design</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <FaCheckCircle className="text-indigo-600 mt-1" />
                            <p className="text-gray-700">Fast and responsive performance</p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
}
