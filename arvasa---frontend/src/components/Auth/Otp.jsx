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
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify`, { email, otp: enteredOtp })

           if(res.status == 200){
            console.log("tes");
            localStorage.removeItem("signupEmail");
            localStorage.removeItem("signupPassword");
            // alert("OTP Verified!");
            navigate("/signin"); // <-- Navigate using React Router

           }
        } catch (err) {

            if (err.response && err.response.status === 401) {
                console.log(err.response)
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
  {loader && <Loaders />}
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col-reverse md:flex-row bg-white bg-opacity-90 backdrop-blur-md shadow-2xl rounded-3xl overflow-hidden w-[95%] max-w-5xl">
      
      {/* Left Image */}
      <div className="hidden md:flex w-1/2">
        <img src="/otp_hero.jpg" alt="OTP" className="object-cover w-full h-full" />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center text-center space-y-6">
        <img src="/images/logo.png" className="w-28 mb-2" alt="Logo" />

        {alert && (
          <div className={`w-full px-4 py-3 rounded-lg flex items-center gap-3 text-white ${alertColorClasses[alert.color]}`}>
            {alert.type === "success" && <CheckCircle />}
            {alert.type === "failure" && <XCircle />}
            {alert.type === "info" && <Info />}
            <span className="text-md font-semibold">{alert.msg}</span>
          </div>
        )}

        <h2 className="text-3xl font-bold text-gray-800">Verify Your Account</h2>
        <p className="text-gray-600">
          We've sent a 6-digit code to <br />
          <span className="font-medium text-gray-900">{email || "your email"}</span>
        </p>

        {/* OTP Inputs */}
        <div className="flex justify-center gap-3">
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
              className={`w-12 h-14 text-center text-xl font-bold border-2 rounded-lg transition-all duration-200 outline-none shadow-sm 
                ${activeInput === index ? "border-yellow-500" : "border-gray-300"} focus:ring-2 focus:ring-yellow-400`}
            />
          ))}
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="mt-4 w-full md:w-2/3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-full transition-all duration-200 shadow-lg"
        >
          Verify OTP
        </button>
      </div>
    </div>
  </div>
</>

    );
};

export default Otp;
