import React from 'react'
import { Heading } from '../Utils/Heading'
import timeslotter from '/assets/timeslotter.jpg'

const CoPartners = () => {
    return (
        <div className="relative md:px-8 h-auto md:py-10 mx-2 md:mx-8 font-[poppins]">
            <Heading label="Company Partners" />
            <div className="relative w-auto font-[poppins] ">
                <div className="flex flex-wrap flex-wrap py-8 justify-center space-y-8 lg:space-y-0 items-center gap-6 w-auto h-auto bg-gradient-to-br from-[#A82E4F] to-[#8C2841] shadow-xl transition-shadow duration-300 hover:shadow-2xl rounded-3xl" >
                    
                      <div className="w-60 inline-flex flex-col justify-start items-center gap-5">
                            <img className="transition-transform duration-300 hover:scale-110 hover:z-10 w-24 h-24 rounded-2xl" src={timeslotter} />
                            <div className="w-56 text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-7">Ealth technologies</div>
                        </div>
                       <div className="w-60 inline-flex flex-col justify-start items-center gap-5">
                            <img className="transition-transform duration-300 hover:scale-110 hover:z-10 w-24 h-24 rounded-2xl" src={timeslotter} />
                            <div className="w-56 text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-7">Ealth technologies</div>
                        </div>
                      <div className="w-60 inline-flex flex-col justify-start items-center gap-5">
                            <img className="transition-transform duration-300 hover:scale-110 hover:z-10 w-24 h-24 rounded-2xl" src={timeslotter} />
                            <div className="w-56 text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-7">Ealth technologies</div>
                        </div>
                       <div className="w-60 inline-flex flex-col justify-start items-center gap-5">
                            <img className="transition-transform duration-300 hover:scale-110 hover:z-10 w-24 h-24 rounded-2xl" src={timeslotter} />
                            <div className="w-56 text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-7">Ealth technologies</div>
                        </div>
                        <div className="w-60 inline-flex flex-col justify-start items-center gap-5">
                            <img className="transition-transform duration-300 hover:scale-110 hover:z-10 w-24 h-24 rounded-2xl" src={timeslotter} />
                            <div className="w-28 text-center justify-start text-white text-xl font-medium font-['Poppins'] leading-7">Softwave</div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CoPartners