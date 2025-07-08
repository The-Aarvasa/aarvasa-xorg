import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import Loaders from '../Loaders';
import { CheckCircle, XCircle, Info } from "lucide-react";


const Otp = () => {
    const inputRefs = useRef([]);
    const [activeInput, setActiveInput] = useState(0);
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [alert, setAlert] = useState(false);
    const navigate = useNavigate();

    const alertColorClasses = {
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500"
    };

    useEffect(() => {
        const storedEmail = localStorage.getItem("signupEmail");
        const storedPassword = localStorage.getItem("signupPassword");

        if (!storedEmail || !storedPassword) {
            alert("Missing signup details.");
            navigate("/signup");
        } else {
            setEmail(storedEmail);
            setPassword(storedPassword);
        }
    }, [navigate]);

    const handleInput = (e, index) => {
        const value = e.target.value;
        if (!/^\d?$/.test(value)) return;

        const updatedOtp = [...otpValues];
        updatedOtp[index] = value;
        setOtpValues(updatedOtp);

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }
        if (e.key === 'Tab' && !e.target.value) {
            e.preventDefault();
        }
    };

    const handleVerify = async () => {
        const enteredOtp = otpValues.join("");

        try {
            setLoader(true);
            const res = await axios.post("http://localhost:5000/api/auth/verify", { email, otp: enteredOtp })

            const data = await res.json();

            // alert("OTP Verified!");
            navigate("/signin"); // <-- Navigate using React Router

        } catch (err) {

            if (err.response.status === 401) {
                setAlert({
                    msg: err.response.data.msg,
                    color: "yellow",
                    type: "info"
                })
            }
            else {
                setAlert({
                    msg: "something went wrong",
                    color: "red",
                    type: "failure"
                })
            }

        }
        finally {
            setLoader(false);
        }
    };


    return (
        <>
            {loader ? <Loaders /> : null}
            <div className="bg-white h-[100vh] overflow-y-hidden">
                <div className="cols h-[90vh] sm:h-auto flex items-center justify-center sm:justify-between gap-[70px]">
                    <div className="left_col w-1/2 items-center justify-center hidden sm:flex">
                        <img
                            src="/otp_hero.jpg"
                            className="h-[100vh] w-full object-cover"
                            alt=""
                        />
                    </div>

                    <div className="right_col w-1/2 flex flex-col items-center text-center justify-center gap-6">
                        <img src="/images/logo.png" className="w-32" alt="" />
                        {alert ? <div className={`alert-box px-4 ${alertColorClasses[alert.color]} mt-8 w-full md:w-[80%] p-2 rounded-xl`}>
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
                        <h1 className="font-semibold text-5xl">Account verification</h1>
                        <p className="text-xl">
                            Enter the OTP sent to <br />
                            <span className="font-semibold text-md">{email || "your email"}</span>
                        </p>

                        <div className="input_boxes flex items-center justify-center gap-4">
                            {[0, 1, 2, 3, 4, 5].map((_, index) => (
                                <input
                                    key={index}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    type="text"
                                    maxLength={1}
                                    value={otpValues[index]}
                                    onFocus={() => setActiveInput(index)}
                                    onChange={(e) => handleInput(e, index)}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={`bg-[#EFEFEF] w-[60px] text-center rounded-lg outline-none text-2xl h-[60px] border-2 transition-all ${activeInput === index
                                        ? 'border-[#6D1E3D]'
                                        : 'border-gray-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleVerify}
                            className="bg-[#6D1E3D] outline-none transition-all rounded-full px-12 p-2 text-white hover:bg-white border border-4 hover:border-[#6D1E3D] hover:text-black"
                        >
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Otp;
