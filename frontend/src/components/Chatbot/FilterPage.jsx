import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import NavbarChatbot from './NavbarChatbot';


const FilterPage = () => {
    const cities = ['Chennai', 'Pune', 'Mumbai', 'Bangalore', 'Hyderabad'];
    const types = ['Flats', 'PG', 'Villa', 'Apartments', 'Builder Floor'];
    const bedrooms = ['1BHK', '2BHK', '3BHK', '4BHK'];

    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedBedrooms, setSelectedBedrooms] = useState([]);
    const [budget, setBudget] = useState(35);

    const toggleSelection = (value, selected, setSelected) => {
        if (selected.includes(value)) {
            setSelected(selected.filter(item => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    const handleApplyFilters = () => {
        const filters = {
            cities: selectedCities,
            types: selectedTypes,
            bedrooms: selectedBedrooms,
            budget: `${budget}L`
        };
        console.log('Applied Filters:', filters);
    };

    return (
        <div className="h-screen  bg-gradient-to-b from-[#B96A85] to-[#0C0C0C] text-white font-[poppins] relative">
            <NavbarChatbot />
            <div className="pt-24 h-full overflow-y-auto px-4 sm:px-8 md:px-16 pb-8">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">Filters</h1>
                    <p className="text-center mb-8 text-sm sm:text-base">Start the Conversation</p>

                    {/* Cities */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">Cities</h3>
                        <div className="flex flex-wrap gap-3">
                            {cities.map((city) => (
                                <button
                                    key={city}
                                    onClick={() => toggleSelection(city, selectedCities, setSelectedCities)}
                                    className={`px-4 py-2 rounded-full transition ${selectedCities.includes(city) ? 'bg-[#A9446E]' : 'bg-[#533641]'}`}
                                >
                                    {city}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Types */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">Types</h3>
                        <div className="flex flex-wrap gap-3">
                            {types.map((type) => (
                                <button
                                    key={type}
                                    onClick={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
                                    className={`px-4 py-2 rounded-full transition ${selectedTypes.includes(type) ? 'bg-[#A9446E]' : 'bg-[#533641]'}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Bedrooms */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">No of Bedrooms</h3>
                        <div className="flex flex-wrap gap-3">
                            {bedrooms.map((bed) => (
                                <button
                                    key={bed}
                                    onClick={() => toggleSelection(bed, selectedBedrooms, setSelectedBedrooms)}
                                    className={`px-4 py-2 rounded-full transition ${selectedBedrooms.includes(bed) ? 'bg-[#A9446E]' : 'bg-[#533641]'}`}
                                >
                                    {bed}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Budget */}
                    <div className="mb-8">
                        <h3 className="font-semibold mb-3 text-lg">Budget</h3>
                        <div className="flex items-center justify-between mb-4 text-sm sm:text-base">
                            <span>5L</span>
                            <span>{budget}L</span>
                            <span>80L</span>
                        </div>
                        <div className="px-2 sm:px-6">
                            <Slider
                                min={5}
                                max={80}
                                value={budget}
                                onChange={setBudget}

                                styles={{
                                    track: { backgroundColor: '#6D1E3D', height: 8 },
                                    handle: { borderColor: '#A9446E', height: 24, width: 24, marginTop: -8 },
                                    rail: { backgroundColor: '#ccc', height: 8 },
                                }}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-[#3E3739] bg-opacity-75 px-6 py-3 rounded-full text-sm sm:text-base">
                            Cancel
                        </button>
                        <button
                            onClick={handleApplyFilters}
                            className="bg-[#6D1E3D] bg-opacity-75 px-6 py-3 rounded-full text-sm sm:text-base"
                        >
                            Apply Filters
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;
