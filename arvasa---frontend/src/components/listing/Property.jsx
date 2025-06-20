import React, { useState } from 'react';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaBed, FaBath } from 'react-icons/fa';
import { FaRuler } from 'react-icons/fa';
import Page from './Page';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ListingFilterBar from "../../components/listing/ListingFilterBar"

import { useEffect } from 'react';

const Property = ({
    title = "Beach House at Chennai",
    price = "INR 1,933,761 Yearly",
    image = "https://media.istockphoto.com/id/1150278000/photo/modern-white-house-with-swimming-pool.jpg?s=612x612&w=0&k=20&c=5uBhkdER9uGSXKOt_AZjxOXAYjnhxj6b8JCW1UWv2WA=",
    beds = 2,
    baths = 2,
    area = "1,012 sqft",
    description = "1 Month Free | Green Community...",
    location = "The Gardens Building, India"
}) => {

    const [data, setData] = useState([]);

    const getData = async () => {
        const respsonse = await axios.get("http://localhost:3000/");
        setData(respsonse.data.data);
    }
    useEffect(() => {
    getData();
    }, [])

    // useEffect(() => {
    //     console.log(data.length);
    // }, [data])
    return (
        <>

                    <ListingFilterBar></ListingFilterBar>


            <div className="w-[98%] min-h-[300px] mx-auto mt-8 mb-8">

                   <div className="card flex flex-col gap-12">
              
                            <div className="w-full h-auto bg-white rounded-xl shadow-md flex flex-col lg:flex-row p-4">
                                <div className="relative w-full lg:w-[500px] h-[250px] lg:h-[269px] rounded-lg overflow-hidden mb-4 lg:mb-0">
                                    <Link to={`/listings/propertydetails/1234`}>
                                        <img

                                            src={image}
                                            alt={title}
                                            className="h-full p-1 w-full border border-1 border-gray-300 rounded-lg object-contain"
                                        /></Link>


                                    <button className="absolute top-4 right-4 p-2 bg-white/30 rounded-full">
                                        <FaHeart className="text-black/30" />
                                    </button>

                                    <button className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                                        <FaChevronLeft className="text-black" />
                                    </button>
                                    <button className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                                        <FaChevronRight className="text-black" />
                                    </button>

                                    <button className="absolute bottom-1 left-[10px] px-4 py-2 bg-black/50 rounded text-white flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        View on Map
                                    </button>
                                </div>

                                <div className="flex-1 px-4 lg:px-8">
                                    <div className="flex flex-wrap gap-2 text-sm mb-4 lg:mb-6">
                                        <button className="px-3 lg:px-2 bg-[#F5D5E2] text-md lg:text-md border border-[#6D1E3D]/50 rounded-xl text-[#6D1E3D] transition-all duration-300 hover:bg-[#6D1E3D] hover:text-white hover:scale-105 active:scale-95">
                                            Overview
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Property Details
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Facilities
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Price Trend
                                        </button>
                                    </div>

                                    <h2 className="text-md lg:text-lg font-semibold text-[#3D3D3D] mb-4 lg:mb-3">
                                     Beach House at Chennai
                                    </h2>
                                    <p className="text-xl lg:text-md font-semibold text-[#3D3D3D] mb-2">
                                        INR 1,933,761 Yearly
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-2">
                                        <div className="flex items-center gap-2">
                                            <FaBed className="text-[#292929]" />
                                            <span className="text-[#292929]">2</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBath className="text-[#292929]" />
                                            <span className="text-[#292929]">2</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaRuler className="text-[#292929]" />
                                            <span className="text-[#292929]">1024 sq.ft</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[#656565]">1 Month Free | Green Community...</p>
                                        <p className="text-[#656565]">The Gardens Building, India</p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[300px] space-y-3 lg:space-y-5 text-base lg:text-xl border-t-2 lg:border-t-0 lg:border-l-2 border-[#000000] mt-4 lg:mt-0 pt-4 lg:pt-0 lg:pl-4">
                                    <button className="w-full text-md py-2.5 px-4 bg-white rounded-xl text-[#5A5A59]">
                                        Connect Owners
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <MdEmail className="text-[#3D3D3D]" />
                                        Get Mail Id
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <MdPhone className="text-[#3D3D3D]" />
                                        Get Phone no
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <FaWhatsapp className="text-[#00A000]" />
                                        Get Whatsapp no
                                    </button>
                                </div>
                            </div>
             
                </div> 

                {/* <div className="card flex flex-col gap-12">
                    {data.map((currElem) => {
                        return (
                            <div className="w-full h-auto bg-white rounded-xl shadow-md flex flex-col lg:flex-row p-4">
                                <div className="relative w-full lg:w-[500px] h-[250px] lg:h-[269px] rounded-lg overflow-hidden mb-4 lg:mb-0">
                                    <Link to={`/listings/propertydetails/${currElem.propertyId}`}>
                                        <img

                                            src={currElem.image}
                                            alt={title}
                                            className="h-full p-1 w-full border border-1 border-gray-300 rounded-lg object-contain"
                                        /></Link>


                                    <button className="absolute top-4 right-4 p-2 bg-white/30 rounded-full">
                                        <FaHeart className="text-black/30" />
                                    </button>

                                    <button className="absolute top-1/2 left-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                                        <FaChevronLeft className="text-black" />
                                    </button>
                                    <button className="absolute top-1/2 right-2 -translate-y-1/2 w-6 h-6 bg-[#FAF9F6] rounded-full flex items-center justify-center">
                                        <FaChevronRight className="text-black" />
                                    </button>

                                    <button className="absolute bottom-1 left-[10px] px-4 py-2 bg-black/50 rounded text-white flex items-center gap-2">
                                        <FaMapMarkerAlt />
                                        View on Map
                                    </button>
                                </div>

                                <div className="flex-1 px-4 lg:px-8">
                                    <div className="flex flex-wrap gap-2 text-sm mb-4 lg:mb-6">
                                        <button className="px-3 lg:px-2 bg-[#F5D5E2] text-md lg:text-md border border-[#6D1E3D]/50 rounded-xl text-[#6D1E3D] transition-all duration-300 hover:bg-[#6D1E3D] hover:text-white hover:scale-105 active:scale-95">
                                            Overview
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Property Details
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Facilities
                                        </button>
                                        <button className="px-3 lg:px-4 py-2 border border-[#949494] text-base lg:text-md rounded-xl text-[#5A5A59] transition-all duration-300 hover:bg-[#949494] hover:text-white hover:scale-105 active:scale-95">
                                            Price Trend
                                        </button>
                                    </div>

                                    <h2 className="text-md lg:text-lg font-semibold text-[#3D3D3D] mb-4 lg:mb-3">
                                        {currElem.title}
                                    </h2>
                                    <p className="text-xl lg:text-md font-semibold text-[#3D3D3D] mb-2">
                                        {currElem.priceDisplay}
                                    </p>

                                    <div className="flex flex-wrap gap-4 mb-2">
                                        <div className="flex items-center gap-2">
                                            <FaBed className="text-[#292929]" />
                                            <span className="text-[#292929]">{currElem.bedrooms}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBath className="text-[#292929]" />
                                            <span className="text-[#292929]">{currElem.bathrooms}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaRuler className="text-[#292929]" />
                                            <span className="text-[#292929]">{currElem.areaSqFt} sq.ft</span>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-[#656565]">{currElem.ampDesc}</p>
                                        <p className="text-[#656565]">{location}</p>
                                    </div>
                                </div>

                                <div className="w-full lg:w-[300px] space-y-3 lg:space-y-5 text-base lg:text-xl border-t-2 lg:border-t-0 lg:border-l-2 border-[#000000] mt-4 lg:mt-0 pt-4 lg:pt-0 lg:pl-4">
                                    <button className="w-full text-md py-2.5 px-4 bg-white rounded-xl text-[#5A5A59]">
                                        Connect Owners
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <MdEmail className="text-[#3D3D3D]" />
                                        Get Mail Id
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <MdPhone className="text-[#3D3D3D]" />
                                        Get Phone no
                                    </button>
                                    <button className="w-full text-sm py-2.5 px-4 bg-white border rounded-xl text-[#5A5A59] flex items-center gap-2">
                                        <FaWhatsapp className="text-[#00A000]" />
                                        Get Whatsapp no
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div> */}
            </div>

        </>
    );
};

export default Property;
