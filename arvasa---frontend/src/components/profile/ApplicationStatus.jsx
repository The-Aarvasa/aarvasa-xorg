import React, { useState } from "react";
import { Download, CalendarCheck, CheckCircle } from "lucide-react";

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

const ApplicationStatus = () => {
  const [activeTab, setActiveTab] = useState("application");

  return (
    <section>
      <div className="max-w-[1200px] mt-8 mx-auto font-[poppins] bg-white rounded-3xl shadow-lg p-4 md:p-10 lg:p-20 flex flex-col items-center gap-6">
        
        {/* Toggle Buttons */}
        <div className="flex flex-wrap justify-center gap-4 w-full">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "recent"
                ? "bg-[#F8C6D7] text-[#8C2841]"
                : "border border-gray-300 text-gray-700"
            }`}
            onClick={() => setActiveTab("recent")}
          >
            Recently viewed
          </button>
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "application"
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
          <div className="text-gray-500 text-sm mt-4 text-center w-full">
            You haven't viewed any properties recently.
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplicationStatus;
