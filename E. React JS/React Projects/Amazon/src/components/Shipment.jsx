import { useContext } from "react";
import { FaUser, FaMapMarkerAlt, FaCity, FaEnvelope, FaPhone } from "react-icons/fa";
import { UserContext } from "../context/ContextProvider";

const Shipment = () => {
    const { user } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const address = e.target.address.value;
        const city = e.target.city.value;
        const phone = e.target.phone.value;


        console.log("Form have submited", name, email, address, city, phone);
    };

    return (
        <section className=" flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-xl shadow-sm p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* LEFT: Info */}
                <div className="flex flex-col justify-center space-y-5">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Shipping Details</h2>
                    <p className="text-gray-500 text-sm">Enter your delivery information to complete your order.</p>

                    <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-sm text-gray-600 space-y-2">
                        <p><span className="font-extrabold text-orange-500">O</span> Fast Delivery</p>
                        <p><span className="font-extrabold text-orange-500">O</span> Secure Checkout</p>
                        <p><span className="font-extrabold text-orange-500">O</span> Easy Return Policy</p>
                    </div>
                </div>

                {/* RIGHT: FORM */}
                <form onSubmit={handleSubmit} className="space-y-3">

                    {/* Name */}
                    <div className="relative">
                        <FaUser className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="text"
                            name="name"
                            defaultValue={user?.displayName}
                            placeholder="Full Name"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none  focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative">
                        <FaEnvelope className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="email"
                            name="email"
                            defaultValue={user?.email}
                            placeholder="Email"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Phone */}
                    <div className="relative">
                        <FaPhone className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Address */}
                    <div className="relative">
                        <FaMapMarkerAlt className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="text"
                            name="address"
                            placeholder="Address"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* City */}
                    <div className="relative">
                        <FaCity className="absolute top-4 left-3 text-gray-400" />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            required
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                    </div>

                    {/* Error
                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )} */}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg cursor-pointer transition"
                    >
                        Continue to Payment →
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Shipment;