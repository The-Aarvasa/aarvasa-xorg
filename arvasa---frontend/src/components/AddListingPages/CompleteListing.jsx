import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const FeatureCounter = ({ initialValue }) => {
    const navigate = useNavigate();
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => Math.max(0, prev - 1));

    return (
        <div className="flex items-center border border-gray-300 rounded-lg">
            <button
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-l-lg"
                onClick={decrement}
            >
                <FaMinus size={10} />
            </button>
            <span className="w-10 h-8 flex items-center justify-center text-base font-semibold text-[#3D3D3D] border-l border-r border-gray-300">
                {count}
            </span>
            <button
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-r-lg"
                onClick={increment}
            >
                <FaPlus size={10} />
            </button>
        </div>
    );
};

const CompleteListing = ({ onPrevious, onNext }) => {
    const [priceType, setPriceType] = useState('Monthly');
    const [selectedFacilities, setSelectedFacilities] = useState([]);

    const handleFacilityToggle = (facility) => {
        setSelectedFacilities(prev =>
            prev.includes(facility)
                ? prev.filter(f => f !== facility)
                : [...prev, facility]
        );
    };

    const facilities = ['Parking Lot', 'Pet Allowed', 'Garden', 'Park'];

    return (
        <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">

               <button onClick={() => navigate("/listings")} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
                                   <IoClose size={24} md:size={28} />
                               </button>
               


                <div className="w-3/4 md:w-1/2 h-1.5 md:h-1.6 bg-gray-200 rounded-full mb-6 md:mb-8 mx-auto">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '100%' }}></div>
                </div>

                <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6 md:mb-8">
                    Almost Finish, Complete the Listing
                </h1>


                <div className="mb-6 md:mb-8 flex justify-center gap-3 md:gap-4 flex-wrap">
                    <button
                        className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${priceType === 'Monthly'
                            ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                            : 'bg-white border border-[#949494] text-[#5A5A59]'
                            }`}
                        onClick={() => setPriceType('Monthly')}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${priceType === 'Yearly'
                            ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                            : 'bg-white border border-[#949494] text-[#5A5A59]'
                            }`}
                        onClick={() => setPriceType('Yearly')}
                    >
                        Yearly
                    </button>
                </div>


                <div className="mb-6 md:mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-sm md:max-w-xl mx-auto">
                    <div>
                        <p className="text-xs md:text-sm font-semibold text-[#3D3D3D] mb-1 md:mb-2">Sell Price</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="₹ 18,00,000"
                                className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base text-[#3D3D3D] pr-8 md:pr-10 outline-none"
                            />
                            <span className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D] text-sm md:text-base">₹</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs md:text-sm font-semibold text-[#3D3D3D] mb-1 md:mb-2">Rent Price</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="₹ 8000/month"
                                className="w-full border border-gray-300 rounded-lg p-2 md:p-3 text-sm md:text-base text-[#3D3D3D] pr-8 md:pr-10 outline-none"
                            />
                            <span className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D] text-sm md:text-base">₹</span>
                        </div>
                    </div>
                </div>


                <div className="mb-6 md:mb-8 w-full max-w-sm md:max-w-xl mx-auto">
                    <h2 className="text-base md:text-lg font-semibold text-[#3D3D3D] mb-3 md:mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        <div className="flex items-center gap-4">
                            <p className="text-sm md:text-base text-[#3D3D3D]">Bed Room</p>
                            <FeatureCounter initialValue={2} />
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm md:text-base text-[#3D3D3D]">Bath Room</p>
                            <FeatureCounter initialValue={2} />
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm md:text-base text-[#3D3D3D]">Balcony</p>
                            <FeatureCounter initialValue={1} />
                        </div>
                    </div>
                </div>


                <div className="mb-8 md:mb-10 w-full max-w-sm md:max-w-xl mx-auto">
                    <h2 className="text-base md:text-lg font-semibold text-[#3D3D3D] mb-3 md:mb-4">Environment / Facilities</h2>
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {facilities.map(facility => (
                            <button
                                key={facility}
                                className={`px-5 py-2 rounded-xl text-sm md:text-base font-medium transition-colors duration-200 ${selectedFacilities.includes(facility)
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                    }`}
                                onClick={() => handleFacilityToggle(facility)}
                            >
                                {facility}
                            </button>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col sm:flex-row justify-center px-4 gap-3 sm:gap-4">
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100 transition-colors duration-200"
                        onClick={onPrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832] transition-colors duration-200"
                        onClick={onNext}
                    >
                        Publish
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CompleteListing; 