import React from 'react'
import { useState } from 'react';

const About = () => {
    const [visibility, setVisibility] = useState(false);

    const handleSetVisibility = () => {
        if (visibility) {
            setVisibility(false);
        }
        else {
            setVisibility(true);
        }
    }
    return (
        <div className="m-5 p-10 bg-white rounded-2xl shadow-md font-[poppins] flex flex-col justify-start gap-3">
            <h1 className="font-semibold text-[32px] ">About this property</h1>
            <p className="text-gray-600 mt-2">
                This property is a 3BHK apartment located in the heart of the city, offering modern amenities and a spacious layout. It features a large living room, fully equipped kitchen, and three well-sized bedrooms with ample natural light. The apartment is situated in a family-friendly neighborhood with easy access to schools, parks, and shopping centers.
                This property is a 3BHK apartment located in the heart of the city, offering modern amenities and a spacious layout. It features a large living room, fully equipped kitchen, and three well-sized bedrooms with ample natural light. The apartment is situated in a family-friendly neighborhood with easy access to schools, parks, and shopping centers.
            </p>
            <div className="text-[#F5C01A] font-medium text-lg flex gap-5 cursor-pointer" onClick={(() => handleSetVisibility())}>
                <h1>Show More</h1>
                <img src="/images/downarrow.png" alt="down" />
            </div>
            {visibility && (
                <div className="mt-5 flex flex-col items-center justify-center gap-10">
                    <div className="flex gap-10">
                        <div className="w-60 h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6 ">
                            <img className="w-16 h-14" src="https://img.icons8.com/?size=100&id=10516&format=png&color=000000" />
                            <div className="justify-start text-black text-xl font-medium font-[poppins] leading-normal">Property <br />type</div>
                        </div>
                        <div className="w-60 h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                            <img className="w-20 h-14" src="https://img.icons8.com/?size=100&id=59736&format=png&color=000000" />
                            <div className="justify-start text-black text-xl font-medium font-[poppins] leading-normal">Semi <br />furnished</div>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="w-60 h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                            <img className="w-16 h-14 rounded-xl" src="https://img.icons8.com/?size=100&id=59751&format=png&color=000000" />
                            <div className="justify-start text-black text-xl font-medium font-[poppins] leading-normal">Car parking <br />facility</div>
                        </div>
                        <div className="w-60 h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                            <img className="w-16 h-12" src="https://img.icons8.com/?size=100&id=Pqf1QZP9XDap&format=png&color=000000" />
                            <div className="justify-start text-black text-xl font-medium font-[poppins] leading-normal">Year built <br />2000</div>
                        </div>
                    </div>
                </div>
            )}
            <div className="w-64 h-16 flex items-center justify-center px-2 py-2 bg-gradient-to-r from-[#FADC64] to-[#94823B] rounded-xl ">
                <div className=" text-black text-xl font-bold font-[poppins] capitalize">Contact Owner</div>
            </div>
        </div>
    )
}

export default About