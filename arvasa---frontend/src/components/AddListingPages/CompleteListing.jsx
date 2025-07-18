import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FeatureCounter = ({ value, setValue }) => {
  const increment = () => setValue(prev => prev + 1);
  const decrement = () => setValue(prev => Math.max(0, prev - 1));
  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <button className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-l-lg" onClick={decrement}>
        <FaMinus size={10} />
      </button>
      <span className="w-10 h-8 flex items-center justify-center text-base font-semibold text-[#3D3D3D] border-l border-r border-gray-300">
        {value}
      </span>
      <button className="w-8 h-8 flex items-center justify-center text-gray-700 hover:bg-gray-100 rounded-r-lg" onClick={increment}>
        <FaPlus size={10} />
      </button>
    </div>
  );
};

const CompleteListing = ({ onPrevious, onNext, listingData = {}, setListingData }) => {
  const navigate = useNavigate();

  const [priceType, setPriceType] = useState(listingData.unit || 'Monthly');
  const [sellPrice, setSellPrice] = useState(listingData.price || '');
  const [rentPrice, setRentPrice] = useState(listingData.priceD || '');

  const [bedrooms, setBedrooms] = useState(listingData.bedrooms || 2);
  const [bathrooms, setBathrooms] = useState(listingData.bathrooms || 2);
  const [balcony, setBalcony] = useState(listingData.balcony || 1);
  const [selectedFacilities, setSelectedFacilities] = useState(listingData.facilities || []);

  const [propertyTitle, setPropertyTitle] = useState(listingData.propertyTitle || '');
  const [shortDesc, setShortDesc] = useState(listingData.shortDescription || '');
  const [detailedDescription, setDetailedDescription] = useState(listingData.detailedDescription || '');
  const [plotSize, setPlotSize] = useState(listingData.plotSize || '');

  const [carpetArea, setCarpetArea] = useState(listingData.carpetArea || '');
  // const [carpetAreaUnit, setCarpetAreaUnit] = useState(listingData.carpetAreaUnit || 'sq.ft');
  const [floor, setFloor] = useState(listingData.floor || '');
  const [facing, setFacing] = useState(listingData.facing || '');
  const [ownershipType, setOwnershipType] = useState(listingData.ownershipType || '');
  const [furnished, setFurnished] = useState(listingData.furnished || '');
  const [price, setPrice] = useState(0);
  const [totalPerSq, setTotalPerSq] = useState(0);

  const facilities = ['Parking Lot', 'Pet Allowed', 'Garden', 'Park'];
  const isPlot = listingData.propertyCategory === 'Plot';

  const handleFacilityToggle = (facility) => {
    setSelectedFacilities(prev =>
      prev.includes(facility) ? prev.filter(f => f !== facility) : [...prev, facility]
    );
  };

  useEffect(() => {
    const numericPrice = parseFloat(sellPrice.toString().replace(/[^0-9.]/g, ''));
    const numericPlot = parseFloat(plotSize.toString().replace(/[^0-9.]/g, ''));
    const total = numericPrice * numericPlot;
    setTotalPerSq(isNaN(total) ? 0 : total);
  }, [sellPrice, plotSize]);

  const handlePublish = () => {
    const numericSellPrice = parseFloat(sellPrice.toString().replace(/[^0-9.]/g, ''));
    const numericRentPrice = parseFloat(rentPrice.toString().replace(/[^0-9.]/g, ''));

    const updatedData = {
      ...listingData,
      unit: priceType,
      price: numericSellPrice || 0,
      priceD: numericRentPrice || 0,
      propertyTitle,
      shortDescription: shortDesc,
      detailedDescription,
      carpetArea,
      totalPerSq: totalPerSq,
      floor,
      facing,
      ownershipType,
      furnished,
      ...(isPlot
        ? { plotSize }
        : {
          bedrooms,
          bathrooms,
          balcony,
          facilities: selectedFacilities,
        }),
    };

    setListingData(updatedData);
    onNext(updatedData);
  };

  return (
    <div className="min-h-screen bg-[#fffcf2] flex items-center justify-center p-4 font-poppins">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-xl md:max-w-4xl relative border border-gray-300">
        <button onClick={() => navigate('/listings')} className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700">
          <IoClose size={24} />
        </button>

        <div className="w-3/4 md:w-1/2 h-1.5 bg-gray-200 rounded-full mb-6 mx-auto">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '100%' }}></div>
        </div>

        <h1 className="text-xl md:text-3xl font-bold text-center text-[#3D3D3D] mb-6">Almost Finish, Complete the Listing</h1>

        <div className="mb-6 gap-4 w-full max-w-xl mx-auto">
          <p className="text-sm font-semibold text-[#3D3D3D] mb-1">{listingData.listingType} Price</p>
          <div className="relative">
            <input type="text" placeholder="₹ 1800000" value={sellPrice} onChange={e => setSellPrice(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm pr-10 outline-none" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D]">₹</span>
          </div>
        </div>

        <div className="mb-6 w-full max-w-xl mx-auto">
          <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Property Title</p>
          <input type="text" placeholder="Title of the Property" value={propertyTitle} onChange={e => setPropertyTitle(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none" />
        </div>

        <div className="mb-6 w-full max-w-xl mx-auto">
          <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Short Description</p>
          <input type="text" placeholder="Brief summary" value={shortDesc} onChange={e => setShortDesc(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none" />
        </div>

        <div className="mb-6 w-full max-w-xl mx-auto">
          <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Detailed Description</p>
          <textarea placeholder="More details..." value={detailedDescription} onChange={e => setDetailedDescription(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none h-24 resize-none" />
        </div>

        {isPlot ? (
          <>
            {/* Plot-specific fields */}
            <div className="mb-6 w-full max-w-xl mx-auto">
              <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Plot size (sq.ft)</p>
              <input type="text" placeholder="Plot size in Sq. Ft." value={carpetArea} onChange={e => setCarpetArea(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none" />
            </div>

            <div className="mb-6 gap-4 w-full max-w-xl mx-auto">
              <p className="text-sm font-semibold text-[#3D3D3D] mb-1">{listingData.listingType} Price</p>
              <div className="relative">
                <input type="text" placeholder="₹ 1800000 (price per sq.ft)" value={sellPrice} onChange={e => setSellPrice(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm pr-10 outline-none" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#3D3D3D]">₹</span>
              </div>
            </div>

            <div className="mb-6 w-full max-w-xl mx-auto">
              <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Total cost for the plot</p>
              <input type="text" placeholder="Estimated cost." value={totalPerSq} readOnly className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none" />
            </div>
          </>
        ) : (
          <>
            {/* Apartment-specific fields */}
            <div className="mb-6 flex gap-4 justify-between max-w-xl mx-auto">
              <div className="flex flex-col items-start w-1/3">
                <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Bedrooms</p>
                <FeatureCounter value={bedrooms} setValue={setBedrooms} />
              </div>
              <div className="flex flex-col items-start w-1/3">
                <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Bathrooms</p>
                <FeatureCounter value={bathrooms} setValue={setBathrooms} />
              </div>
              <div className="flex flex-col items-start w-1/3">
                <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Balconies</p>
                <FeatureCounter value={balcony} setValue={setBalcony} />
              </div>
            </div>

            <div className="mb-6 flex gap-4 max-w-xl mx-auto">
              <div className="w-full">
                <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Carpet Area</p>
                <input type="text" placeholder="e.g., 1100" value={plotSize} onChange={e => setPlotSize(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none" />
              </div>
              {/* <div className="w-1/2">
                <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Unit</p>
                <select value={carpetAreaUnit} onChange={e => setCarpetAreaUnit(e.target.value)} className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none">
                  <option value="sq.ft">Sq.ft</option>
                  <option value="sq.m">Sq.m</option>
                </select>
              </div> */}
            </div>

            <div className="mb-6 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-[#3D3D3D] mb-1">Facilities</p>
              <div className="flex gap-3 flex-wrap">
                {facilities.map((facility, i) => (
                  <button
                    key={i}
                    onClick={() => handleFacilityToggle(facility)}
                    className={`px-4 py-2 rounded-full border text-sm ${selectedFacilities.includes(facility)
                        ? 'bg-[#6D1E3D] text-white'
                        : 'bg-white text-[#3D3D3D] border-gray-300'
                      }`}
                  >
                    {facility}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}


        <div className="flex flex-col sm:flex-row justify-center px-4 gap-4">
          <button className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-300 rounded-lg text-base font-semibold text-[#5A5A59] hover:bg-gray-100" onClick={onPrevious}>Previous</button>
          <button className="w-full sm:w-auto px-6 py-2 bg-[#6D1E3D] text-white rounded-lg text-base font-semibold hover:bg-[#5a1832]" onClick={handlePublish}>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default CompleteListing;