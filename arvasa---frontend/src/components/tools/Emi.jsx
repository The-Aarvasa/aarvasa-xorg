import React, { useState, useEffect } from 'react';

const Emi = () => {
    const [loanAmount, setLoanAmount] = useState(100000); // ₹1 Lakh
    const [annualRate, setAnnualRate] = useState(7.5);     // in %
    const [tenure, setTenure] = useState(2);               // in years
    const [emi, setEmi] = useState(0);

    const handleRange = (e) => {
        const value = Number(e.target.value);
        const name = e.target.name;

        if (name === "loan") setLoanAmount(value);
        else if (name === "rate") setAnnualRate(value);
        else if (name === "tenure") setTenure(value);
    };

    useEffect(() => {
        const principal = loanAmount;
        const monthlyRate = annualRate / 12 / 100;
        const numberOfMonths = tenure * 12;

        if (principal && monthlyRate && numberOfMonths) {
            const emiCalc =
                (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
                (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
            setEmi(emiCalc);
        } else {
            setEmi(0);
        }
    }, [loanAmount, annualRate, tenure]);

    return (
        <div className='mt-3 flex flex-col gap-9 w-full justify-center w-full md:w-[50%]'>
            <div className='flex items-center flex-col gap-8 justify-center'>
                <h1 className='text-xl md:text-xl capitalize font-semibold'>Check your estimated amount per month</h1>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Loan Amount</span>
                        <span>₹{loanAmount}</span>
                    </div>
                    <input type="range" className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={10000} max={5000000} step={10000}
                        name="loan" value={loanAmount} onChange={handleRange} />
                    <div className="lower_text flex items-center justify-between">
                        <span>₹1 Lacs</span>
                        <span>₹27 crores</span>
                    </div>
                </div>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Interest Rate (Annual %)</span>
                        <span>{annualRate}</span>
                    </div>
                    <input type="range" className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={5} max={20} step={0.1}
                        name="rate" value={annualRate} onChange={handleRange} />
                    <div className="lower_text flex items-center justify-between">
                        <span>₹1000</span>
                        <span>₹1000000 Lacs</span>
                    </div>
                </div>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Loan Tenure</span>
                        <span>{tenure} years</span>
                    </div>
                    <input type="range" className='w-full accent-[#6D1E3D] mt-2 mb-2'
                        min={1} max={30} step={1}
                        name="tenure" value={tenure} onChange={handleRange} />
                    <div className="lower_text flex items-center justify-between">
                        <span>2 year</span>
                        <span>30 years</span>
                    </div>
                </div>

                <h2 className='text-2xl'>Estimated EMI</h2>
                <span className='text-3xl font-semibold text-gray-800'>₹{emi.toFixed(2)}</span>
                <span className='text-md md:text-2xl font-semibold text-gray-800'>Calculated an average interest rate of 8.5%</span>
            </div>
        </div>
    );
};

export default Emi;
