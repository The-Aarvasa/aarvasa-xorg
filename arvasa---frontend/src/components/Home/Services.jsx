import React, { useState } from 'react'
import { MoveRight } from 'lucide-react'
import { Heading } from '../Utils/Heading'
const Services = () => {
    const [data, setData] = useState([{
        img: "/s-1.png",
        text: "Comprehensive Consultancy Services"
    },
    {
        img: "/monitization.png",
        text: "Monetization of Existing Properties"
    },
    {
        img: "/s-2.jpg",
        text: "Flexible Payment Models"
    },
    {
        img: "/s-4.jpg",
        text: "Blockchain-Backed Transactions"
    }
    ])
    return (
        <div className='mx-2 mt-8 mb-8 md:mx-4 relative'>
            <Heading label={"Services"}></Heading>
            <div className="cols flex flex-wrap items-center justify-center lg:justify-between">
                <div className="left_col md:w-[60%] py-8 rounded-lg flex-wrap bg-gradient-to-br gap-8 from-[#3A3A3A] to-[#A0A0A0] flex items-center justify-center">
                    {data.map((currElem) => {
                        return (
                            <div className="w-full card md:w-[380px] p-4 m-2 h-[130px] bg-[#D9D9D9] flex items-center justify-center gap-2">
                                <img className='w-20 rounded-lg' src={currElem.img} alt="" />
                                <h1>{currElem.text}</h1>
                                <MoveRight></MoveRight>
                            </div>
                        )
                    })}
                </div>
                <div className="right_col hidden lg:block">
                    <img src="/man.svg" className='absolute w-[500px] md:top-[240px] right-0 xl:top-[-40px] z-[999]' alt="" />
                      <svg viewBox="0 0 200 200" className='absolute z-[99] xl:top-[-80px] md:top-[120px] right-0 w-[400px]' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#8C2841" />
                                <stop offset="100%" stop-color="#260B12" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#myGradient)" d="M48.8,-74.3C63.6,-66.5,76.2,-53.5,82.3,-38.2C88.4,-22.8,88.1,-5.1,79.8,7.3C71.5,19.7,55.2,26.7,43.1,33.2C31,39.8,23.1,45.9,12.1,55.7C1.1,65.5,-13.1,79.1,-23,76.9C-33,74.7,-38.7,56.6,-46.8,43C-54.9,29.3,-65.3,20.1,-66.4,9.8C-67.6,-0.5,-59.4,-11.9,-53.9,-24.9C-48.5,-37.9,-45.8,-52.4,-37.2,-63.1C-28.7,-73.8,-14.3,-80.6,1.3,-82.7C17,-84.8,34,-82.1,48.8,-74.3Z" transform="translate(100 100)" />
                    </svg>
                    <h1 className='z-[999] absolute xl:top-[10px] md:top-[240px] lg:top-[] text-center right-[70px] text-3xl text-white'>Chat with ai <br/> bot</h1>

                </div>

                 {/* <div className="right_col md:block">
                    <img src="/man.svg" className='z-[999]' alt="" />
                      <svg viewBox="0 0 200 200" className='absolute z-[99] top-[-60px] right-0 w-[400px]' xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="myGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#8C2841" />
                                <stop offset="100%" stop-color="#260B12" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#myGradient)" d="M48.8,-74.3C63.6,-66.5,76.2,-53.5,82.3,-38.2C88.4,-22.8,88.1,-5.1,79.8,7.3C71.5,19.7,55.2,26.7,43.1,33.2C31,39.8,23.1,45.9,12.1,55.7C1.1,65.5,-13.1,79.1,-23,76.9C-33,74.7,-38.7,56.6,-46.8,43C-54.9,29.3,-65.3,20.1,-66.4,9.8C-67.6,-0.5,-59.4,-11.9,-53.9,-24.9C-48.5,-37.9,-45.8,-52.4,-37.2,-63.1C-28.7,-73.8,-14.3,-80.6,1.3,-82.7C17,-84.8,34,-82.1,48.8,-74.3Z" transform="translate(100 100)" />
                    </svg>
                    <h1 className='z-[999] absolute top-[60px] text-center right-[70px] text-4xl text-white'>Chat with ai <br/> bot</h1>

                </div> */}

            </div>
        </div>
    )
}

export default Services
