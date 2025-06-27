import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-5 bg-white/10 border border-white/30 backdrop-blur-md rounded-[22px] max-w-5xl mx-auto">
      <button className="px-4 py-2 w-full rounded-[12px] md:w-[125px] bg-white-300 border border-white text-white whitespace-nowrap hover:bg-white/20 transition">
        Agents
      </button>

      <select className="px-4 py-2 rounded-[12px] w-full md:w-[203px] border border-white text-white bg-transparent focus:outline-none pr-8">
        <option className="text-black">Buy/Residential</option>
        <option className="text-black">Sell/Commercial</option>
      </select>

      <input
        type="text"
        placeholder="Agent Name"
        className="px-4 py-2 w-full md:w-fit rounded-[12px] border border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
      />

      <div className="relative w-full md:w-fit">
        <FaMapMarkerAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-white opacity-70" />
        <input
          type="text"
          placeholder="Enter Location"
          className="pl-10 pr-4 py-2 w-full rounded-[12px] md:w-[270px] border border-white bg-transparent text-white placeholder-white/70 focus:outline-none"
        />
      </div>

      <button className="px-6 py-2 w-full md:w-fit bg-gradient-to-r from-[#FFE998] to-[#915F26] text-rose-900 font-semibold rounded-[12px] hover:opacity-90 transition">
        Find
      </button>
    </div>
  );
}
