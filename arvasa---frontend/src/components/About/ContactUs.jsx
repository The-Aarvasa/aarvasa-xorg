import React from 'react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Heading } from '../Utils/Heading'
const ContactUs = () => {
    return (
        <>
            <div className="mx-2 mt-8 mb-8">
            <Heading label="Contact Us" />
                <div className="flex items-center flex-wrap lg:flex-nowrap relative justify-center lg:justify-between w-full h-auto relative bg-gradient-to-b from-[#C9B391] to-[#A79475] rounded-2xl p-2 lg:gap-10">

                    <div className="inline-block w-[769px] md:block">
                        <img
                            src="conhouse.png"
                            alt="house_img"
                            className="w-full lg:w-[700px] left-[-20px] lg:top-[-80px] xl:absolute animate-pulse duration-1000"
                        />
                    </div>
                    <div className="xl:w-[50%] w-full">
                        <form className="flex flex-col gap-6 rounded-xl">
                            <div className="flex flex-col gap-2">
                                <label className="text-pink-900 text-md md:text-xl font-['Poppins']">Name</label>
                                <input
                                    type="text"
                                    className="py-2 px-4 bg-white/80 w-full rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-pink-900 text-md md:text-xl font-['Poppins']">Email</label>
                                <input
                                    type="email"
                                    className="h-12 px-4 bg-white/80 rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                                    placeholder="Your email address"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-pink-900  text-md md:text-xl font-['Poppins']">Date</label>
                                <input
                                    type="date"
                                    className="h-12 px-4 bg-white/80 w-full rounded-lg border border-pink-900/30 focus:outline-none focus:border-pink-900"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 h-14 bg-[#6C1E3C] rounded-lg text-white text-md font-semibold py-3 hover:opacity-90 transition-opacity"
                            >
                                Schedule a Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs