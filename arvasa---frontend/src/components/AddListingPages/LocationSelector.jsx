import React from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Map from '../Home/Map';

const LocationSelector = ({ onPrevious, onNext, listingData, setListingData }) => {
    const navigate = useNavigate();

    const handleLocationSelect = (loc) => {
        setListingData((prev) => ({
            ...prev,
            location: loc.address,
            coordinates: { lat: loc.lat, lng: loc.lng }
        }));
    };

    return (
        <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-lg md:max-w-4xl relative border border-gray-300">

                <button onClick={() => navigate("/listings")} className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
                    <IoClose size={20} />
                </button>

                <div className="w-3/4 md:w-1/2 h-1.5 bg-gray-200 rounded-full mb-6 mx-auto">
                    <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '50%' }}></div>
                </div>

                <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6">
                    Where is your location
                </h1>

                <div className="w-full md:w-[80%] mx-auto mb-6">
                    <Map onLocationSelect={handleLocationSelect} />
                </div>

                <div className="flex flex-col sm:flex-row justify-center px-4 gap-3">
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
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocationSelector;
