import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

export default function ServicesSection() {
    const services = [
        {
            icon: <FaCode />,
            title: "Web Development",
            desc: "Modern and scalable web apps with high performance.",
        },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            desc: "Beautiful and user-friendly interface design.",
        },
        {
            icon: <FaMobileAlt />,
            title: "Responsive Design",
            desc: "Perfectly optimized for all devices.",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Services
                    </h2>
                    <p className="text-gray-600 mt-3">
                        We provide the best solutions for your business
                    </p>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((item, i) => (
                        <div
                            key={i}
                            className="group p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition duration-300 relative overflow-hidden"
                        >
                            {/* Gradient Hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 transition"></div>

                            <div className="text-indigo-600 text-3xl mb-4 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 text-sm">
                                {item.desc}
                            </p>

                            <button className="mt-5 text-indigo-600 font-medium hover:underline">
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}