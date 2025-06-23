import React, { useState, useEffect } from 'react';

const Budget = () => {
    const [income, setIncome] = useState(10000);
    const [emi, setEmi] = useState(1000);
    const [loan, setLoan] = useState(2);
    const [finalLoan, setFinalLoan] = useState(0);

    const handleRange = (e) => {
        const { name, value } = e.target;
        const num = Number(value);

        if (name === "income") setIncome(num);
        else if (name === "emi") setEmi(num);
        else if (name === "loan") setLoan(num);
    };

    const formatCurrency = (amount) => {
        if (amount >= 10000000) {
            return `₹${(amount / 10000000).toFixed(2)} Crores`;
        } else if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(0)} Lacs`;
        } else {
            return `₹${amount.toLocaleString()}`;
        }
    };

    useEffect(() => {
        const eligibleEmi = income * 0.6 - emi;
        const annualInterest = 0.075;
        const r = annualInterest / 12;
        const n = loan * 12;

        if (eligibleEmi > 0) {
            const eligibleLoan = (eligibleEmi * (1 - Math.pow(1 + r, -n))) / r;
            setFinalLoan(eligibleLoan);
        } else {
            setFinalLoan(0);
        }
    }, [income, emi, loan]);

    return (
        <div className='mt-3 flex flex-col gap-9 w-full md:w-[50%]'>
            <div className='flex items-center flex-col gap-8 w-full'>
                <h1 className='text-xl md:text-3xl capitalize font-semibold text-center'>
                    Check your Home Buying Budget
                </h1>

                {/* Monthly Income */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Monthly Net Income</span>
                        <span>{formatCurrency(income)}</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={10000}
                        max={500000}
                        step={10000}
                        name="income"
                        value={income}
                        onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>₹10K</span>
                        <span>₹5 Lakhs</span>
                    </div>
                </div>

                {/* Current EMIs */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Current EMIs (if any)</span>
                        <span>{formatCurrency(emi)}</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={1000}
                        max={1000000}
                        step={1000}
                        name="emi"
                        value={emi}
                        onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>₹1K</span>
                        <span>₹10 Lakhs</span>
                    </div>
                </div>

                {/* Loan Tenure */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Preferred Loan Tenure</span>
                        <span>{loan} years</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={2}
                        max={30}
                        step={1}
                        name="loan"
                        value={loan}
                        onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>2 years</span>
                        <span>30 years</span>
                    </div>
                </div>

                {/* Final Result */}
                {finalLoan > 0 && (
                    <h2 className='text-2xl font-semibold text-green-700'>You are eligible for a home loan</h2>
                )}
                <p className='text-lg'>Estimated loan eligibility*</p>
                <span className='text-3xl font-semibold text-gray-800'>
                    {formatCurrency(finalLoan)}
                </span>
            </div>
        </div>
    );
};

export default Budget;
