import React from 'react'
import { Heading } from './Utils/Heading'
import { ArrowRight } from 'lucide-react'

const Nearby = () => {
    const videos = [
        {
            thumbnail: "/videos/video1.jpg",
            views: "72.1k views",
            channel: "Zricks.com",
            followers: "193.2k Followers",
            logo: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            thumbnail: "/videos/video2.jpg",
            views: "56.7k views",
            channel: "MBTV by Magicbricks",
            followers: "290.5k Followers",
            logo: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            thumbnail: "/videos/video3.jpg",
            views: "23.2k views",
            channel: "lamikaan",
            followers: "52.3k Followers",
            logo: "https://randomuser.me/api/portraits/men/32.jpg"
        }
    ]

    return (
        <div className="px-2 md:px-8 mx-2 mt-8 mb-8 md:mx-8 py-10 font-[poppins]">
            <Heading label="Other Properties in this Project and Nearby:" />
            <div className="flex flex-wrap bg-white w-full xl:flex-nowrap p-4 rounded-xl gap-4 h-full">
                <div className="flex-1 h-full">
                    <img src="/villa3.jpg" alt="House Image" className="w-full h-full rounded-xl object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col flex-wrap xl:flex-nowrap justify-between h-full">
                    <div className="flex flex-col gap-4 bg-pink-50 rounded-xl p-2">
                        <div className="flex items-center justify-between scale-95">
                            <div className="flex items-baseline gap-3">
                                <h2 className="text-xl font-bold text-gray-800">Expert Reviews & Advice</h2>
                                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">10+ choices</span>
                            </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 xl:flex-nowrap overflow-x-auto pb-3 scale-95">
                            {videos.map((video, index) => (
                                <div key={index} className="min-w-[200px] cursor-pointer">
                                    <div className="relative rounded-lg overflow-hidden">
                                        <img
                                            src="/villa2.jpg"
                                            alt="youtube video"
                                            className="w-full h-[120px] object-cover"
                                        />
                                        <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                            {video.views}
                                        </div>
                                    </div>
                                    <div className="flex items-center mt-2 gap-2">
                                        <img
                                            src={video.logo}
                                            alt={video.channel}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-800">{video.channel}</p>
                                            <p className="text-xs text-gray-500">{video.followers}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap xl:flex-nowrap justify-start gap-4 w-full mt-auto">
                   
                        <div className="bg-amber-50 rounded-xl p-5 flex-1 flex flex-col justify-center">
                            <div className="bg-yellow-300 top-0 left-0 text-black text-lg w-[120px] rounded-lg text-center">RERA Report</div>
                            <h3 className="text-lg font-medium mt-1 text-gray-800">Project certificates & legal approvals</h3>
                            <button className="mt-3 border border-amber-600 text-amber-800 px-4 py-2 rounded-md inline-flex items-center gap-2">
                                View Certificates <ArrowRight size={16} />
                            </button>
                        </div>

                        <div className="bg-teal-50 p-5 rounded-xl flex-1 flex flex-col justify-center">
                            <div className="bg-green-300 top-0 left-0 text-black text-lg w-[100px] rounded-lg text-center">Amenities</div>
                            <h3 className="text-lg font-medium text-gray-800">All 19 Amenities in the Project</h3>
                            <button className="mt-3 border border-teal-600 text-teal-800 px-4 py-2 rounded-md inline-flex items-center gap-2">
                                View now <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 bg-pink-50 rounded-xl flex flex-col items-center justify-center gap-8 h-full p-6">
                    <h2 className="text-2xl font-bold text-pink-950">Interested?</h2>
                    <div className="cursor-pointer w-full max-w-[220px] py-3 rounded-3xl text-center outline outline-2 outline-pink-950 text-white bg-pink-950 transition-transform hover:scale-105 duration-300 text-xl">
                        <h3>Contact Owner</h3>
                    </div>
                    <div className="cursor-pointer outline w-full max-w-[220px] py-3 rounded-3xl text-center outline-2 outline-pink-950 text-pink-950 bg-pink-50 transition-transform hover:scale-105 duration-300 text-xl">
                        <h3>More Details</h3>
                    </div>
                    <p className="text-pink-900 text-sm text-center mt-2">Get in touch directly and schedule a visit!</p>
                </div>
            </div>
        </div>
    )
}

export default Nearby