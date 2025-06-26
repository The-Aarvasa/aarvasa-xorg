import React, { useState, useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';

const Area = () => {
  const [states] = useState(["Tamil Nadu", "Karnataka", "Maharashtra"]);
  const [fromUnit, setFromUnit] = useState("sqft");
  const [toUnit, setToUnit] = useState("sqm");
  const [area, setArea] = useState(0);
  const [converted, setConverted] = useState(0);

  const conversionRates = {
    sqft: 1,
    sqm: 10.7639,
    acre: 43560,
    hectare: 107639,
  };

  const handleConvert = () => {
    if (area > 0 && fromUnit !== toUnit) {
      // Convert from selected unit to sqft, then to target unit
      const inSqft = area * conversionRates[fromUnit];
      const result = inSqft / conversionRates[toUnit];
      setConverted(result);
    } else {
      setConverted(area);
    }
  };

  useEffect(() => {
    handleConvert();
  }, [area, fromUnit, toUnit]);

  return (
    <div className='mt-3 flex flex-col gap-9 w-full md:w-[50%]'>
      <div className='flex items-center flex-col gap-8 w-[98%] md:w-full'>
        <h1 className='text-xl md:text-4xl capitalize font-semibold'>Convert Area into Units</h1>

        <div className="input_bar w-full">
          <label htmlFor="">Select the State</label>
          <select className='bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'>
            {states.map((state, i) => (
              <option key={i} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="input_bar w-full">
          <label htmlFor="">Enter Area</label>
          <input
            type="number"
            placeholder="Enter area value"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className='bg-gray-100 p-2 mt-2 w-full rounded-md border border-[#6C1E3C]'
          />
        </div>

        <div className="input_bar w-full">
          <label htmlFor="">Convert From</label>
          <select
            value={fromUnit}
            onChange={(e) => setFromUnit(e.target.value)}
            className='bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'
          >
            <option value="sqft">Sq.ft</option>
            <option value="sqm">Sq.m</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
          </select>
        </div>

        <div className="input_bar w-full">
          <label htmlFor="">Convert To</label>
          <select
            value={toUnit}
            onChange={(e) => setToUnit(e.target.value)}
            className='bg-gray-200 border border-4 border-[#6C1E3C] px-2 rounded-md p-2 w-full mt-2'
          >
            <option value="sqft">Sq.ft</option>
            <option value="sqm">Sq.m</option>
            <option value="acre">Acre</option>
            <option value="hectare">Hectare</option>
          </select>
        </div>

        <h1 className='text-2xl font-semibold'>Converted Units*</h1>
        <div className='flex items-center gap-4'>
          <h1 className='text-xl'>
            {area} {fromUnit}
          </h1>
          <ArrowRightLeft />
          <h1 className='text-xl'>
            {converted.toFixed(4)} {toUnit}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Area;
