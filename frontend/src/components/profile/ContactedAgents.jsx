import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal, User } from "lucide-react";

const filters = ["Rent", "Recent", "Residential"];
const dummyAgents = [
    { id: 1, name: "Azgar Roger" },
    { id: 2, name: "Azgar" },
    { id: 3, name: "Roger" },
];

// --------------------- Agent Search Bar ---------------------
const AgentSearchBar = ({ searchTerm, setSearchTerm }) => (
    <div className="flex flex-col sm:flex-row items-center w-full max-w-md bg-[#FADC64] rounded-2xl px-4 py-2 shadow-inner">
        <div className="flex items-center w-full">
            <User className="text-black w-5 h-5" />
            <input
                type="text"
                placeholder="Enter agent name"
                className="bg-transparent flex-1 px-3 text-sm focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
        <button className="whitespace-nowrap mt-2 sm:mt-0 sm:ml-3 bg-[#F5BA22] hover:brightness-95 active:scale-95 transition text-black text-sm px-4 py-1 rounded-2xl font-medium flex items-center gap-2">
            <Search className="w-4 h-4" />
            search for agent
        </button>
    </div>
);

// --------------------- Agent Card ---------------------
const AgentCard = ({ agent, onClick }) => (
    <div
        onClick={() => onClick(agent)}
        className="cursor-pointer bg-gradient-to-r from-[#ffeb9d] to-[#fad43c] w-40 h-12 rounded-md flex items-center justify-center gap-2 text-sm font-semibold shadow hover:shadow-md hover:scale-105 active:scale-95 transition"
    >
        <User className="w-6 h-6" />
        {agent.name}
    </div>
);

// --------------------- Agent Detail Card ---------------------
const AgentDetailCard = ({ agent }) => (
  <div className="w-full max-w-full md:max-w-md bg-[#8C2841] dark:bg-[#6D1E3D] text-white rounded-xl p-6 md:p-10 space-y-4 shadow-lg flex flex-col justify-center">
    <h3 className="font-bold text-lg text-center md:text-left">{agent.name}</h3>

    <div className="space-y-4">
      {/* Property Name */}
      <div className="flex flex-col md:flex-row md:gap-4 md:items-center justify-center md:justify-start">
        <label className="text-sm md:text-base mb-1 md:mb-0">Property name</label>
        <input
          type="text"
          className="w-full md:w-[60%] px-3 py-2 rounded bg-[#FADC64] bg-opacity-85 text-black text-sm"
          placeholder="Enter property name"
        />
      </div>

      {/* Contacted Date */}
      <div className="flex flex-col md:flex-row md:gap-4 md:items-center justify-center md:justify-start">
        <label className="text-sm md:text-base mb-1 md:mb-0">Contacted date</label>
        <input
          type="date"
          className="w-full md:w-[60%] px-3 py-2 rounded bg-[#FADC64] bg-opacity-85 text-black text-sm"
        />
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-3 mt-4 justify-center md:justify-start">
      <button className="bg-gradient-to-r from-white to-[#FADC64] bg-opacity-75 text-black px-4 py-2 rounded-xl text-sm hover:bg-gray-100 active:scale-95 transition">
        chat history
      </button>
      <button className="bg-gradient-to-r from-white to-[#FADC64] bg-opacity-85 text-black px-4 py-2 rounded-xl text-sm hover:bg-gray-100 active:scale-95 transition">
        View reply
      </button>
      <button className="bg-gradient-to-r from-white to-[#FADC64] bg-opacity-85 text-black px-4 py-2 rounded-xl text-sm hover:bg-gray-100 active:scale-95 transition">
        Contact
      </button>
    </div>

    {/* Download Button */}
    <button className="mt-3 mx-auto bg-gradient-to-r from-[#FADC64] to-[#F5BA22] text-black text-sm px-4 py-2 w-full md:w-[70%] rounded shadow hover:brightness-95 active:scale-95 transition">
      Download agreement
    </button>
  </div>
);


// --------------------- Main Component ---------------------
const ContactedAgents = () => {
    const [activeFilter, setActiveFilter] = useState("Recent");
    const [searchTerm, setSearchTerm] = useState("");
    const [displayedAgents, setDisplayedAgents] = useState(dummyAgents);
    const [selectedAgent, setSelectedAgent] = useState(null);

    useEffect(() => {
        setDisplayedAgents(dummyAgents); // Replace with filtered data later
        setSelectedAgent(null);
    }, [activeFilter]);

    const handleFilterClick = (filter) => setActiveFilter(filter);
    const handleAgentClick = (agent) => setSelectedAgent(agent);

    return (
        <section>
            <div className="max-w-[1200px] mt-8 mx-auto font-[poppins] bg-white dark:bg-rose-950 rounded-3xl shadow-lg p-8 md:p-10 flex flex-col items-center gap-6">
                {/* Search Bar */}
                <AgentSearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
 
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 text-sm font-medium">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`px-4 py-1 rounded-full border transition ${activeFilter === filter
                                    ? "bg-[#F8C6D7] text-[#8C2841]"
                                    : "border-gray-300 dark:border-neutral-400 text-gray-600 dark:text-white hover:bg-[#fce9ee] hover:text-[#8C2841]"
                                } active:scale-95`}
                            onClick={() => handleFilterClick(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                    <button className="flex items-center gap-2 border border-gray-300 dark:border-neutral-400 px-4 py-1 rounded-full hover:bg-gray-100 dark:hover:bg-rose-200 active:scale-95 transition">
                        <SlidersHorizontal className="w-4 h-4" />
                        All Filters
                    </button>
                    <button
                        className="text-[#8C2841] dark:text-rose-300 hover:underline active:opacity-70 transition"
                        onClick={() => {
                            setActiveFilter("Recent");
                            setSearchTerm("");
                            setDisplayedAgents(dummyAgents);
                            setSelectedAgent(null);
                        }}
                    >
                        Reset All Filters
                    </button>
                </div>

                {/* Agent Cards */}
                <div className="flex flex-wrap gap-6 justify-center">
                    {displayedAgents.map((agent) => (
                        <AgentCard key={agent.id} agent={agent} onClick={handleAgentClick} />
                    ))}
                </div>

                {/* Detail Card */}
                {selectedAgent && <AgentDetailCard agent={selectedAgent} />}
            </div>
        </section>
    );
};

export default ContactedAgents;
