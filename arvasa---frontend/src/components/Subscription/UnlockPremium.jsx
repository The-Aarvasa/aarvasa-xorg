import React from 'react';
import { Link } from 'react-router-dom';
const UnlockPremium = ({disablePrem}) => {
    return (
      <div className='fixed top-0 bg-black/60 w-full z-[999999] flex items-center justify-center h-[100vh]'>
          <div className="flex shadow-lg  flex-col items-center justify-center min-h-[60vh] py-4 sm:py-8 px-2">
            <h2 className="text-xl text-white sm:text-3xl font-semibold text-center mb-1">Unlock Premium Features</h2>
            <p className="text-gray-700 text-center text-white mb-4 sm:mb-6 text-sm sm:text-base">Enjoy a smarter, faster, and richer property experience.</p>
            <div className="bg-gradient-to-b from-amber-200 to-amber-100 rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-[650px] flex flex-col items-center">
                <div className="flex items-center mb-4 sm:mb-6">
                    <span className="text-3xl sm:text-4xl mr-2 sm:mr-3">💎</span>
                    <span className="text-lg sm:text-4xl font-semibold">Try Premium features</span>
                </div>
                <ul className="text-base sm:text-lg text-black mb-8 sm:mb-10 w-full pl-6 sm:pl-20">
                    <li className="flex items-center mb-3 sm:mb-4"><span className="text-blue-600 mr-2 text-base">◆</span>Verified & Priority Listings</li>
                    <li className="flex items-center mb-3 sm:mb-4"><span className="text-blue-600 mr-2 text-base">◆</span>AI Recommendations</li>
                    <li className="flex items-center mb-3 sm:mb-4"><span className="text-blue-600 mr-2 text-base">◆</span>3D Virtual Tours & AR View</li>
                    <li className="flex items-center"><span className="text-blue-600 mr-2 text-base">◆</span>Instant Booking & Scheduling</li>
                </ul>
                <div className="flex items-center justify-center flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-sm mb-2">
                    <button onClick={() => disablePrem()} className="py-2 px-12 rounded-xl bg-pink-700 text-white font-semibold shadow hover:bg-pink-800 transition">
                        Skip
                    </button>
                   <Link to="/subscription"> <button onClick={() => disablePrem()} className="py-2 px-4 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold shadow hover:from-yellow-500 hover:to-orange-500 transition">
                        Get Premium
                    </button></Link>
                </div>
            </div>
        </div>
      </div>
    );
};

export default UnlockPremium;

