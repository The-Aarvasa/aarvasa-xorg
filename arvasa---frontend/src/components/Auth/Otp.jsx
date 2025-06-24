import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import Loaders from '../Loaders';

const Otp = () => {
    const inputRefs = useRef([]);
    const [activeInput, setActiveInput] = useState(0);
    const [otpValues, setOtpValues] = useState(["", "", "", ""]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();

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
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, otp: enteredOtp }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("OTP Verified!");
      navigate("/signin"); // <-- Navigate using React Router
    } else {
      alert(data.message || "Invalid OTP");
    }
  } catch (err) {
    console.error(err);
    alert("Verification failed");
  }
  finally{
    setLoader(false);
  }
};


    return (
       <>
       {loader ? <Loaders/> : null}
        <div className="bg-white h-[100vh] overflow-y-hidden">
            <div className="cols h-[90vh] sm:h-auto flex items-center m-2 justify-center sm:justify-between gap-[70px]">
                <div className="left_col w-1/2 items-center justify-center hidden sm:flex">
                    <img
                        src="/otp_hero.jpg"
                        className="h-[98vh] rounded-lg w-full object-cover"
                        alt=""
                    />
                </div>

                <div className="right_col w-1/2 flex flex-col items-center text-center justify-center gap-6">
                    <img src="/images/logo.png" className="w-32" alt="" />
                    <h1 className="font-semibold text-5xl">Account verification</h1>
                    <p className="text-md">
                        Enter the OTP sent to <br />
                        <span className="font-semibold">{email || "your email"}</span>
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
