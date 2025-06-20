import React, { useState } from 'react'
import { useEffect } from 'react';
const Budget = () => {
    const [income, setIncome] = useState(100);
    const [emi, setEmi] = useState(10000);
    const [loan, setLoan] = useState(2);
    const [finalLoan, setFinalLoan] = useState(0);
    const handleRange = (e) => {
        const value = Number(e.target.value);
        if (e.target.name === "income") {
            console.log(e.target.value)
            setIncome(value);
        }
        else if (e.target.name === "emi") {
            console.log(e.target.value)
            setEmi(value);
        }
        else if (e.target.name === "loan") {
            setLoan(value);
        }



    }

    useEffect(() => {
        const eligibleEmi = income * 0.6 - emi;
        const annualInterest = 0.075; // 7.5% annual
        const r = annualInterest / 12; // Monthly interest rate
        const n = loan * 12; // Loan tenure in months

        let eligibleLoan = 0;
        if (eligibleEmi > 0) {
            eligibleLoan = (eligibleEmi * (1 - Math.pow(1 + r, -n))) / r;
            setFinalLoan(eligibleLoan);
        }
    }, [emi, loan, income])
    return (
        <div className='mt-3 flex flex-col gap-9 w-full md:w-[50%]'>
                <div className='flex items-center flex-col gap-8 w-[98%] md:w-full'>
                    <h1 className='text-xl md:text-4xl capitalize font-semibold'>Check your Home buying budget</h1>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Saving for buying home</span>
                        <span>₹{income}</span>
                    </div>
                    <input type="range" className='w-full text-red-400 accent-[#6D1E3D] mt-2 mb-2' color='black' min={10000} max={500000} step={10000} name="income" value={income} onChange={(e) => handleRange(e)} />
                    <div className="lower_text flex items-center justify-between">
                        <span>₹0</span>
                        <span>₹50 crors</span>
                    </div>
                </div>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>EMI you can afford</span>
                        <span>₹{emi}</span>
                    </div>
                    <input type="range" className='w-full mt-2 accent-[#6D1E3D] mb-2' min={1000} max={1000000} step={1000} name='emi' value={emi} onChange={(e) => handleRange(e)} />
                    <div className="lower_text flex items-center justify-between">
                        <span>₹1000</span>
                        <span>₹10 lakhs</span>
                    </div>
                </div>

                <div className="input_bar w-full">
                    <div className="upper_text flex items-center justify-between">
                        <span>Preferred Loan Tenure</span>
                        <span>{loan} years</span>
                    </div>
                    <input type="range" className='w-full mt-2 accent-[#6D1E3D] mb-2' min={2} max={30} step={1} name='loan' value={loan} onChange={(e) => handleRange(e)} />

                    <div className="lower_text flex items-center justify-between">
                        <span>2 years</span>
                        <span>30 years</span>
                    </div>
                </div>

                {finalLoan > 0 ? <h1 className='text-2xl font-semibold'>You are now Eligible for loan </h1> : null}
                <p className='text-lg'>Estimated loan eligibilty*</p>
                <span className='text-3xl font-semibold'>₹{finalLoan.toFixed(2)}</span>
                </div>

            </div>
    )
}

export default Budget
