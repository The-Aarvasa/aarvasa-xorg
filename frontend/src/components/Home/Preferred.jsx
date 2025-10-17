import React, { useState } from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../Utils/Heading'
import { Star } from 'lucide-react'
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Preferred = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const [data, setData] = useState([
        {
            id: 1,
            img: "/p-1.jpg",
            title: "Greenwood Residency",
            desc: "A modern gated community offering 2 & 3 BHK apartments with lush gardens, children’s play area, and 24/7 security.",
            ratings: 4.6
        },
        {
            id: 2,
            img: "/p-2.png",
            title: "Silver Lake Villas",
            desc: "Luxury villas overlooking a serene lake, equipped with private pools, smart home systems, and eco-friendly designs.",
            ratings: 4.6
        },
        {
            id: 3,
            img: "/p-3.png",
            title: "Rosewood Heights",
            desc: "Elegant bungalow offering comfort and luxury together. Crafted with premium finishes, it brings warmth and sophistication.",
            ratings: 4.6
        }
        ,
        {
            id: 4,
            img: "/p-1.jpg",
            title: "Crystal Nest",
            desc: "Modern architecture with stylish interiors and open spaces. Its minimalistic yet chic design makes it stand out in any neighborhood.",
            ratings: 4.6
        },

    ])
    const fadeVariants = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.1, ease: "easeOut" },
        },
        hidden: {
            opacity: 0,
            x: -200,
            transition: { duration: 0.6, ease: "easeIn" },
        },
    };

    const isInView = useInView(ref, {
        once: true,
    });

    // Agent data with individual profile pics and stats
    const agents = [
        {
            agentName: "Rohit Sharma",
            propertyName: "Urban Nest Realty",
            profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
            operatingSince: "2006",
            buyersServed: "2500+",
            propertiesForSale: "45",
            propertiesForRent: "3"
        },
        {
            agentName: "Priya Singh",
            propertyName: "Elite Estates",
            profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
            operatingSince: "2010",
            buyersServed: "1800+",
            propertiesForSale: "32",
            propertiesForRent: "5"
        },
        {
            agentName: "Amit Verma",
            propertyName: "Prime Dwellings",
            profilePic: "https://randomuser.me/api/portraits/men/65.jpg",
            operatingSince: "2012",
            buyersServed: "2100+",
            propertiesForSale: "27",
            propertiesForRent: "2"
        },
    ];

    return (
        <motion.div
            className="mx-2 mt-8 mb-8 md:mx-4 relative"
            ref={ref}
            variants={fadeVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            <Heading label="Aarvasa Preferred Agents in New Delhi" />
            <div className="rows flex flex-col gap-20">
                <div className="flex flex-wrap justify-center gap-6 mt-12">
                    {agents.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => navigate('/agents')}
                            className="w-full dark:border-2 dark:border:yellow-[#F9BC61] sm:w-[45%] dark:bg-black md:w-[26%] lg:w-[28%] cursor-pointer h-auto bg-white rounded-xl border-2 border-[#FCDEAC] hover:scale-[1.02] duration-500"
                        >
                            <div className="w-full dark:bg-gradient-to-r dark:from-[#DBB025] dark:to-[#5B4A1B] dark:text-black h-auto bg-[#FCDEAC] rounded-t-xl flex flex-wrap sm:flex-nowrap p-2 sm:p-3 justify-between items-center">
                                <img className="w-14 sm:w-16 h-14 sm:h-16 rounded-md" src={item.profilePic} alt={item.agentName} />
                                <div className="flex flex-col justify-end items-start ml-2 gap-1 mt-2 sm:mt-0">
                                    <div className="text-pink-900 text-sm sm:text-base font-bold">Av Preferred</div>
                                    <div className="text-black text-base sm:text-lg font-bold">{item.agentName}</div>
                                </div>
                                <img className="w-8 sm:w-10 h-7 sm:h-8 rounded-[6px] mt-2 sm:mt-0" src="pref.png" alt="Preferred" />
                            </div>

                            <div className="flex dark:bg-black justify-between mx-3 flex-wrap gap-2 sm:gap-4 p-2 sm:p-3 items-end">
                                <img className="w-10 sm:w-12 h-10 sm:h-12 rounded-[2px]" src="mvprop.png" alt={item.propertyName} />
                                <div className="flex text-black dark:text-white flex-col items-start">
                                    <div className="text-sm sm:text-base font-semibold">{item.propertyName}</div>
                                    <div className="text-[10px] sm:text-xs font-medium">Operating Since</div>
                                    <div className="text-[10px] sm:text-xs font-medium">{item.operatingSince}</div>
                                </div>
                                <div className="hidden sm:block w-[1px] h-7 bg-black dark:bg-white"></div>
                                <div className="flex text-black dark:text-white flex-col justify-between items-start">
                                    <div className="text-[10px] sm:text-xs font-medium">Buyers Served</div>
                                    <div className="text-[10px] sm:text-xs font-medium">{item.buyersServed}</div>
                                </div>
                            </div>

                            <div className="w-full h-[0.5px] bg-black dark:bg-gradient-to-r dark:from-[#DBB025] dark:to-[#7F671E]"></div>

                            <div className="text-black dark:text-white flex mx-3 justify-between flex-wrap p-2 sm:p-3 gap-2 sm:gap-4 mt-1">
                                <div className="flex flex-col">
                                    <div className="text-sm sm:text-base font-semibold">{item.propertiesForSale}</div>
                                    <div className="text-[10px] sm:text-xs font-medium">Properties for Sale</div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="text-sm sm:text-base font-semibold">{item.propertiesForRent}</div>
                                    <div className="text-[10px] sm:text-xs font-medium">Properties For Rent</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* row 2  */}
                <div className='card flex items-center justify-center w-full mx-auto lg:px-20'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1080: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                        }}
                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}
                        pagination={{
                            clickable: true,
                        }}
                    >
                        {data.map((card) => (
                            <SwiperSlide key={card.id}>
                                <div
                                    onClick={() => navigate('/listings')}
                                    className="card p-2 h-[450px] dark:bg-[#949494] dark:text-black bg-white shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                                >
                                    <img src={card.img} className='w-full max-h-[250px] min-h-[250px] object-cover' alt="" />
                                    <h1 className='text-lg m-2 font-semibold'>{card.title}</h1>
                                    <p className='max-w-[600px] m-2 font-[500] text-sm mt-4'>{card.desc}</p>

                                    <div className="details flex items-center gap-2 m-2">
                                        <div className="star flex items-center gap-2">
                                            {[1, 2, 3, 4, -1].map((currElem, index) => {
                                                return (
                                                    <Star key={index} size={16} color='orange' fill={currElem > 0 ? 'orange' : 'white'}></Star>
                                                )
                                            })}
                                        </div>
                                        <div className="text">
                                            {card.ratings}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </motion.div>
    )
}

export default Preferred