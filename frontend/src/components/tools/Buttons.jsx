import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
const Buttons = () => {
    const location = useLocation();
    const [data, setData] = useState([
        {
            id : 1,
            title : "Budget calculator",
            link : '/tools/budgetcalculator'
        },
        {
            id : 2,
            title : "EMI Calculator",
            link : "/tools/EMIcalculator",
        },
        // {
        //     id : 3,
        //     title : "Home loan eligibility calculator",
        //     link : "/tools/homeloaneligibility"
        // },
        {
            id : 4,
            title : "Area converter",
            link : "/tools/areaconverter"
        }
    ])
    const [currentState, setCurrentState] = useState(1);
    return (
        <div className="buttons dark:text-white w-full flex gap-6 flex-wrap items-center justify-center mt-8">
            {data.map((currElem) => {
                return(
                    <Link to={currElem.link} className='w-full sm:w-fit'><button className={`border w-full md:w-fit px-4 transition-all border-1 border-gray-400 dark:text-white p-2 rounded-xl ${currElem.link === location.pathname ? 'border-none shadow-lg font-semibold bg-[#F3CADB] text-[#6C1E3C]' : 'text-gray-600'}`}>{currElem.title}</button></Link>
                )
            })}
        </div>
    )
}

export default Buttons
