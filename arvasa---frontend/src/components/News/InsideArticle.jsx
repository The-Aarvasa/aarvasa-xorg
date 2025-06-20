import React from 'react';

const InsideArticle = () => {
    return (
        <div className="inside-article-container max-w-screen-xl mx-auto px-4 py-6">
            <div className="bg-white rounded-lg overflow-hidden">
                <div className="p-4 flex items-center mb-4 ">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwz_Ord72siqLlZVcJSiQWKAp_sflvuSgj4g&s"
                        alt="Profile"
                        className="w-10 h-10 rounded-full mr-3 sm:w-12 sm:h-12"
                    />
                    <div className="flex items-center gap-3">
                        <p className="text-xl sm:text-3xl text-gray-800">Mumbai Film City Road</p>
                        <p className="text-sm sm:text-lg text-gray-500">21 m ago</p>
                    </div>
                </div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwz_Ord72siqLlZVcJSiQWKAp_sflvuSgj4g&s"
                    alt="Building"
                    className="w-6xl mx-auto h-auto rounded-3xl mb-8 shadow-md hover:shadow-2xl hover:scale-[1.02] transition duration-300"
                />

                <div className="px-4 py-4">
                    <h1 className="text-4xl sm:text-5xl font-semibold mb-10 text-[#6C1E3C] text-center">
                        Urban Revival: Demand Surges for Mixed-Use Developments<br />in Tier-2 Cities
                    </h1>
                    <div className='mx-auto max-w-5xl'>
                        <div className="flex flex-col sm:flex-row text-base sm:text-xl justify-between items-center mb-10">
                            <p>April 8, 2025 | Real Estate Today</p>
                            <p className='text-gray-600'>California, USA</p>
                        </div>

                        <h2 className="text-xl sm:text-2xl mb-10">What's happening in the suburban real estate market right now?</h2>
                        <p className="mb-10 text-base sm:text-xl">
                            Bangalore, India – A new wave of investment is sweeping across India's tier-2 cities, as developers pivot
                            toward mixed-use developments that blend residential, commercial, and recreational spaces.
                            According to a recent report by Cushman & Wakefield, demand for integrated townships in cities like
                            Coimbatore, Indore, and Bhubaneswar has increased by 27% year-over-year.
                        </p>
                        <p className="mb-10 text-base sm:text-xl">
                            Urban planners and real estate experts attribute the trend to a growing population of young
                            professionals and remote workers seeking more balanced lifestyles outside the bustle of metro hubs.
                            The rise of hybrid work models post-pandemic has fueled migration to more affordable cities that offer
                            modern amenities.
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-10">Why are more people moving to the suburbs?</h2>
                        <p className="mb-10 text-base sm:text-xl">
                            "People want more than just a home—they want walkable communities, co-working spaces, cafes, and
                            open green zones," says Priya Arora, Regional Director at Jones Lang LaSalle (JLL). "Tier-2 cities are
                            finally catching up with that demand."
                        </p>
                        <p className="mb-10 text-base sm:text-xl">
                            Several real estate giants have announced major projects this quarter. DLF has committed ₹1,800 crore
                            to a new 110-acre smart township in Kochi, while Godrej Properties is eyeing expansion in Nagpur and
                            Jaipur.
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-10">Which regions are seeing the biggest growth?</h2>
                        <p className="mb-10 text-base sm:text-xl">
                            Local governments are also playing a key role. Bhubaneswar's smart city initiative recently launched a
                            public-private partnership (PPP) model offering incentives to developers who prioritize sustainability
                            and affordable housing within these integrated spaces.
                        </p>
                        <p className="mb-10 text-base sm:text-xl">
                            Despite the optimistic outlook, experts warn of the need for cautious development. "Infrastructure
                            must scale with these projects," says Suresh Patel, an urban policy analyst. "Without that, we risk
                            replicating the congestion and chaos of overbuilt metro zones."
                        </p>

                        <h2 className="text-xl sm:text-2xl mb-10">Are housing prices going up or down?</h2>
                        <p className="mb-10 text-base sm:text-xl">
                            Still, with property prices in metros stabilizing and a youth-driven market demanding innovation, the
                            boom in tier-2 cities might just be India's next big real estate chapter.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InsideArticle;
