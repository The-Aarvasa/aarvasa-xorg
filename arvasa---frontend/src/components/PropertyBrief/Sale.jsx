import React from 'react'

const Sale = () => {
    const Activity = ({ state }) => {
        if (state === "active")
            return (
                <div className="w-[32px] h-[32px] rounded-full bg-green-400"></div>
            );
        if (state === "inactive")
            return (
                <div className="w-[32px] h-[32px] rounded-full bg-red-400"></div>
            );
        return null;
    }

    const Details = ({ address, price, unit, bed, bath, area }) => {
        return (
            <div className="flex flex-col gap-5 font-[poppins] p-4">
                <div className="text-gray-600 text-lg md:text-2xl font-medium">
                    {address}
                </div>
                <div className="flex justify-between flex-wrap md:mt-10">
                    <div className="flex flex-col gap-4">
                        <div className="text-3xl md:text-5xl font-semibold">{price} {unit}</div>
                        <div className="text-lg font-medium">EMI est. ~{(price / 24).toFixed(2)}/month</div>
                    </div>
                    <div className="flex mt-4 md:mt-0 gap-5 md:gap-20">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-2xl font-semibold">{bed}</div>
                            <div className="text-xl font-semibold">Bed</div>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-2xl font-semibold">{bath}</div>
                            <div className="text-xl font-semibold">Bath</div>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-2xl font-semibold">{area}</div>
                            <div className="text-xl font-semibold">Sq Ft</div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
    return (
        <div className="mx-2 mt-4 md:m-5 md:p-16 bg-white p-4 rounded-2xl shadow-md font-[poppins] flex flex-col justify-center gap-3">
            <div className="flex flex-col md:gap-10 flex-wrap">
                <div className="flex gap-4 flex-wrap items-center">
                    <Activity state="active" />
                    <h1 className="text-xl font-medium">FOR SALE--ACTIVE</h1>
                </div>
                <Details
                    address="Flat For Sale in Omkar Signet, Malad East, New Delhi"
                    price={2.20}
                    unit="Cr"
                    bed={3}
                    bath={3}
                    area={1500}
                />

            </div>
        </div>
    )
}

export default Sale