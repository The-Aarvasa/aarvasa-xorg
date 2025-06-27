import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilterBar from '../components/Agent/FilterBar';
import NavbarRaw from '../components/NavbarRaw';
import Page from '../components/listing/Page';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const dummyAgents = Array.from({ length: 12 }, (_, i) => ({
  name: 'Sam Altman',
  priceRange: '$12K - $3.9M',
  sales: 382,
  rating: 4.9,
  image: `https://randomuser.me/api/portraits/men/${(i % 100)}.jpg`,
}));

export function Agents() {
  const [visible, setVisible] = useState(4);
  const navigate = useNavigate();

  return (
    <>
   <div className='bg-orange-50 pt-[90px] pb-[40px]'>
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

      <div className="flex items-center justify-center flex-wrap gap-12 mt-20 px-2">
        {dummyAgents.slice(0, visible).map((agent, i) => (
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

      {visible < dummyAgents.length && (
        <div className="text-center">
          <button onClick={() => setVisible((v) => v + 4)} className="border px-6 py-2 my-5 rounded-[14px] font-['Poppins'] hover:bg-gray-100 transition">
            See more
          </button>
        </div>
      )}
      </div>
    </div>
    </>
  );
}

