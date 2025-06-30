import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/Agent/FilterBar';
import NavbarRaw from '../components/NavbarRaw';
import Page from '../components/listing/Page';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const dummyAgents = [
  {
    name: 'Alice Johnson',
    priceRange: '₹20K - ₹2.5M',
    sales: 278,
    rating: 4.7,
    image: `https://plus.unsplash.com/premium_photo-1669740215572-5e49b2d7eee0?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000`,
  },
  {
    name: 'Aarav Sharma',
    priceRange: '₹35K - ₹4.2M',
    sales: 412,
    rating: 4.8,
    image: `https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000`,
  },
  {
    name: 'Priya Verma',
    priceRange: '₹15K - ₹1.8M',
    sales: 199,
    rating: 4.6,
    image: `https://plus.unsplash.com/premium_photo-1687485794296-68f0d6e934bb?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000`,
  },
  {
    name: 'Vivaan Mehta',
    priceRange: '₹50K - ₹5.1M',
    sales: 523,
    rating: 4.9,
    image: `https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?fm=jpg&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&ixlib=rb-4.1.0&q=60&w=3000`,
  }
];


export function Agents() {;
  const navigate = useNavigate();

  return (
    <>
   <div className='bg-orange-50 pt-[90px] pb-[100px]'>
    <Page></Page>


      <div className="mx-auto md:px-[30px]">
      <section className="rounded-xl overflow-hidden mb-12">
        <div className="h-[800px] bg-cover bg-center bg-[url('/agentPage.png')] flex flex-col justify-center items-center text-white text-center">
          <h2 className="text-2xl md:text-4xl font-['Poppins'] font-semibold mb-2 -mt-5">MEET OUR AGENTS</h2>
          <p className="text-4xl md:text-[64px] font-['Poppins'] leading-[80px] font-semibold py-10">Real People. Real Homes.<br />Real Agents.</p>
          <FilterBar />
        </div>
      </section>

      <div className="text-center mb-8 mt-20">
        <h2 className="text-2xl md:text-4xl font-['Poppins'] font-semibold">MEET OUR AGENTS</h2>
        <p className="text-gray-600 font-['Poppins'] pt-5 text-md md:text-2xl">Work with a local expert backed by top brokerages to smoothly navigate your home <br /> journey from start to finish</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-[100px] justify-items-center">
        {dummyAgents.map((agent, i) => (
          <div key={i} onClick={() => navigate(`/agents/${i}`)} className="cursor-pointer w-[279px] bg-white rounded-[20px] shadow-md hover:shadow-2xl transition">
            <img src={agent.image} className="rounded-[20px] h-[323px] w-[279px] object-cover mb-4" />
            <div className='flex justify-between items-center px-5 pb-3'>
              <h3 className="font-semibold font-['Poppins'] text-base">{agent.name}</h3>
              <p className="text-xs font-semibold text-orange-500">{agent.rating} ★</p>
            </div>
            <p className="text-sm px-5 pb-1 font-['Poppins']"><b>{agent.priceRange}</b> team price range</p>
            <p className="text-sm px-5 pb-3 font-['Poppins']"><b>{agent.sales}</b> sales last 12 months</p>
          </div>
        ))}
      </div>

      </div>
    </div>
    </>
  );
}

