import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

// FeatureCounter accepts value and setValue from parent
const FeatureCounter = ({ value, setValue }) => {
    const increment = () => setValue(prev => prev + 1);
    const decrement = () => setValue(prev => Math.max(0, prev - 1));

    return (
        <div className="flex items-center border border-gray-300 rounded-lg">
            <button
                className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-l-lg"
                onClick={decrement}
            >
                <FaMinus size={10} />
            </button>
            <span className="w-10 h-8 flex items-center justify-center text-base font-semibold text-[#3D3D3D] border-l border-r border-gray-300">
                {value}
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

const CompleteListing = ({ onPrevious, onNext, listingData = {}, setListingData }) => {
    const navigate = useNavigate();

    // Controlled states
    const [priceType, setPriceType] = useState(listingData.unit || 'Monthly');
    const [sellPrice, setSellPrice] = useState(listingData.price || '');
    const [rentPrice, setRentPrice] = useState(listingData.priceD || '');
    const [bedrooms, setBedrooms] = useState(listingData.bedrooms || 2);
    const [bathrooms, setBathrooms] = useState(listingData.bathrooms || 2);
    const [balcony, setBalcony] = useState(listingData.balcony || 1);
    const [selectedFacilities, setSelectedFacilities] = useState(listingData.facilities || []);

    const facilities = ['Parking Lot', 'Pet Allowed', 'Garden', 'Park'];

    const handleFacilityToggle = (facility) => {
        setSelectedFacilities(prev =>
            prev.includes(facility)
                ? prev.filter(f => f !== facility)
                : [...prev, facility]
        );
    };

    const handlePublish = () => {
        // Extract numeric values from strings (₹, commas, etc.)
        const numericSellPrice = parseFloat(sellPrice.toString().replace(/[^0-9.]/g, ""));
        const numericRentPrice = parseFloat(rentPrice.toString().replace(/[^0-9.]/g, ""));

        if (setListingData) {
            setListingData(prev => ({
                ...prev,
                unit: priceType,
                price: numericSellPrice || 0,
                priceD: numericRentPrice || 0,
                bedrooms,
                bathrooms,
                balcony,
                facilities: selectedFacilities
            }));
        }

        onNext();
    };


    return (
        <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">

                <button
                    onClick={() => navigate("/listings")}
                    className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700"
                >
                    <IoClose size={24} />
                </button>

                <div className="w-3/4 md:w-1/2 h-1.5 bg-gray-200 rounded-full mb-6 mx-auto">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '100%' }}></div>
                </div>

                <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6">
                    Almost Finish, Complete the Listing
                </h1>

                {/* Price Type Toggle */}
                <div className="mb-6 flex justify-center gap-3 flex-wrap">
                    {['Monthly', 'Yearly'].map(type => (
                        <button
                            key={type}
                            className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${priceType === type
                                    ? 'bg-[#F5D5E2] text-[#6D1E3D] border border-[#6D1E3D]/50'
                                    : 'bg-white border border-[#949494] text-[#5A5A59]'
                                }`}
                            onClick={() => setPriceType(type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* Price Inputs */}
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl mx-auto">
                    <div>
                        <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Sell Price</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="₹ 18,00,000"
                                value={sellPrice}
                                onChange={e => setSellPrice(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-sm text-[#3D3D3D] pr-10 outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D]">₹</span>
                        </div>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Rent Price</p>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="₹ 8000/month"
                                value={rentPrice}
                                onChange={e => setRentPrice(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg p-3 text-sm text-[#3D3D3D] pr-10 outline-none"
                            />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D]">₹</span>
                        </div>
                    </div>
                </div>

                {/* Property Features */}
                <div className="mb-6 w-full max-w-xl mx-auto">
                    <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">Property Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-[#3D3D3D]">Bed Room</p>
                            <FeatureCounter value={bedrooms} setValue={setBedrooms} />
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-[#3D3D3D]">Bath Room</p>
                            <FeatureCounter value={bathrooms} setValue={setBathrooms} />
                        </div>
                        <div className="flex items-center gap-4">
                            <p className="text-sm text-[#3D3D3D]">Balcony</p>
                            <FeatureCounter value={balcony} setValue={setBalcony} />
                        </div>
                    </div>
                </div>

                {/* Facilities */}
                <div className="mb-10 w-full max-w-xl mx-auto">
                    <h2 className="text-lg font-semibold text-[#3D3D3D] mb-4">Environment / Facilities</h2>
                    <div className="flex flex-wrap gap-3">
                        {facilities.map(facility => (
                            <button
                                key={facility}
                                className={`px-5 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${selectedFacilities.includes(facility)
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

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center px-4 gap-4">
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100"
                        onClick={onPrevious}
                    >
                        Previous
                    </button>
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832]"
                        onClick={handlePublish}
                    >
                        Publish
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CompleteListing;
