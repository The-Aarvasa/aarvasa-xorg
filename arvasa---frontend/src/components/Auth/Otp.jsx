import React, { useRef, useState } from 'react';

const Otp = () => {
    const inputRefs = useRef([]);
    const [activeInput, setActiveInput] = useState(0);

    const handleInput = (e, index) => {
        const value = e.target.value;

        // Allow only one digit
        if (!/^\d?$/.test(value)) return;

        if (value.length === 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !e.target.value && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        // Prevent tabbing to next input if current is empty
        if (e.key === 'Tab' && !e.target.value) {
            e.preventDefault();
        }
    };


    return (
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
                        Enter the OTP that has been sent to <br />
                        socialmedia@gmail.com
                    </p>

                    <div className="input_boxes flex items-center justify-center gap-4">
                        {[0, 1, 2, 3].map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => (inputRefs.current[index] = el)}
                                type="text"
                                maxLength={1}
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

                    <button className="bg-[#6D1E3D] outline-none transition-all rounded-full px-12 p-2 text-white hover:bg-white border border-4 hover:border-[#6D1E3D] hover:text-black">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Otp;
