import React from 'react'
import { ArrowRightLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
const Area = () => {
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
                    <h1 className='text-xl md:text-4xl capitalize font-semibold'>Convert area into units</h1>

                <div className="input_bar w-full">
                   <label htmlFor="">Select the state</label>
                   <select name="" id="" className='bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'>
                    <option value="State">State</option>
                   </select>
                </div>

                <div className="input_bar w-full">
                     <div className="input_bar w-full">
                   <label htmlFor="">Convert from</label>
                   <select name="" id="" className='bg-gray-200 bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'>
                    <option value="State">Sq.ft</option>
                   </select>
                </div>
                </div>

                <div className="input_bar w-full">
                    <div className="input_bar w-full">
                   <label htmlFor="">Convert to</label>
                   <select name="" id="" className='bg-gray-200 bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'>
                    <option value="State">Sq.m</option>
                   </select>
                </div>
                </div>

                <h1 className='text-2xl font-semibold'>Converted units* </h1> 
                <div className='flex items-center gap-4'>
                    <h1 className='text-xl'>999 sq.ft</h1>
                    <ArrowRightLeft />
                    <h1 className='text-xl'>999 sq.m</h1>
                </div>
                </div>

            </div>
  )
}

export default Area
