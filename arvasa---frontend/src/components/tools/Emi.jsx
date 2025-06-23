import React, { useState, useEffect } from 'react';

const Emi = () => {
    const [loanAmount, setLoanAmount] = useState(8100000); // ₹81 Lacs
    const [annualRate, setAnnualRate] = useState(8.5);     // Annual interest rate %
    const [tenure, setTenure] = useState(20);              // Loan tenure in years
    const [emi, setEmi] = useState(0);

    // Helper to format loan amount in Lacs or Crores
    const formatIndianCurrency = (amount) => {
        if (amount >= 10000000) {
            return `₹${(amount / 10000000).toFixed(2)} Crores`;
        } else if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(0)} Lacs`;
        } else {
            return `₹${amount.toLocaleString()}`;
        }
    };

    const handleRange = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;

        if (name === "loan") setLoanAmount(value);
        else if (name === "rate") setAnnualRate(value);
        else if (name === "tenure") setTenure(value);
    };

    useEffect(() => {
        const principal = loanAmount;
        const monthlyRate = annualRate / 12 / 100; // e.g. 8.5% => 0.00708
        const numberOfMonths = tenure * 12;

        if (principal > 0 && monthlyRate > 0 && numberOfMonths > 0) {
            const emiCalc = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
                            (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
            setEmi(emiCalc);
        } else {
            setEmi(0);
        }
    }, [loanAmount, annualRate, tenure]);

    return (
        <div className='mt-3 flex flex-col gap-9 w-full justify-center md:w-[50%]'>
            <div className='flex items-center flex-col gap-8 justify-center'>
                <h1 className='text-xl md:text-2xl capitalize font-semibold text-center'>
                    Check Your Estimated Amount Per Month
                </h1>

                {/* Loan Amount */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Loan Amount</span>
                        <span>{formatIndianCurrency(loanAmount)}</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={100000} max={270000000} step={100000}
                        name="loan" value={loanAmount} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>₹1 Lacs</span>
                        <span>₹27 Crores</span>
                    </div>
                </div>

                {/* Interest Rate */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Interest Rate</span>
                        <span>{annualRate}%</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={5} max={20} step={0.1}
                        name="rate" value={annualRate} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>5%</span>
                        <span>20%</span>
                    </div>
                </div>

                {/* Loan Tenure */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Preferred Loan Tenure</span>
                        <span>{tenure} years</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={1} max={30} step={1}
                        name="tenure" value={tenure} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>1 year</span>
                        <span>30 years</span>
                    </div>
                </div>

                {/* EMI Result */}
                <h2 className='text-2xl font-semibold'>Estimated EMI per month*</h2>
                <span className='text-3xl font-semibold text-gray-800'>
                    ₹{emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                </span>
                <span className='text-sm md:text-base text-gray-600 text-center'>
                    *Calculated using an annual interest rate of {annualRate}%
                </span>
            </div>
        </div>
    );
};

export default Emi;
