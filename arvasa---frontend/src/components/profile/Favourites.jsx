import React from 'react';

const Favourites = () => {
    return (
        <div className="bg-white p-4 sm:p-8 rounded-lg shadow-md max-w-full sm:max-w-screen-xl mx-auto my-4 sm:my-8">
            <div className="flex items-center text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-gray-800">
                <span className="text-yellow-500 mr-1 sm:mr-2">⭐</span>
                Your Favourites <span className="ml-1 sm:ml-2 text-gray-400 text-xs sm:text-sm">›</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-xs sm:text-sm">Area</button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 focus:outline-none focus:ring-2 focus:ring-pink-300 text-xs sm:text-sm">Recent</button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 text-xs sm:text-sm">property type</button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center text-xs sm:text-sm">
                    <span className="mr-1"></span> All Filters
                </button>
                <button className="px-3 py-1 sm:px-4 sm:py-2 rounded-full text-red-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-300 text-xs sm:text-sm">Reset All Filters</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwaG91c2V8ZW58MHx8MHx8fDA%3D",
                   
                ].map((imageSrc, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                        <img
                            src={imageSrc}
                            alt="House"
                            className="w-full h-36 sm:h-48 object-cover rounded-t-lg"
                        />
                        <button className="absolute bottom-1 left-[75px] -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded shadow-md flex items-center text-xs sm:text-sm">
                            <span className="mr-0.5 sm:mr-1">📍</span> View on Map
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favourites;
