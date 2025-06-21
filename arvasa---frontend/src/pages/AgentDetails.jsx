import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import NavbarRaw from '../components/NavbarRaw';
import Page from '../components/listing/Page';
import Footer from '../components/Footer';

const tabs = ['For Sale', 'For Rent', 'Sold', 'Rented'];

const dummyProperties = Array.from({ length: 6 }, (_, i) => ({
  address: '142 East 49th Street, 2C',
  location: 'Turtle Bay',
  specs: '2 BA | 2 BD | 1 HB',
  price: '$ 7,395',
  rating: 4.9,
}));


const dummyTableData = Array(6).fill({
  address: '515 west 18th street, 1204',
  neighborhood: 'Chelsea/Hudson Yards',
  price: '',
  beds: 4,
  baths: 4,
  sqft: 2536,
  type: 'Condo',
});

export default function AgentDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(1);
  const [seeMore, setSeeMore] = useState(false);

  return (
  <>
   <div className=''>
    <Page></Page>
     <div className="mx-auto p-5">
      <div className="flex justify-center flex-col md:flex-row gap-12 mb-20">
        <img src="/src/assets/image.png" className="w-[347px] h-[417px] object-cover" />
        <div>
          <h2 className="text-4xl font-semibold font-['Poppins']">Sam Altman</h2>
          <p className="mb-4 text-md pt-2 font-['Poppins']">Licensed RE Salesperson</p>
          <p className="mb-4 pt-10 max-w-[800px]">I am a native New Yorker as well as a proud husband, father and sports enthusiast. After graduating Magna Cum Laude from the Honors Program of Iona College with a degree in Finance, I spent 15 years in the hospitality industry in South Florida and NYC. During this time, I held a variety of management positions serving clientele at some of the world's best known luxury brands.</p>
          {seeMore && (
            <p className='mb-4 max-w-[800px]'>These roles not only sharpened my leadership, operations, and customer service skills, but also deepened my understanding of building lasting relationships and creating memorable guest experiences. My ability to lead diverse teams, adapt quickly in fast-paced environments, and consistently exceed expectations became a hallmark of my professional journey. Whether overseeing day-to-day operations or orchestrating high-profile events, I developed a keen eye for detail, a deep appreciation for excellence, and a results-driven mindset. Today, I carry those values into every new challenge I take on—always striving to lead with integrity, deliver value, and make a meaningful impact.</p>
          )}
          <button className="border rounded-[14px] text-md px-5 py-2 mb-4 hover:bg-gray-100 transition" onClick={() => setSeeMore(!seeMore)}>{seeMore ? 'See less' : 'See more'}</button>
          <div className="flex flex-wrap justify-between pt-5 md:space-x-8 space-y-9">
            <div className="flex flex-col gap-2">
                <h3 className="text-[19px] font-medium text-center">EXPERIENCE</h3>
                <p>20 years in Real estate</p>
                <p>25 years in Coaching</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-[19px] font-medium pb-2">EDUCATION</h3>
                <p>Yale University of 1996</p>
            </div>
            <div className="flex flex-col items-center">
                <h3 className="text-[19px] font-medium pb-2">LANGUAGES</h3>
                <p>English</p>
            </div>
            </div>
        </div>
      </div>

      <div className="flex justify-around border-b pb-5 mb-6">
        {tabs.map((tab, i) => (
          <button key={i}
            onClick={() => { setActiveTab(i); setVisible(1); }}
            className={`pb-1 border-b-2 font-['Poppins'] ${activeTab === i ? 'border-pink-900 font-semibold' : 'border-transparent'}`}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab < 2 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-[150px] justify-items-center">
          {dummyProperties.slice(0, visible * 3).map((prop, i) => (
            <div key={i} className="w-[329px] cursor-pointer bg-white rounded-[20px] shadow-md justify-around">
              <img src='/house-agent.png' alt={prop.address} className="rounded-[20px] w-[329px] h-[299px] object-cover mb-3" />
              <div className="flex justify-between pb-1 px-5">
                  <p className="text-xs text-gray-500">{prop.location}</p>
                  <p className="text-xs">{prop.rating} ★</p>
              </div>
              <h4 className="font-medium text-lg pb-1 px-5">{prop.address}</h4>
              <p className="text-sm pb-1 px-5">{prop.specs}</p>
              <p className="text-lg font-medium px-5 pb-2">{prop.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="overflow-x-auto">
            <table className="w-full table-auto border-separate border-spacing-y-2 mb-6">
                <thead className="bg-orange-100 text-sm text-gray-700">
                <tr>
                    <th className="text-center px-4 py-2">Address</th>
                    <th className="text-center px-4 py-2">Neighborhood</th>
                    <th className="text-center px-4 py-2">Price</th>
                    <th className="text-center px-4 py-2">Beds</th>
                    <th className="text-center px-4 py-2">Baths</th>
                    <th className="text-center px-4 py-2">Sq Ft</th>
                    <th className="text-center px-4 py-2">Property Type</th>
                </tr>
                </thead>
                <tbody>
                {dummyTableData.slice(0, visible * 3).map((item, i) => (
                    <tr key={i} className="bg-range-50 text-sm text-gray-800 shadow-sm rounded">
                    <td className="px-4 py-3 text-center">{item.address}</td>
                    <td className="text-center px-4 py-3">{item.neighborhood}</td>
                    <td className="text-center px-4 py-3">{item.price || '—'}</td>
                    <td className="text-center px-4 py-3">{item.beds}</td>
                    <td className="text-center px-4 py-3">{item.baths}</td>
                    <td className="text-center px-4 py-3">{item.sqft.toLocaleString()}</td>
                    <td className="text-center px-4 py-3">{item.type}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

      )}

      <div className="text-center mt-4">
        <button onClick={() => setVisible(v => v + 1)} className="border px-6 py-2 rounded-full hover:bg-gray-100 transition">
          See more
        </button>
      </div>
    </div>
   </div>

  </>
  );
}
