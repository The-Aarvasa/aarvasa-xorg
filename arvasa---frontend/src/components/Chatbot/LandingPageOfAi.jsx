import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { HiArrowUpRight } from "react-icons/hi2";
import NavbarChatbot from './NavbarChatbot';

const LandingPageofAi = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const sidebarRef = useRef();

  const handleSearch = () => {
    if (searchQuery.trim() === '') return;
    setRecentSearches(prev => [searchQuery, ...prev]);
    setSearchQuery('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle click outside to close sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#B96A85] to-[#0C0C0C] pb-8 text-white font-[poppins] relative">
      {/* Navbar */}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#6D1E3DB0] to-[#121212] p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 shadow-lg`}
      >
        <h2 className="text-lg font-semibold mb-4 mt-36">Recent Searches</h2>
        <ul className="space-y-2">
          {recentSearches.length === 0 && <li className="text-sm text-gray-400">No recent searches</li>}
          {recentSearches.map((item, index) => (
            <li key={index} className="text-sm text-white bg-[#2c2c2c] p-2 rounded">{item}</li>
          ))}
        </ul>
      </div>

      {/* Page Content */}
      <div className="px-6 pt-24 md:pt-28">
        {/* Top right flex container */}
        <div className="flex justify-between items-center mb-4 gap-10 p-4">
          {/* Hamburger Icon */}
          <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <FaBars className="text-white text-2xl relative" />
          </button>

          {/* Profile Icon */}
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yCGvgijDKz/nxgk1imk_expires_30_days.png"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>

        {/* Greeting */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold">
            <span className="text-[#FF74AC]">Good Morning,</span> Steven
          </h2>
          <h1 className="text-3xl font-bold mt-2">What would you like to know?</h1>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center w-full max-w-xl bg-white/20 px-4 py-3 rounded-xl">
            <FaSearch
              className="text-white mr-3 cursor-pointer"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent outline-none focus:outline-none focus:ring-0 text-white placeholder:text-white w-full"
            />
          </div>
        </div>

        {/* AI Option Cards */}
        <div className="flex justify-center flex-wrap gap-6">
          <div className="bg-[#561B33] p-5 rounded-2xl w-56 bg-opacity-50">
            <h3 className="text-white font-bold mb-16">Engage in conversation with AI.</h3>
            <div className="flex justify-between items-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yCGvgijDKz/l7rh1bry_expires_30_days.png"
                className="w-6 h-6"
                alt="AI Icon"
              />
              <HiArrowUpRight className="text-white text-xl" />
            </div>
          </div>

          <div className="bg-[#40404099] p-5 rounded-2xl w-56 bg-opacity-50">
            <h3 className="text-white font-bold mb-16">Content-Based Filtering</h3>
            <div className="flex justify-between items-center">
              <img
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yCGvgijDKz/7pd2nbkp_expires_30_days.png"
                className="w-6 h-6"
                alt="Filter Icon"
              />
              <HiArrowUpRight className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageofAi;
