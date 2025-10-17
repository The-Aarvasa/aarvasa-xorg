import React from 'react'

const Newscards = () => {
    return (
        <div className="relative max-w-[1920px] mx-auto px-2 sm:px-4 md:px-8 py-4 sm:py-8">
            {/* Responsive Tabs */}
            <div className="max-w-4xl mx-auto">
                <ul className="flex font-[poppins] dark:text-white justify-start sm:justify-between items-center cursor-pointer text-black p-2 sm:p-4 font-medium text-sm sm:text-md gap-6 sm:gap-14 whitespace-nowrap">
                    <li className="hover:text-[#6D1E3D] text-xl border-b-2 border-[#6D1E3D] pb-1 min-w-max">All</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Infrastructure</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Commercial</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Home Loan</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Rented</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Investment</li>
                    <li className="hover:text-[#6D1E3D] text-xl  min-w-max">Taxation</li>
                </ul>
                {/* Search Bar */}
                <div className="flex justify-center mt-2 mb-8">
                    <div className="flex w-full max-w-xl items-center bg-gray-100 rounded-full px-2 sm:px-4 py-2 shadow-sm">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-400 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                            />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search for particular article"
                            className="flex-1 bg-transparent outline-none text-base font-normal placeholder-gray-800 font-poppins"
                        />
                        <div className="flex items-center ml-2 text-gray-500 cursor-pointer select-none relative">
                            <span className="text-lg mr-1">📍</span>
                            <select className="bg-transparent outline-none text-sm text-gray-700 pr-6 pl-1 py-0.5 rounded focus:ring-0 appearance-none font-poppins">
                                <option value="">Select city</option>
                                <option value="mumbai">Mumbai</option>
                                <option value="delhi">Delhi</option>
                                <option value="bangalore">Bangalore</option>
                                <option value="pune">Pune</option>
                            </select>
                            {/* Custom arrow */}
                            <svg
                                className="w-4 h-4 absolute right-1 top-1/2 transform -translate-y-1/2 pointer-events-none"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 m-2 sm:m-4">
                {[...Array(9)].map((_, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl shadow-md w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto h-[24rem] sm:h-[26rem] lg:h-[27rem] flex flex-col overflow-hidden">
                        <img
                            src="paper.png"
                            className="w-full h-40 sm:h-44 lg:h-48 object-cover rounded-t-3xl"
                            alt="News"
                        />
                        <div className="flex-1 flex flex-col justify-between p-6 sm:p-6">
                            <div className='dark:text-white'>
                                <h3 className="text-lg sm:text-xl font-bold font-poppins mb-2">The Mumbai Property</h3>
                                <p className="text-neutral-700 dark:text-white text-sm font-normal leading-6 sm:leading-7 ">
                                    Impact of Infrastructure Development — Mumbai's property market has been heavily influenced by infrastructure development.
                                </p>
                            </div>
                            <div className="text-right text-stone-600 text-xs dark:text-white sm:text-sm font-lato">Mar 03, 2025</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* See More Button */}
            {/* <div className="flex mb-8 items-center justify-center">
                <div className="group w-40 sm:w-56 h-12 sm:h-15 px-4 sm:px-8 py-3 sm:py-6 rounded-3xl outline outline-2 outline-offset-[-1px] outline-[#6D1E3D] inline-flex justify-center items-center gap-2.5 transition-all duration-300 hover:bg-[#6D1E3D] hover:text-white hover:outline-[#6D1E3D]">
                    <button className="text-[#6D1E3D] text-center justify-start text-lg sm:text-2xl font-medium font-['Montserrat'] leading-none group-hover:text-white transition-colors duration-300">See more</button>
                </div>
            </div> */}
        </div>
    )
}

export default Newscards;