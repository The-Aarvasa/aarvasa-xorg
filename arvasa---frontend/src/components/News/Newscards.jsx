import React from 'react'

const Newscards = () => {
    return (
        <div className="relative max-w-[1920px] m-[3rem] mt-[2rem]  rounded-lg ">
            <div className="max-w-6xl mx-auto px-4">
                <ul className="flex font-[poppins] justify-between items-center cursor-pointer text-black p-4 font-medium text-lg">
                    {["All", "Infrastructure", "Commercial", "Home Loan", "Rented", "Investment", "Taxation"].map((item, idx) => (
                        <li
                            key={idx}
                            className={`relative px-2 transition-transform duration-200 ease-in-out hover:scale-105 hover:text-[#6D1E3D] ${item === "All" ? "text-[#6D1E3D] after:absolute after:bottom-[-6px] after:left-0 after:right-0 after:h-[2px] after:bg-[#6D1E3D] after:content-['']" : ""
                                }`}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-wrap gap-12 justify-between m-[4rem]">
                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>
                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

                <div className="w-[30rem] h-[30rem] relative rounded-3xl">
                    <div className="w-[30rem] h-[30rem] absolute inset-0 bg-white rounded-3xl shadow-[0px_2px_5px_rgba(0,0,0,0.20)]" />

                    <img
                        src="paper.png"
                        className="w-[30rem] h-[18rem] absolute inset-x-0 top-0 rounded-3xl"
                    />

                    <div
                        className="w-72 h-6 absolute left-[24px] top-[308px] text-black text-xl font-bold font-['Poppins'] leading-tight"
                    >
                        The Mumbai Property
                    </div>

                    <div
                        className="w-[28rem] h-14 absolute left-[24px] top-[350px] text-neutral-700 text-lg leading-7"
                        style={{ fontFamily: 'Lato, sans-serif' }}
                    >
                        Impact of Infrastructure Development — Mumbai’s property market has been heavily influenced by infrastructure development.
                    </div>

                    <div
                        className="w-24 h-4 absolute left-[370px] top-[450px] text-center text-stone-600 text-sm font-['Lato']"
                    >
                        Mar 03, 2025
                    </div>
                </div>

            </div>

            <div className="flex mb-[4rem] items-center justify-center">
                <div className="group w-56 h-16 px-8 py-6 rounded-3xl outline outline-2 outline-offset-[-1px] outline-[#6D1E3D] inline-flex justify-center items-center gap-2.5 transition-all duration-300 hover:bg-[#6D1E3D] hover:text-white hover:outline-[#6D1E3D]">
                    <div className="text-[#6D1E3D] text-center justify-start text-2xl font-medium font-['Montserrat'] leading-none group-hover:text-white transition-colors duration-300">See more</div>
                </div>
            </div>


        </div>
    )
}

export default Newscards;