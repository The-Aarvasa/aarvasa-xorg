import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Search, Home, IndianRupee, Earth, KeyRound, Map, BedDouble, Building2, UploadCloud } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FilterContext } from '../context/FilterProvider'
import Select from 'react-select';
import { Link } from 'react-router-dom'
import Alert from '../components/Utils/Alert'
import { toast } from 'react-toastify'
const Premium = () => {
    const options = [{
        title: "Buy",
        icon: <Home size={22}></Home>,
        fn: () => {
            handleChange('transactionType', 'New Property')
        }
    },
    {
        title: "Rent",
        icon: <KeyRound size={22}></KeyRound>,
        fn: () => {
            handleChange('transactionType', 'Rent')
        }
    }, {
        title: "Plot",
        icon: <Map size={22}></Map>
    }, {
        title: "PG",
        icon: <BedDouble size={22}></BedDouble>,
    }, {
        title: "Commercial",
        icon: <Building2 size={22}></Building2>
    }];
    let [selected, setSelected] = useState(-1);
    const [prevs, setPrev] = useState({});
    const { filters, setFilters } = useContext(FilterContext);
    const navigate = useNavigate();
    const toggleSelected = (index) => {
        setSelected(prev => prev === index ? -1 : index);
    }

    // document.documentElement.classList.add("dark");




    const handleChange = (key, value) => {
        setPrev((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const handleFilter = () => {
        navigate("/listings");
    }

    useEffect(() => {
        setFilters(prevs);

    }, [prevs])

    const amount = [
        { value: 500000, label: 'Up to ₹5L' },
        { value: 1000000, label: 'Up to ₹10L' },
        { value: 2000000, label: 'Up to ₹20L' },
        { value: 5000000, label: 'Up to ₹50L' },
        { value: 100000000, label: 'Up to ₹1Cr' }
    ];

    const propType = [
        { value: 'Apartment', label: 'Appartment' },
        { value: 'Villa', label: 'Villa' },
        { value: 'Plot', label: 'Plots' },
        { value: 'All', label: 'All' },
    ]

    return (
        <>

            <div
                className="
    overflow-x-hidden
    overflow-hidden
    flex flex-wrap lg:flex-nowrap
    h-full items-center justify-center
    w-full
    rounded-lg 
    pt-44
    p-8
    relative
    bottom-[100px]
  " style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/premium.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100vw",
                }}
            >

                <div className='content md:py-auto text-center'>
                    <p className='text-[#692234] texct-lg md:text-3xl text-white dark:text-white'>Welcome to Aarvasa</p>
                    <h1 className='text-[#692234] text-5xl lg:text-8xl text-white font-bold mt-4 mb-8 dark:text-white'>Manage your <br></br> property</h1>
                    <p className='text-[#692234] text-white text-sm md:text-lg mt-4 mb-8 dark:text-white'>You will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>

                    <div className='w-auto bg-white dark:bg-transparent flex flex-col mx-2 p-4 group hover:transform md:hover:scale-[1.03] transition-all flex flex-col rounded-lg z-[999] relative'>
                        <div className="searches space-y-4 md:space-y-0 flex items-center gap-2 flex-wrap lg:flex-nowrap">
                            <div className="search_bar w-full flex items-center gap-2 hover:text-[#8C2841]">
                                <MapPin></MapPin>
                                <input type="text" value={filters.city} className='border p-2 rounded-lg w-full outline-none font-semibold' onChange={(e) => handleChange("city", e.target.value)} placeholder='Enter city, locality, project' />
                            </div>
                            <div className="property w-full gap-2 flex items-center hover:text-[#8C2841]">
                                <Home />
                                <Select
                                    options={propType}
                                    value={propType.find(opt => opt.value === filters.propertyType)}
                                    onChange={(selectedOption) => handleChange("propertyType", selectedOption.value)}
                                    className="w-full text-sm font-semibold"
                                    menuPortalTarget={document.body}
                                    placeholder="Property Type"
                                    styles={{
                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            padding: 18,
                                            backgroundColor: state.isSelected ? '#8C2841' : state.isFocused ? '#F3E6EA' : 'white',
                                            color: state.isSelected ? 'white' : '#333',
                                            cursor: 'pointer',

                                        }),
                                        control: (provided) => ({
                                            ...provided,
                                            borderColor: '#ccc',
                                            boxShadow: 'none',
                                            '&:hover': { borderColor: '#8C2841' },
                                            padding: '2px',
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            color: '#333',
                                        }),
                                        menu: (provided) => ({
                                            ...provided,
                                            zIndex: 9999,
                                        }),
                                    }}
                                />

                            </div>
                            <div className="budget w-full flex items-center gap-2 hover:text-[#8C2841]">
                                <IndianRupee />
                                <Select
                                    options={amount}
                                    value={amount.find(v => v.value === filters.budget) || null}
                                    onChange={(e) => handleChange("budget", e.value)}
                                    className="w-full z-[999999] relative text-sm"
                                    menuPortalTarget={document.body}
                                    placeholder="Budget"
                                    styles={{
                                        menuPortal: base => ({ ...base, zIndex: 9999 }),
                                        option: (provided, state) => ({
                                            ...provided,
                                            padding: 12,
                                            color: state.isSelected ? 'white' : '#333', // ✅ visible text
                                            backgroundColor: state.isSelected ? '#8C2841' : 'white',
                                            ':hover': {
                                                backgroundColor: '#F9EAF1',
                                                color: '#8C2841',
                                            },
                                        }),
                                        control: (base, state) => ({
                                            ...base,
                                            borderColor: '#8C2841',
                                            boxShadow: state.isFocused ? '0 0 0 1px #8C2841' : base.boxShadow,
                                            '&:hover': {
                                                borderColor: '#8C2841',
                                            },
                                        }),
                                        singleValue: (provided) => ({
                                            ...provided,
                                            color: '#8C2841',
                                        }),
                                    }}
                                />

                            </div>

                        </div>
                        <button onClick={handleFilter} className='flex w-full items-center justify-center gap-3 p-2 px-4 bg-gradient-to-r from-[#F7A240] to-[#F5C01A] group-hover:transition-all group-hover:transition-delay-[7s]  group-hover:from-[#FFFDF3] font-bold group-hover:text-white group-hover:bg-[#8C2841] rounded-lg mb-4 mt-4' >
                            <Search />
                            Search
                        </button>
                    </div>
                </div>

            </div>

            <div className="bg-red-500 tet-red-500 flex items-center justify-center">

            </div>

        </>
    )
}

export default Premium
