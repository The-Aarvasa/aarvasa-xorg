import React, { useState } from "react";
import { Download, CalendarCheck, CheckCircle } from "lucide-react";
import { BrowserRouter,Route,Router,Link,Navigate }  from "react-router-dom";

const StatusCard = ({ title, statusText, icon }) => {
  return (
    <div className="w-full max-w-[546px] flex flex-col sm:flex-row rounded-xl overflow-hidden shadow-sm">
      {/* Left side */}
      <div className="bg-[#8C2841] text-white font-semibold flex items-center justify-start px-5 py-4 sm:w-1/2 w-full">
        {title}
      </div>

      {/* Right side */}
      <div className="bg-gradient-to-r from-[#FADC64] to-[#F5BA22] bg-opacity-70 flex items-center justify-between px-5 py-4 sm:w-1/2 w-full">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{statusText}</span>
        </div>
      </div>
    </div>
  );
};

const PlaceCard = ({ src, title }) => {
  return (
    <div className="w-72 h-56 bg-gradient-to-r from-[#FADC64] to-[#F5BA22] bg-opacity-70 rounded-xl">
      <img className="w-72 h-32 rounded-xl" src={src} />
      <div className="w-64 h-8 justify-center px-3 py-3 text-black text-base font-medium font-['Poppins'] leading-tight mb-3">{title}</div>
      <Link to={`/listings/propertydetails/1234`} className="w-56 h-7 justify-center px-3 py-3 text-[#681F33] text-base font-medium font-['Poppins'] leading-tight">Click to visit →</Link>
    </div>
  )
}

const ApplicationStatus = () => {
  const [activeTab, setActiveTab] = useState("recent");

  return (
    <section>
      <div className="max-w-[1200px] mt-8 mx-auto font-[poppins] bg-white rounded-3xl shadow-lg p-4 md:p-10 lg:p-20 flex flex-col items-center gap-6">

        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "recent"
              ? "bg-[#F8C6D7] text-[#8C2841]"
              : "border border-gray-300 text-gray-700"
              }`}
            onClick={() => setActiveTab("recent")}
          >
            Recently viewed
          </button>
          <button
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "application"
              ? "bg-[#F8C6D7] text-[#8C2841]"
              : "border border-gray-300 text-gray-700"
              }`}
            onClick={() => setActiveTab("application")}
          >
            Application status
          </button>
        </div>

        {/* Conditionally Rendered Content */}
        {activeTab === "application" ? (
          <>
            <div className="flex flex-col items-center gap-4 w-full px-2 sm:px-6">
              <StatusCard
                title="Home loan"
                statusText="Approved"
                icon={<CheckCircle className="text-green-600 w-4 h-4" />}
              />
              <StatusCard
                title="Rental agreement"
                statusText="Download"
                icon={<Download className="text-black w-4 h-4" />}
              />
              <StatusCard
                title="Property visit scheduling"
                statusText="Available"
                icon={<CalendarCheck className="text-green-600 w-4 h-4" />}
              />
            </div>

            <p className="text-xs text-gray-500 text-right w-full">
              *This status bar is to indicate loan approval, in process or not.
            </p>
          </>
        ) : (
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-5 text-[poppins] justify-start ">
              <h2 className="font-semibold text-xl">Yesterday</h2>
              <div className="flex justify-between items-center">
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
              </div>
            </div>
            <div className="flex flex-col gap-5 text-poppins justify-start ">
              <h2 className="font-semibold text-xl">12 Jun 2025</h2>
              <div className="flex justify-between items-center">
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
                <PlaceCard src="https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg" title="Beach house at chennai" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplicationStatus;
