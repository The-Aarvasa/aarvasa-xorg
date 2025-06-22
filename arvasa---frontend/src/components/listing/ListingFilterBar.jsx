// components/listing/ListingFilterBar.jsx
import React from 'react';
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaAngleDown, FaSlidersH } from 'react-icons/fa';

const ListingFilterBar = ({ filters, onFilterChange, onReset }) => {
    return (
        <div className="flex flex-col items-center gap-4 w-[90%] md:w-[60%] mx-auto font-poppins">
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-1/3 bg-[#FDFBF5]">
                    <FaMapMarkerAlt className="mr-2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Enter City, Locality"
                        value={filters.city}
                        onChange={(e) => onFilterChange('city', e.target.value)}
                        className="flex-grow outline-none bg-transparent text-[#5A5A59]"
                    />
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-1/4 bg-[#FDFBF5]">
                    <FaHome className="mr-2 text-gray-500" />
                    <select
                        value={filters.propertyType}
                        onChange={(e) => onFilterChange('propertyType', e.target.value)}
                        className="flex-grow outline-none bg-transparent text-[#5A5A59] appearance-none"
                    >
                        <option value="">Property Type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                    </select>
                    <FaAngleDown className="ml-auto text-gray-500" />
                </div>
                <div className="flex items-center border border-gray-300 rounded-lg p-2 w-full sm:w-1/4 bg-[#FDFBF5]">
                    <FaRupeeSign className="mr-2 text-gray-500" />
                    <select
                        value={filters.budget}
                        onChange={(e) => onFilterChange('budget', e.target.value)}
                        className="flex-grow outline-none bg-transparent text-[#5A5A59] appearance-none"
                    >
                        <option value="">Budget</option>
                        <option value="500000">Up to ₹5L</option>
                        <option value="1000000">Up to ₹10L</option>
                        <option value="2000000">Up to ₹20L</option>
                        <option value="5000000">Up to ₹50L</option>
                        <option value="10000000">Up to ₹1Cr</option>
                    </select>
                    <FaAngleDown className="ml-auto text-gray-500" />
                </div>
            </div>

            <div className="w-full flex flex-wrap justify-center items-center gap-3">
                <button onClick={() => onFilterChange('transactionType', 'Rent')} className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Rent</button>
                <button onClick={() => onFilterChange('transactionType', 'Buy')} className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Buy</button>
                <button onClick={() => onFilterChange('transactionType', '')} className="px-4 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">All</button>
                <button onClick={onReset} className="px-4 py-2 text-[#6D1E3D] font-semibold hover:text-[#5a1832]">Reset All Filters</button>
            </div>
        </div>
    );
};

export default ListingFilterBar;
