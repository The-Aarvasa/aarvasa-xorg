import React from 'react'

const Photos = () => {
    return (

        <div className="m-5 p-8">
            
            <h1 className="text-3xl md:text-5xl font-bold text-[#3D3D3D] mb-8">Big city Residential Project</h1>
            <p className="text-lg md:text-2xl font-semibold text-[#3D3D3D] mt-8">3 BHK Flat For Sale in Omkar Signet, Malad East, New Delhi</p>
            <div className="flex flex-col md:flex-row gap-4 mt-6 mb-6 w-full md:w-3/4 mx-auto">
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
        </div>
    )
}

export default Photos