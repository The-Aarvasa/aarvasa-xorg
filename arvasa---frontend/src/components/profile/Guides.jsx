import React from "react";
import teacherImg from "/assets/profileguidesteacher.png";
import { PlusSquare, MapPin, Camera, Home } from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Enter the property details",
        desc: "Fill the necessary details and type to post your property",
        icon: <PlusSquare className="text-[#FBAA5B]" />,
    },
    {
        id: "02",
        title: "Locate your property",
        desc: "Locate in the map which area you are listing..",
        icon: <MapPin className="text-[#FBAA5B]" />,
    },
    {
        id: "03",
        title: "Post the images",
        desc: "add some reference..",
        icon: <Camera className="text-[#FBAA5B]" />,
    },
    {
        id: "04",
        title: "Publish Your Home",
        desc: "Fill other details and the pricing, and publish it",
        icon: <Home className="text-[#FBAA5B]" />,
    },
];

const Guides = () => {
    return (
        <section>
            <div className="max-w-[1200px] mt-8 mx-auto font-[poppins] bg-white rounded-3xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">

                {/* Left Section */}
                <div className="bg-[#FFE7E7] rounded-2xl p-6 md:p-10 flex-1 flex justify-between text-center items-center">
                    <div className="flex flex-col justify-start items-start text-left gap-4">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
                            A <span className="text-[#FBAA5B] font-bold">simple Guide</span> to post your property
                        </h2>
                        <p className="text-gray-600 mb-6">Own/rent your property with low price and discounts!</p>
                        <button className="bg-[#6C1E3C] text-white px-6 py-2 rounded-lg font-semibold hover:scale-105 transition">
                            Steps to guide ↗
                        </button>
                    </div>
                    <img src={teacherImg} alt="Illustration" className="w-40 md:w-60 mt-6" />
                </div>

                {/* Right Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="bg-[#FAFAFA] border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:scale-105 transition min-h-[180px] flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start">
                                {/* Left-aligned text content */}
                                <div>
                                    <div className="text-2xl font-bold text-[#8C2841]">{step.id}</div>
                                    <h3 className="font-semibold mt-3">{step.title}</h3>
                                    <p className="text-sm text-gray-500 mt-1">{step.desc}</p>
                                </div>

                                {/* Right-aligned icon */}
                                <div className="w-6 h-6 mt-1">{step.icon}</div>

                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </section>

    );
};

export default Guides;
