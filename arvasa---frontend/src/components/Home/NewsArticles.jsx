import React, { useState } from 'react'
import { Heading } from '../../components/Utils/Heading'
import { MoveRight } from 'lucide-react'
import { Star } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
const NewsArticles = () => {
    const [data, setData] = useState([
        {
            id: 1,
            img: '/na - 1.jpg',
            text: 'Housing markets That Changed the most in  this month',
        },
        {
            id: 2,
            img: '/na - 2.jpg',
            text: 'walkable cities where you can Live Affordably',
        },
        {
            id: 3,
            img: '/na - 3.jpg',
            text: 'Read Unevils the Best Cities for Biking',
        }
    ])
    return (
        <div className='mx-2 mt-8 md:mx-4 relative'>
            <Heading label={"News & Articles"}></Heading>
            <div className="rows flex flex-col gap-4">
                <div className="main bg-gradient-to-br p-8 h-auto xl:h-[60vh] justify-center rounded-2xl flex items-center from-[#A82E4F] to-[#42121F]">
                    <div className="cards mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-20">
                        {data.map((currElem) => {
                            return (
                                <div className="card">
                                    <img className='w-[290px]' src={currElem.img} alt="" />
                                    <p className='w-full md:max-w-[270px] text-white mt-4 mb-4 text-sm'>{currElem.text}</p>
                                    <button className='flex items-center gap-1 text-white text-sm'>Read More
                                        <MoveRight></MoveRight>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* row2  */}

                <div className="row_2 px-4">
                    <div className="cols flex items-center flex-wrap justify-center lg:justify-between space-y-10 md:space-y-10 px-2 md:px-36 w-[100%] mx-auto">
                        <div className="left_col">
                            <h1 className='text-black font-semibold text-3xl'>More than 10 Years of Experience</h1>
                            <p className='text-[#181A20] mt-4 mb-4'>Lorem ipsum dolor sit amet, consectetur.</p>
                            <div className="numbers flex items-center gap-12">
                                <div>
                                    <h1 className='text-md md:text-2xl font-semibold'>2M +</h1>
                                    <p className='text-sm'>user visits</p>
                                </div>

                                <div>
                                    <h1 className='text-md md:text-2xl font-semibold'>999 +</h1>
                                    <p className='text-sm'>Satisfied Customers</p>
                                </div>

                                <div>
                                    <h1 className='text-md md:text-2xl font-semibold'>29K +</h1>
                                    <p className='text-sm'>Home ownership</p>
                                </div>
                            </div>
                        </div>
                        {/* right col */}
                        <div className="right_col relative bg-gradient-to-br from-[#A82E4F] to-[#42121F] rounded-lg w-full md:w-[400px]">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 4000,
                                    disableOnInteraction: false,
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
                                        <div className="card bg-white shadow-lg md:w-[380px] p-4 rounded-lg">
                                            <h1 className='text-lg font-semibold'>samuel riz</h1>
                                            <p className='max-w-[600px] font-[500] text-sm mt-4 mb-4'>“Amazing design, easy to customize and a
                                                design quality superlative account on its cloud
                                                platform for the optimized performance. And
                                                we didn’t on our original designs.”</p>
                                            <div className="stars flex items-center gap-2">
                                                {[1, 2, 3, 4, -1].map((currElem) => {
                                                    return (
                                                        <Star color='orange' fill={currElem > 0 ? 'orange' : 'white'}></Star>
                                                    )
                                                })}
                                            </div>
                                            <hr className='border mt-4 mb-4 border-1 border-b-[#E9E9E9]' />
                                            <div className="details flex items-center gap-2">
                                                <img className='w-10' src="/manager.jpg" alt="" />
                                                <div>
                                                    <h1 className='font-bold'>samuel riz</h1>
                                                    <p className='font-semibold'>Product Manager</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="custom-pagination mt-8 flex justify-center"></div>

                                    </SwiperSlide>
                                ))}
                            </Swiper>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticles
