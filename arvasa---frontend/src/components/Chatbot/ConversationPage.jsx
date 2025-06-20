import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaPaperPlane } from 'react-icons/fa';
import NavbarChatbot from './NavbarChatbot';

const ConversationPage = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [recentSearches, setRecentSearches] = useState([
        '4BHK Flats', 'Villas', 'Apartments', 'Garage', 'Trends', 'More'
    ]);
    const sidebarRef = useRef();

    const [messages, setMessages] = useState([
        { sender: 'bot', message: 'Welcome to Aarvasa' },
        { sender: 'user', message: 'I want to buy a property.' },
        { sender: 'bot', message: 'What Type ???' },
        { sender: 'user', message: 'Independent House with Budget: $500K' },
        { sender: 'bot', message: 'Generating ...' },
    ]);

    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;
        setMessages([...messages, { sender: 'user', message: input }]);

        // Update recent searches (example logic)
        setRecentSearches(prev => [input, ...prev.slice(0, 9)]);

        setInput('');
    };


    // Close sidebar on outside click
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
        <div className="min-h-screen bg-gradient-to-b from-[#B96A85] to-[#0C0C0C] text-white font-[poppins] relative px-16 pb-12">
            {/* Navbar */}
            <NavbarChatbot />

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-[#6D1E3DB0] to-[#121212] p-6 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50 shadow-lg`}
            >
                <h2 className="text-lg font-semibold mb-4 mt-36">Recent Searches</h2>
                <ul className="space-y-2">
                    {recentSearches.map((item, index) => (
                        <li key={index} className="text-sm text-white p-2 ">{item}</li>
                    ))}
                </ul>
            </div>

            {/* Page Content */}
            <div className="pt-24 md:pt-28">
                {/* Top right flex container */}
                <div className="flex justify-between items-center mb-4 gap-10 p-4">
                    <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
                        <FaBars className="text-white text-2xl" />
                    </button>
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/yCGvgijDKz/nxgk1imk_expires_30_days.png"
                        alt="Profile"
                        className="w-10 h-10 rounded-full"
                    />
                </div>

                {/* Conversation header */}
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold mb-2">What would like to know?</h1>
                    <p className="text-sm sm:text-base">Start the Conversation</p>
                </div>

                {/* Conversation Messages */}
                <div className="flex flex-col space-y-8 mx-28 mb-10 px-2 sm:px-10">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`rounded-3xl px-6 py-4 border border-[#613A4A] max-w-[80%] text-sm font-semibold
                  ${msg.sender === 'user' ? 'bg-[#551B32]' : 'bg-[#FFFFFF26]'}`}>
                                {msg.message}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input Bar */}
                <div className="flex items-center bg-[#FFFFFF26] mx-auto px-6 py-3 rounded-full w-[90%] max-w-3xl ">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask anything"
                        className="flex-grow bg-transparent text-white text-sm outline-none"
                    />
                    <button onClick={handleSend} className="ml-4 text-white">
                        <FaPaperPlane size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConversationPage;
