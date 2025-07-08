import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CheckCircle, XCircle, Info } from "lucide-react";
import Loaders from '../Loaders';

export default function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPass, setCpass] = useState("");
    const [loader, setLoader] = useState(false);
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();

    const handleSignup = async () => {
        if (!email || !password || !cPass) {
             setAlert({
                    msg: `Please fill all the fields`,
                    color: "yellow",
                    type: "info"
                })
            return;
        }

        if (password !== cPass) {
           setAlert({
                    msg: `Passwords are not matching`,
                    color: "yellow",
                    type: "info"
                })
            return;
        }

        try {
            setLoader(true);
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
                email,
                password
            });

            console.log(response.data);

            const msg = response?.data?.message || "";

            if (
                response.status === 200 &&
                (msg.toLowerCase().includes("otp") || msg.toLowerCase().includes("sent"))
            ) {
                localStorage.setItem("signupEmail", email);
                localStorage.setItem("signupPassword", password);
                setAlert({
                    msg: `OTP has been sent to ${localStorage.getItem("signupEmail") ? localStorage.getItem("signupEmail") : "."}`,
                    color: "green",
                    type: "success"
                })
                setTimeout(() => {
                    navigate("/otp");
                    setAlert(false);
                }, 3000);
            } else {
                setAlert({
                    msg: `Email already in use`,
                    color: "yellow",
                    type: "info"
                })
            }
        } catch (error) {
            if (error.respose && error.respose.status === 401) {
                setAlert({
                    msg: error.response.data.msg,
                    color: "red",
                    type: "failure"
                })
            }
            else {
                setAlert({
                    msg: "Something went wrong",
                    color: "red",
                    type: "failure"
                })
            }

        }
        finally {
            setLoader(false);
        }
    };

    const alertColorClasses = {
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500"
    };


    const handleGoogleLogin = () => {
        window.location.href = `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`;
    };

    return (
        <>
            {loader ? <Loaders /> : null}
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

                        {alert ? <div className={`alert-box px-4 ${alertColorClasses[alert.color]} mt-8 w-full p-2 rounded-xl`}>
                            {alert.type === "success" ?
                                <div className="alert flex items-center gap-4">
                                    <CheckCircle size={45} color='white'></CheckCircle>
                                    <h1 className='text-white text-md font-semibold'>{alert.msg}</h1>
                                </div> : alert.type === "failure" ?
                                    <div className="alert flex items-center gap-4">
                                        <XCircle size={30} color='white'></XCircle>
                                        <h1 className='text-white text-md font-semibold'>{alert.msg}</h1>
                                    </div> : alert.type === "info" ?
                                        <div className="alert flex items-center gap-4">
                                            <Info size={30} color='white'></Info>
                                            <h1 className='text-white text-md font-semibold'>{alert.msg}</h1>
                                        </div> : null}
                        </div> : null}

                        <div className="flex flex-col gap-[25px] pt-6">
                            <div className="text-[#0C1421] text-[32px] mb-4 font-bold leading-8">Get Started</div>
                        </div>

                        <div className="flex flex-col gap-4 w-full">
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

                            <button
                                onClick={handleSignup}
                                className="w-full h-[52px] bg-[#6C1E3C] rounded-xl flex items-center justify-center 
                            transition duration-300 ease-in-out hover:bg-[#7d2a48] hover:scale-105"
                            >
                                <span className="text-white text-base font-bold">Send OTP</span>
                            </button>
                        </div>

                        <div className="flex flex-col gap-2 w-full mt-[20px]">
                            <div className="flex items-center gap-4">
                                <div className="flex-grow border-t border-[#CEDAE2]"></div>
                                <div className="text-[#294957] text-base font-normal">Or</div>
                                <div className="flex-grow border-t border-[#CEDAE2]"></div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <button
                                    onClick={handleGoogleLogin}
                                    className="w-full group h-[52px] bg-white text-black border border-gray-600 shadow-lg rounded-xl flex items-center justify-center gap-4
                                transition duration-300 ease-in-out hover:bg-[#6C1E3C] hover:scale-105"
                                >
                                    <img
                                        src="https://cdn.iconscout.com/icon/free/png-256/free-google-logo-icon-download-in-svg-png-gif-file-formats--brands-pack-logos-icons-189824.png?f=webp&w=256"
                                        alt="Google Icon"
                                        className="w-7 h-7"
                                    />
                                    <span className="text-black group-hover:text-white text-base font-normal">Sign in with Google</span>
                                </button>
                            </div>
                        </div>

                        <div className="text-center mt-4">
                            <span className="text-[#555] text-sm font-normal">Already have an account? </span>
                            <Link to={"/signin"} className="text-[#1D4ED8] text-sm font-normal cursor-pointer underline">
                                Sign in
                            </Link>
                        </div>

                        <div className="text-center text-sm text-[#555] font-semibold mt-4 mx-auto mb-2">
                            By signing up for Aarvasa, you agree to the Terms of Service. View our Privacy Policy
                        </div>
                    </div>

                    <div className="relative w-[50%] h-[100vh] bg-[#FCEBB8] hidden sm:block">
                        <img src="/login.jpg" className='w-full h-full object-cover' alt="" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}
