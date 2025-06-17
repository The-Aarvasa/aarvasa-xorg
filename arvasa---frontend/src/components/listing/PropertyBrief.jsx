import React, { useState } from 'react';
import Slider from '../About/Slider';
import Nearby from '../../components/Nearby';

const PropertyBrief = () => {
    const [isEastFacingChecked, setIsEastFacingChecked] = useState(true);
    const [isNewlyConstructedChecked, setIsNewlyConstructedChecked] = useState(true);

    const handleEastFacingChange = () => {
        setIsEastFacingChecked(!isEastFacingChecked);
    };

    const handleNewlyConstructedChange = () => {
        setIsNewlyConstructedChecked(!isNewlyConstructedChecked);
    };

    return (
        <div className="p-4 md:p-8 font-poppins">
            {/* Top Section */}
            <div className="w-full md:w-[50%] mb-6">
                <h1 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-2">Big city Residential Project</h1>
                <div className="w-full md:w-[85%] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-10 text-[#656565] text-lg md:text-xl mb-2">
                    <span className="font-semibold text-black">$2.20 Cr</span>
                    <span>EMI - $99k</span>
                    <span>Can I Afford it?</span>
                </div>
                <p className="text-[#3d3d3d3] text-lg md:text-xl mb-2">Calulate property Value Using AI</p>
                <p className="text-lg md:text-xl font-semibold text-[#3D3D3D] mt-4">3 BHK Flat For Sale in Omkar Signet, Malad East, New Delhi</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-6 w-full md:w-3/4 mx-auto">
                <div className="w-full md:w-2/3 rounded-3xl overflow-hidden h-48 md:h-68">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIg67ppTVP1Zt6tIikFl-as56RhrWoDx_nMg&s" alt="Residential Project" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>

                <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-4">
                    <div className="rounded-3xl overflow-hidden h-32">
                        <img src="https://snworksceo.imgix.net/cav/8d443aec-2090-4e9e-8793-6b95d830d89f.sized-1000x1000.JPG?w=1000" alt="Gym" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="rounded-3xl overflow-hidden h-32">
                        <img src="https://media.istockphoto.com/id/149360161/photo/manicured-house-and-garden.jpg?s=612x612&w=0&k=20&c=QM7ussZ_9IjiMbUUIusbKmXNRgTYy__C1XpZnQx2BKQ=" alt="Outdoor Area" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>
            </div>

            {/* Property Details */}
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row justify-around text-lg md:text-xl font-semibold text-[#3D3D3D] w-full md:w-3/4 mx-auto mb-6">
                <span>3 Beds</span>
                <span>3 Baths</span>
                <span>Semi-Furnished</span>
            </div>

            {/* Additional Property Details */}
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-6 mt-6 w-full md:w-4/5 mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[#656565] text-base md:text-lg mb-6 pl-4">
                    <div>
                        <p className="font-semibold text-black">Carpet Area</p>
                        <p>690 sqft</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Developer</p>
                        <p>Aarvasa Realtors and<br />Developers Pvt. Ltd.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Project</p>
                        <p>Aarvasa</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Floor</p>
                        <p>30(Out of 33 Floors)</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Transaction type</p>
                        <p>New Property</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Status</p>
                        <p>Ready to Move</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Facing</p>
                        <p>East</p>
                    </div>
                    <div>
                        <p className="font-semibold text-black">Furnished Status</p>
                        <p>Semi-Furnished</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 mb-6 pl-4">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-purple-600 w-5 h-5" checked={isEastFacingChecked} onChange={handleEastFacingChange} />
                        <span className={isEastFacingChecked ? "text-black" : "text-[#656565]"}>East Facing Property</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="form-checkbox text-purple-600 w-5 h-5" checked={isNewlyConstructedChecked} onChange={handleNewlyConstructedChange} />
                        <span className={isNewlyConstructedChecked ? "text-black" : "text-[#656565]"}>Newly Constructed Property</span>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-between pl-4 gap-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Contact Owner</button>
                        <button className="border border-[#6D1E3D] text-[#6D1E3D] font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Get Phone No.</button>
                    </div>
                    <p className="text-[#3d3d3d] text-base md:text-lg font-bold">Last contact made 3 days ago</p>
                </div>
            </div>
            {/* More Detail Box */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mt-6 w-full md:w-4/5 mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] mb-6">More Detail</h2>

                <div className="text-[#656565] text-base md:text-lg mb-6 pl-4">
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Price Breakup</p>
                        <p>₹2.2 Cr</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Address</p>
                        <p>30th floor omkar signet, Malad East - Western Delhi, New Delhi</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Landmarks</p>
                        <p>Western Express Highway</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Furnishing</p>
                        <p>Semi-Furnished</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Flooring</p>
                        <p>Vitrified</p>
                    </div>
                    <div className="flex mb-2 items-start">
                        <p className="font-semibold text-black min-w-[180px]">Loan Offered</p>
                        <div>
                            <p>Estimated EMI: ₹99223</p>
                            <p>Apply for Home Loan</p>

                            <div className="flex gap-2 mt-2">
                                <div className="w-12 h-6 bg-gray-300 rounded"></div>
                                <div className="w-12 h-6 bg-gray-300 rounded"></div>
                                <div className="w-12 h-6 bg-gray-300 rounded"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Type of Ownership</p>
                        <p>Freehold</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Overlooking</p>
                        <p>Garden/Park</p>
                    </div>
                    <div className="flex mb-2">
                        <p className="font-semibold text-black min-w-[180px]">Age of Construction</p>
                        <p>New Construction</p>
                    </div>
                </div>

                <div className="mb-6 pl-4">
                    <p className="font-semibold text-black">Description:</p>
                    <p className="text-[#656565] text-base md:text-lg">1 BHK JODI FLAT AT 30th floor modular kitchen and 2 air conditioners</p>
                </div>

                <div className="flex items-center justify-start pl-4">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">Contact Owner</button>
                </div>
            </div>

            {/* Amenities Box */}
            <div className="bg-white rounded-xl shadow-md p-4 md:p-6 mt-6 w-full md:w-4/5 mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] mb-6">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-[#656565] text-base md:text-lg pl-4">
                    <ul className="space-y-2">
                        <li>• Power Back Up</li>
                        <li>• Gymnasium</li>
                        <li>• Swimming Pool</li>
                        <li>• Laundry Service</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>• Lift</li>
                        <li>• Park</li>
                        <li>• Security</li>
                        <li>• Banquet Hall</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>• Club House</li>
                        <li>• Bank & ATM</li>
                        <li>• Kids Play Area</li>
                        <li>• Indoor Games Room</li>
                    </ul>
                    <ul className="space-y-2">
                        <li>• Indoor Squash & Badminton Courts</li>
                        <li>• Event Space & Amphitheatre</li>
                        <li>• Jogging and Strolling Track</li>
                        <li>• Private Terrace/Garden</li>
                    </ul>
                </div>
            </div>
            <Slider></Slider>
            <Nearby></Nearby>
        </div>
    );
};

export default PropertyBrief;
