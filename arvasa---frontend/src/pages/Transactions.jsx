import React, { useState } from 'react';
import { Prev } from '../components/icons/Prev';
import { Next } from '../components/icons/Next';
import { Download } from '../components/icons/Download';

const Transactions = () => {
  const allTransactions = [
    { date: '15 June, 205', location: 'xxx', type: 'APARTMENT', price: '₹ 1.2 khs', area: '4,000' },
    { date: '15 June, 205', location: 'xxx', type: 'VILLA', price: '₹ 62', area: '120' },
    { date: '15 June, 2025', location: 'xxx', type: 'APARTMENT', price: '₹ 621 kh', area: '1,800' },
    { date: '05 June, 2025', location: 'xxx', type: 'VILLA', price: '₹ 900', area: '4,000' },
    { date: '01 June, 2025', location: 'xxx', type: 'APARTMENT', price: '₹ 1.5 khs', area: '3,500' },
    { date: '01 May, 2025', location: 'xxx', type: 'VILLA', price: '₹ 800', area: '2,000' },
    { date: '15 April, 2025', location: 'xxx', type: 'APARTMENT', price: '₹ 700 kh', area: '1,500' },
    { date: '10 April, 2025', location: 'xxx', type: 'VILLA', price: '₹ 1.1 khs', area: '4,500' },
    { date: '05 April, 2025', location: 'xxx', type: 'APARTMENT', price: '₹ 950', area: '2,800' },
    { date: '01 April, 2025', location: 'xxx', type: 'VILLA', price: '₹ 600', area: '3,000' },
  ];

  const entriesPerPage = 4;
  const totalPages = Math.ceil(allTransactions.length / entriesPerPage); 
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * entriesPerPage;
  const currentTransactions = allTransactions.slice(startIndex, startIndex + entriesPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto bg-white rounded-3xl shadow-lg pb-[20px] border-4 border-gray-200 mt-4">
      <div className="flex justify-center gap-4 mb-4 p-5 -pb-5">
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">Rent</button>
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">Residential</button>
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">Price</button>
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">Recent</button>
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">Area</button>
        <button className="px-4 py-2 border border-neutral-400 rounded-xl text-neutral-600 hover:bg-gray-100">All Filters</button>
        <button className="px-4 py-2 text-pink-900 hover:underline">Reset All Filters</button>
      </div>

      <div className="bg-[#FFFCF2] rounded-3xl shadow-lg p-10 mx-10 -mt-4">

        <div className="text-lg mb-4 flex">
        	<span className="mr-2 text-3xl text-gray-500">⟳</span>
					<h2 className="text-xl mt-1.5">Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">Transaction Date</th>
                <th className="p-2">Location</th>
                <th className="p-2">Type</th>
                <th className="p-2">Price</th>
                <th className="p-2">Area (sq.ft)</th>
                <th className="p-1"><Download color="text-black" /></th>
              </tr>
            </thead>
            <tbody>
              {currentTransactions.map((transaction, index) => (
                <tr key={index} className="border-b hover:bg-yellow-100">
                  <td className="p-2 ">{transaction.date}</td>
                  <td className="p-2">{transaction.location}</td>
                  <td className="p-2">{transaction.type}</td>
                  <td className="p-2">{transaction.price}</td>
                  <td className="p-2">{transaction.area}</td>
                  <td className="p-1">
                    <Download color="text-gray-300 hover:text-gray-600" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600">Page {currentPage} of {totalPages}</span>
          <div className="flex gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`${
                currentPage === 1 ? 'text-gray-400 flex items-center cursor-not-allowed' : 'text-gray-600 flex items-center hover:underline'
              }`}
            >
			<Prev color={`${currentPage === 1 ? 'text-gray-400' : 'text-gray-600'}`} />
            Prev
            </button>
			    <div>|</div>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`${
                currentPage === totalPages ? 'text-gray-400 flex items-center cursor-not-allowed' : 'text-gray-600 flex items-center hover:underline'
              }`}
            >
            Next
			<Next color={`${currentPage === totalPages ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;