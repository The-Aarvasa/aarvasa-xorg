// src/components/AllServices.jsx
import React from "react";
import ServicesAI from "../../assets/ServicesAI.png";
import ServicesAR from "../../assets/ServicesARVR.png";
import ServicesBlockchain from "../../assets/ServicesBlockchain.png";
import ServicesConsultancy from "../../assets/ServicesConsultancy.png";
import ServicesMonetization from "../../assets/ServicesMonetization.png";
import ServicesPayment from "../../assets/ServicesPayment.png";
import { Heading } from "../Utils/Heading";
import { motion, useInView } from 'framer-motion';

import { useRef } from "react";

// State to control dot's vertical position (in px)


const services = [
    {
        title: "Comprehensive Consultancy Services",
        description:
            "Comprehensive Consultancy Services refers to a broad range of advisory and support services provided to businesses, organizations, or individuals. These services typically cover multiple ...",
        img: ServicesConsultancy,
    },
    {
        title: "AR/VR Property Tours",
        description:
            "AR/VR Property Tours use Augmented Reality and Virtual Reality technologies to create immersive, interactive experiences for viewing properties. These tools are becoming increasingly popular in real estate as they allow ...",
        img: ServicesAR,
    },
    {
        title: "Flexible Payment Models",
        description:
            "Flexible Payment Models refer to various payment structures that offer clients or customers the ability to pay for goods or services in ways that suit their financial situation or preferences. These models provide greater...",
        img: ServicesPayment,
    },
    {
        title: "AI Powered Personalization",
        description:
            "AI-Powered Personalization refers to the use of artificial intelligence (AI) to tailor products, services, content, or experiences to individual users based on their preferences, behaviors, and interactions. AI analyzes large ...",
        img: ServicesAI,
    },
    {
        title: "Blockchain-Backed Transactions",
        description:
            "Blockchain-Backed Transactions refer to transactions that are recorded, verified, and secured using blockchain technology. Blockchain is a decentralized, distributed ledger system that...",
        img: ServicesBlockchain,
    },
    {
        title: "Monetization of Existing Properties",
        description:
            "Monetization of Existing Properties refers to the process of generating income or financial value from assets or real estate that are already owned, rather than developing new ones. ",
        img: ServicesMonetization,
    },
];

const AllServices = () => {
    const ref = useRef(null);

    const isInView = useInView(ref, { once: true });

    // Ref for the container holding circle and image

    // Refs for buttons to calculate position on click


    return (
        <section className="px-2 py-10 mx- md:mx-8 font-[poppins] overflow-x-hidden">
            <Heading label="Your Real Estate Guide" />
            <h2 className="font-semibold text-left text-md text-gray-600 mb-10 md:text-xl">
                Aarvasa Simplifies Real Estate with Seamless Transactions, Investments, and
                Property Monetization
            </h2>

            <div className="flex flex-col gap-16 md:gap-28">
                {services.map((service, index) => {
                    const direction = index % 2 === 0 ? -250 : 250; // alternate left/right

                    const fadeVariants = {
                        hidden: { opacity: 0, x: direction },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.6, ease: "easeOut" },
                        },
                    };

                    return (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }} // triggers sooner
                            variants={{
                                hidden: {
                                    opacity: 0,
                                    x: typeof window !== 'undefined' && window.innerWidth < 768 ? 80 : (index % 2 === 0 ? -250 : 250),
                                },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.6, ease: "easeOut" },
                                },
                            }}
                            className={`flex w-[100%] md:w-[80%] mx-auto flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                                } items-center gap-12 md:gap-28`}
                        >

                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full md:w-[40%] rounded-xl object-cover"
                            />
                            <div className="flex flex-col justify-center md:w-1/2 text-center md:text-left gap-3">
                                <h3 className="font-semibold text-xl md:text-3xl">{service.title}:</h3>
                                <p className="text-sm md:text-md text-left text-gray-800">{service.description}</p>
                                <div>
                                    <button className="mt-2 border border-[#82213a] px-4 text-sm py-2 rounded-md text-[#82213a] hover:bg-[#82213a] hover:text-white transition duration-300 md:text-xl">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}


            </div>
        </section>
    );
};

export default AllServices;
