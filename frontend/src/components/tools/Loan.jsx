import React, { useState, useEffect } from 'react';

const Loan = () => {
    const [income, setIncome] = useState(100000);
    const [emi, setEmi] = useState(10000);
    const [loanTenure, setLoanTenure] = useState(2); // in years
    const [finalLoan, setFinalLoan] = useState(0);

    const formatCurrency = (amount) => {
        if (amount >= 10000000) {
            return `₹${(amount / 10000000).toFixed(2)} Crores`;
        } else if (amount >= 100000) {
            return `₹${(amount / 100000).toFixed(0)} Lacs`;
        } else {
            return `₹${amount.toLocaleString()}`;
        }
    };

    const handleRange = (e) => {
        const { name, value } = e.target;
        const numericValue = Number(value);
        if (name === "income") setIncome(numericValue);
        else if (name === "emi") setEmi(numericValue);
        else if (name === "loan") setLoanTenure(numericValue);
    };

    useEffect(() => {
        const eligibleEmi = income * 0.6 - emi; // Assume 60% of income can go to EMI
        const annualInterest = 0.075; // 7.5%
        const monthlyRate = annualInterest / 12;
        const totalMonths = loanTenure * 12;

        if (eligibleEmi > 0) {
            const eligibleLoan = (eligibleEmi * (1 - Math.pow(1 + monthlyRate, -totalMonths))) / monthlyRate;
            setFinalLoan(eligibleLoan);
        } else {
            setFinalLoan(0);
        }
    }, [income, emi, loanTenure]);

    return (
        <div className='mt-3 flex flex-col gap-9 w-full md:w-[50%]'>
            <div className='flex items-center flex-col gap-8 w-full'>
                <h1 className='text-xl md:text-3xl capitalize font-semibold text-center'>Check Loan Eligibility</h1>

                {/* Income */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Monthly Net Income</span>
                        <span>{formatCurrency(income)}</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={10000} max={500000} step={10000}
                        name="income" value={income} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>₹10,000</span>
                        <span>₹5 Lakhs</span>
                    </div>
                </div>

                {/* Existing EMI */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Existing Monthly EMIs</span>
                        <span>{formatCurrency(emi)}</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={0} max={1000000} step={1000}
                        name="emi" value={emi} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>₹0</span>
                        <span>₹10 Lakhs</span>
                    </div>
                </div>

                {/* Loan Tenure */}
                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Preferred Loan Tenure</span>
                        <span>{loanTenure} years</span>
                    </div>
                    <input
                        type="range"
                        className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={2} max={30} step={1}
                        name="loan" value={loanTenure} onChange={handleRange}
                    />
                    <div className="lower_text flex items-center justify-between text-sm">
                        <span>2 years</span>
                        <span>30 years</span>
                    </div>
                </div>

                {/* Eligibility Result */}
                {finalLoan > 0 && (
                    <>
                        <h2 className='text-2xl font-semibold text-green-700'>You are eligible for a loan</h2>
                        <p className='text-lg'>Estimated Loan Eligibility*</p>
                        <span className='text-3xl font-bold text-gray-800'>{formatCurrency(finalLoan)}</span>
                    </>
                )}
                {finalLoan <= 0 && (
                    <span className='text-md text-red-500'>You are currently not eligible for a loan</span>
                )}
            </div>
        </div>
    );
};

export default Loan;
