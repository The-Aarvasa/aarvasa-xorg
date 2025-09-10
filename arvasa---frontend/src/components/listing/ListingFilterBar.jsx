import React, { useContext, useState, useEffect } from 'react';
import { FilterContext } from '../../context/FilterProvider';
import { FaMapMarkerAlt, FaHome, FaRupeeSign, FaAngleDown } from 'react-icons/fa';
import { MapPin, Search, Home, IndianRupee, Earth, KeyRound, Map, BedDouble, Building2, UploadCloud } from 'lucide-react'
import Select from 'react-select';

const ListingFilterBar = () => {
  const { filters, setFilters } = useContext(FilterContext);
  const buttons = [
    {
      id: 1,
      title: "Rent",
      value: "Rent",
      fn: () => {
        onFilterChange('transactionType', 'Rent')
        setCurr(1);
      }
    },
    {
      id: 2,
      title: "Buy",
      value: "New Property",
      fn: () => {
        setCurr(2)
        onFilterChange('transactionType', 'New Property')
      }
    },
    {
      id: 3,
      title: "All",
      fn: () => {
        setCurr(3)
        onFilterChange('transactionType', '')
      }
    }
  ]
  const [curr, setCurr] = useState(-1);
  const onFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

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

  const onReset = () => {
    setFilters({
      city: '',
      propertyType: 'All',
      budget: '',
      rent: '',
      buy: ''
    });
  };

  const [isDark, setIsDark] = useState(() => {
    if (typeof document === 'undefined') return false;
    return document.documentElement.classList.contains('dark');
  });

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(root.classList.contains('dark'));
    });
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex bg-white dark:bg-[#1a1a1a] dark:text-white focus-within:scale-[0.9] transition-all shadow-lg rounded-lg p-4 flex-col items-center gap-4 w-[90%] md:w-[60%] mx-auto font-poppins">
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
        <div className="flex items-center border border-gray-300 dark:border-white/20 rounded-lg p-2 w-full sm:w-1/3 bg-white dark:bg-[#2a2a2a]">
          <FaMapMarkerAlt className="mr-2 text-gray-500 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Enter City, Locality"
            value={filters.city}
            onChange={(e) => onFilterChange('city', e.target.value)}
            className="w-64 outline-none bg-transparent text-[#5A5A59] dark:text-white placeholder-gray-400"
          />
        </div>
        <div className="property w-full gap-2 flex items-center hover:text-[#8C2841] dark:hover:text-[#FBBB63]">
          <Earth />
          <Select
            options={propType}
            value={propType.find(opt => opt.value === filters.propertyType)}
            onChange={(selectedOption) => onFilterChange("propertyType", selectedOption.value)}
            className="w-full text-sm font-semibold "
            menuPortalTarget={document.body}
            styles={{
              menuPortal: base => ({ ...base, zIndex: 9999 }),
              option: (provided, state) => ({
                ...provided,
                padding: 18,
                backgroundColor: isDark
                  ? (state.isSelected ? '#8C2841' : state.isFocused ? '#3a3a3a' : '#1f1f1f')
                  : (state.isSelected ? '#8C2841' : state.isFocused ? '#F3E6EA' : 'white'),
                color: isDark
                  ? (state.isSelected ? 'white' : 'white')
                  : (state.isSelected ? 'white' : '#333'),
                cursor: 'pointer',

              }),
              control: (provided) => ({
                ...provided,
                backgroundColor: isDark ? '#2a2a2a' : 'white',
                borderColor: isDark ? '#555' : '#ccc',
                boxShadow: 'none',
                '&:hover': { borderColor: '#8C2841' },
                padding: '2px',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: isDark ? 'white' : '#333',
              }),
              menu: (provided) => ({
                ...provided,
                zIndex: 9999,
                backgroundColor: isDark ? '#1f1f1f' : 'white',
              }),
            }}
          />

        </div>
        <div className="budget w-full flex items-center gap-2 hover:text-[#8C2841] dark:hover:text-[#FBBB63]">
          <IndianRupee></IndianRupee>
          <Select
            options={amount}
            value={amount.find(v => v.value === filters.budget) || null}
            onChange={(e) => onFilterChange("budget", e.value)}
            className="w-full z-[9999] relative text-sm"
            menuPortalTarget={document.body}
            styles={{
              menuPortal: base => ({ ...base, zIndex: 9999 }),
              option: (provided, state) => ({
                ...provided,
                padding: 12,
                color: isDark ? (state.isSelected ? 'white' : 'white') : (state.isSelected ? 'white' : '#333'),
                backgroundColor: isDark ? (state.isSelected ? '#8C2841' : '#1f1f1f') : (state.isSelected ? '#8C2841' : 'white'),
                ':hover': {
                  backgroundColor: isDark ? '#3a3a3a' : '#F9EAF1',
                  color: isDark ? 'white' : '#8C2841',
                },
              }),
              control: (base, state) => ({
                ...base,
                backgroundColor: isDark ? '#2a2a2a' : 'white',
                borderColor: isDark ? '#555' : '#8C2841',
                boxShadow: state.isFocused ? '0 0 0 1px #8C2841' : base.boxShadow,
                '&:hover': {
                  borderColor: '#8C2841',
                },
              }),
              singleValue: (provided) => ({
                ...provided,
                color: isDark ? 'white' : '#8C2841',
              }),
            }}
          />

        </div>
      </div>

      <div className="w-full flex flex-wrap justify-center items-center gap-3">
        {buttons.map((currElem, index) => {
          return (
            <button key={index} onClick={currElem.fn
            } className={`px-4 py-2 border border-[#949494] dark:border-white/20 rounded-xl text-[#5A5A59] dark:text-white ${filters.transactionType === currElem.value || propType === currElem.value ? 'bg-[#F5D5E2] dark:bg-[#333333]' : ''}`}>{currElem.title}</button>
          )
        })}
        <button onClick={onReset} className="px-4 py-2 text-[#6D1E3D] dark:text-[#FBBB63] font-semibold hover:text-[#5a1832] dark:hover:text-[#ffd08d]">Reset All Filters</button>
      </div>
    </div>
  );
};

export default ListingFilterBar;
