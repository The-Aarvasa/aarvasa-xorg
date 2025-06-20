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
            <div className="flex flex-col gap-5 font-[poppins]">
                <div className="text-gray-600 text-2xl font-medium">
                    {address}
                </div>
                <div className="flex justify-between items-center mt-10">
                    <div className="flex flex-col gap-4">
                        <div className="text-5xl font-semibold">{price} {unit}</div>
                        <div className="text-lg font-medium">EMI est. ~{price / 24}/month</div>
                    </div>
                    <div className="flex gap-32">
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-2xl font-semibold">{bed}</div>
                            <div className="text-xl font-semibold">Bed</div>
                        </div>
                        <div className="flex flex-col gap-4 items-center">
                            <div className="text-2xl font-semibold">{bath}</div>
                            <div className="text-xl font-semibold">Bed</div>
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
        <div className="m-5 p-16 bg-white rounded-2xl shadow-md font-[poppins] flex flex-col justify-start gap-3">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 items-center">
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