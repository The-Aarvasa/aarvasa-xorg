import React, { useState } from 'react';

const About = ({ data }) => {
    const [visibility, setVisibility] = useState(false);

    const handleSetVisibility = () => setVisibility(!visibility);

    return (
        <div className="mx-2 mt-4 p-2 md:p-4 md:m-5 md:p-10 bg-white rounded-2xl shadow-md font-[poppins] flex flex-col justify-start gap-3">
            <h1 className="font-semibold text-[32px]">About this property</h1>

            {data?.shortDescription && (
                <p className="text-gray-600 mt-2">{data.shortDescription}</p>
            )}

            {!(data.propertyType == "Plot") ? <div
                className="text-[#F5C01A] font-medium text-lg flex gap-3 cursor-pointer"
                onClick={handleSetVisibility}
            >
                <h1>Show More</h1>
                <img src="/downarrow.png" alt="down" className="w-[25px]" />
            </div> : "Contact for more information to know about the features of the plot"}

            {visibility && (
                <div className="mt-5 flex flex-col items-center justify-center gap-10">
                    <div className="flex gap-10 flex-wrap">
                        {data?.possessionStatus && (
                            <div className="w-full md:w-60 md:h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                                <img className="w-12 h-12" src="https://img.icons8.com/?size=100&id=10516&format=png&color=000000" />
                                <div className="text-black text-lg font-medium">{data.possessionStatus}</div>
                            </div>
                        )}
                        {data?.furnished && (
                            <div className="w-full md:w-60 md:h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                                <img className="w-12 h-12" src="https://img.icons8.com/?size=100&id=59736&format=png&color=000000" />
                                <div className="text-black text-lg font-medium">{data.furnished}</div>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-10 flex-wrap">
                        {data?.parking && (
                            <div className="w-full md:w-60 md:h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                                <img className="w-12 h-12" src="https://img.icons8.com/?size=100&id=59751&format=png&color=000000" />
                                <div className="text-black text-lg font-medium">{data.parking} facility</div>
                            </div>
                        )}
                        {data?.waterStatus && (
                            <div className="w-full md:w-60 md:h-24 bg-[#D9D9D9] rounded-xl flex p-2 items-center justify-center gap-6">
                                <img className="w-12 h-12" src="https://img.icons8.com/?size=100&id=Pqf1QZP9XDap&format=png&color=000000" />
                                <div className="text-black text-lg font-medium">{data.waterStatus}</div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="md:w-64 md:h-16 flex mt-4 md:mt-0 items-center justify-center px-2 py-2 bg-gradient-to-r from-[#FADC64] to-[#94823B] rounded-xl">
                <button className="w-full md:w-fit text-black p-2 text-xl font-bold capitalize">Contact Owner</button>
            </div>
        </div>
    );
};

export default About;
