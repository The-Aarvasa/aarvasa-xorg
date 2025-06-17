import React from 'react';
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaAngleDown, FaSlidersH } from 'react-icons/fa';

const FilterBar = () => {
    return (
        <div className="flex flex-col items-center gap-4 w-[90%] md:w-[60%] mx-auto font-poppins">
            {/* Top Section - Input Fields */}
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg p-2 text-base w-full sm:w-1/3 bg-[#FDFBF5] shadow-sm hover:border-[#6D1E3D] hover:shadow-md transition-all duration-300">
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Enter City,Locality,Project"
                        className="flex-grow outline-none bg-transparent text-[#5A5A59] placeholder-[#5A5A59]"
                    />
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 text-base w-full sm:w-1/4 bg-[#FDFBF5] shadow-sm hover:border-[#6D1E3D] hover:shadow-md transition-all duration-300">
                    <FaHome className="mr-2 text-gray-500" />
                    <select className="flex-grow outline-none bg-transparent text-[#5A5A59] appearance-none">
                        <option value="">Property Type</option>
                    </select>
                    <FaAngleDown className="ml-auto text-gray-500" />
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 text-base w-full sm:w-1/4 bg-[#FDFBF5] shadow-sm hover:border-[#6D1E3D] hover:shadow-md transition-all duration-300">
                    <FaRupeeSign className="mr-2 text-gray-500" />
                    <select className="flex-grow outline-none bg-transparent text-[#5A5A59] appearance-none">
                        <option value="">Budget</option>
                    </select>
                    <FaAngleDown className="ml-auto text-gray-500" />
                </div>
            </div>

            {/* Bottom Section - Filter Buttons */}
            <div className="w-full flex flex-wrap justify-center items-center gap-3">
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base hover:bg-[#949494] hover:text-white transition-all duration-300">
                    Rent
                </button>
                <button className="px-4 py-2 bg-[#F5D5E2] border border-[#6D1E3D]/50 rounded-xl text-[#6D1E3D] text-base hover:bg-[#6D1E3D] hover:text-white transition-all duration-300">
                    Residential
                </button>
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base hover:bg-[#949494] hover:text-white transition-all duration-300">
                    Yearly
                </button>
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base hover:bg-[#949494] hover:text-white transition-all duration-300">
                    Beds
                </button>
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base hover:bg-[#949494] hover:text-white transition-all duration-300">
                    Price
                </button>
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base hover:bg-[#949494] hover:text-white transition-all duration-300">
                    Area
                </button>
                <button className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59] text-base flex items-center gap-2 hover:bg-[#949494] hover:text-white transition-all duration-300">
                    <FaSlidersH className="text-lg" />
                    All Filters
                </button>
                <button className="px-4 py-2 text-[#6D1E3D] text-base font-semibold hover:text-[#5a1832] transition-colors duration-300">
                    Reset All Filters
                </button>
            </div>
        </div>
    );
};

export default FilterBar; 