import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Link } from "react-router-dom"

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPass, setCpass] = useState("");
    return (
        <motion.div

            className="bg-[#ffffff] justify-center items-center">
            {/* Main Content Container (Flex to hold left and right sections) */}
            <div className="flex items-center flex-row flex-row-reverse justify-between overflow-hidden">


                {/* Left Section: Login Form */}
                <div className="flex flex-col items-center justify-center w-full p-4 md:w-[28%] mx-auto h-[100vh]">

                    <a href="#" className='flex items-center relative right-8'>
                        <img src="/images/logo_shape.png" className='w-32' alt="" />
                        <img src="/images/image.png" className='w-32' alt="" />
                    </a>
                    {/* Intro */}
                    <div className="flex flex-col gap-[25px] pt-6">
                        <div className="text-[#0C1421] text-[32px] mb-4 font-bold leading-8">Get Started</div>
                    </div>

                    {/* Form */}
                    <div className="flex flex-col gap-4 w-full">
                        {/* Email Input */}
                        <div className="flex flex-col gap-4">
                            <div className="w-full h-12 relative">
                                {email.length === 0 && (
                                    <span className="absolute z-[1] top-3 px-4 flex items-center text-gray-400 gap-4 pointer-events-none">
                                        <Mail />
                                        Enter Email
                                    </span>
                                )}
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full z-[999] h-full px-4 rounded-xl border border-[#6C1E3C] bg-[#F7FAFF] placeholder-[#8898A8] focus:outline-none focus:border-[#A82E4F]"
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-2 mt-2">
                            <div className="w-full h-12 relative">
                                {password.length === 0 && (
                                    <span className="absolute top-3 px-4 flex items-center text-gray-400 gap-4 pointer-events-none">
                                        <Lock />
                                        Enter Password
                                    </span>
                                )}
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full h-full px-4 rounded-xl border border-[#6C1E3C] bg-[#F7FAFF] placeholder-[#8898A8] focus:outline-none focus:border-[#A82E4F]"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mt-2">
                            <div className="w-full h-12 relative">
                                {cPass.length === 0 && (
                                    <span className="absolute top-3 px-4 flex items-center text-gray-400 gap-4 pointer-events-none">
                                        <Lock />
                                        Confirm Password
                                    </span>
                                )}
                                <input
                                    type="password"
                                    value={cPass}
                                    onChange={(e) => setCpass(e.target.value)}
                                    className="w-full h-full px-4 rounded-xl border border-[#6C1E3C] bg-[#F7FAFF] placeholder-[#8898A8] focus:outline-none focus:border-[#A82E4F]"
                                />
                            </div>
                        </div>



                        {/* Sign In Button */}
                        <button className="w-full h-[52px] bg-[#6C1E3C] rounded-xl flex items-center justify-center 
                   transition duration-300 ease-in-out hover:bg-[#7d2a48] hover:scale-105">
                            <span className="text-white text-base font-bold">Sign in</span>
                        </button>

                    </div>

                    {/* Social Sign In */}
                    <div className="flex flex-col gap-2 w-full mt-[20px]">
                        {/* Or Separator */}
                        <div className="flex items-center gap-4">
                            <div className="flex-grow border-t border-[#CEDAE2]"></div>
                            <div className="text-[#294957] text-base font-normal">Or</div>
                            <div className="flex-grow border-t border-[#CEDAE2]"></div>
                        </div>

                        {/* Social Buttons */}
                        <div className="flex flex-col gap-2">

                            {/* Google Button */}
                            <button className="w-full group h-[52px] bg-white text-black border border-1 border-gray-600 shadow-lg text-black rounded-xl flex items-center justify-center gap-4
                   transition duration-300 ease-in-out hover:bg-[#6C1E3C] hover:scale-105">
                                <img
                                    src="https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=256"
                                    alt="Google Icon"
                                    className="w-7 h-7"
                                />
                                <span className="text-black group-hover:text-white text-base font-normal">Sign in with Google</span>
                            </button>






                        </div>
                    </div>

                    {/* Sign Up Link */}
                    <div className="text-center mt-4">
                        <span className="text-[#555] text-sm font-normal">Already have an account? </span>
                        <Link to={"/signin"} className="text-[#1D4ED8] text-sm font-normal cursor-pointer underline">
                            Sign in
                        </Link>
                    </div>

                    {/* Terms and Privacy */}
                    <div className="text-center text-sm text-[#555] font-semibold mt-4 mx-auto mb-2">
                        By signing up for Aarvasa, you agree to the Terms of Service. View our Privacy Policy
                    </div>

                </div>

                {/* Right Section: Background and Image */}
                <div className="relative w-[50%] h-[100vh] bg-[#FCEBB8] hidden sm:block">
                    <img src="/login.jpg" className='w-full h-full object-cover' alt="" />
                </div>



            </div>
       
        </motion.div>
    );
}
