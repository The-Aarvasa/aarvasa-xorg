import React from 'react';

const Sale = ({ address, price, unit, bed, bath, area, transactionType }) => {

  const formatMoney = (amount) => {
  if (!amount) return "";
  return `₹${amount.toLocaleString("en-IN")}`;
};



    const Activity = ({ state }) => {
        if (state === "active") return <div className="w-[32px] h-[32px] rounded-full bg-green-400"></div>;
        if (state === "inactive") return <div className="w-[32px] h-[32px] rounded-full bg-red-400"></div>;
        return null;
    };

    const Details = ({ address, price, unit, bed, bath, area, transactionType }) => {
        return (
            <div className="flex w-full items-center md:items-start flex-col gap-8 font-[poppins] md:p-4">
                {address && (
                    <div className="text-gray-600 mt-4 text-lg md:text-2xl font-medium">
                        {address}
                    </div>
                )}

                <div className="flex items-center gap-6 w-full justify-center md:justify-between flex-wrap md:mt-10">
                    {(price || unit) && (
                        <div className="flex flex-col gap-8">
                            <div className="text-3xl md:text-5xl font-semibold">
                                {formatMoney(price)} <span className='text-lg md:text-xl relative bottom-1'> {transactionType === "Rent" ? "/Month" : null}</span>
                            </div>
                            {price && (
                                <div className="text-lg font-medium">
                                    EMI est. ~{(price / 24).toFixed(2)}/month
                                </div>
                            )}
                        </div>
                    )}

                    <div className="flex mt-4 md:mt-0 gap-5 md:gap-20">
                        {bed && (
                            <div className="flex flex-col gap-4 items-center">
                                <div className="md:text-2xl text-md font-semibold">{bed}</div>
                                <div className="text-md md:text-xl font-semibold">Bed</div>
                            </div>
                        )}
                        {bath && (
                            <div className="flex flex-col gap-4 items-center">
                                <div className="text-md md:text-2xl font-semibold">{bath}</div>
                                <div className="text-md md:text-xl font-semibold">Bath</div>
                            </div>
                        )}
                        {area && (
                            <div className="flex flex-col gap-4 items-center">
                                <div className="text-md md:text-2xl font-semibold">{area}</div>
                                <div className="text-md md:text-xl font-semibold">Sq Ft</div>
                            </div>
                        )}
                        {transactionType && (
                            <div className="flex flex-col gap-4 items-center">
                                <div className="text-md md:text-2xl font-semibold">{transactionType}</div>
                                <div className="text-md md:text-xl font-semibold">Transaction Type</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mx-2 mt-4 md:m-5 md:p-16 bg-white p-4 rounded-2xl shadow-md font-[poppins] flex flex-col justify-center gap-3">
            <div className="flex items-center md:items-start flex-col  md:gap-10 flex-wrap">
                <div className="flex gap-4 flex-wrap items-center">
                    <Activity state="active" />
                    <h1 className="text-xl font-medium">FOR SALE--ACTIVE</h1>
                </div>
                <Details
                    address={address}
                    price={price}
                    unit={unit}
                    bed={bed}
                    bath={bath}
                    area={area}
                    transactionType={transactionType}
                />
            </div>
        </div>
    );
};

export default Sale;
