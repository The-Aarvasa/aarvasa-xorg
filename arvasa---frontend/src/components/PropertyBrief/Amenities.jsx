import { useState } from "react";
import { Heading } from "../Utils/Heading";

const amenitiesData = [
  {
    title: "Interior",
    icon: <img src="./interior.png" alt="Interior Icon" className="h-12 w-12" />,
    content: [
      "Modular kitchen with chimney",
      "False ceiling with LED lighting",
      "Built-in wardrobes in bedrooms",
      "Wooden flooring in master bedroom",
    ],
  },
  {
    title: "Finances",
    icon: <img src="./finance.png" alt="Finances Icon" className="h-12 w-12" />,
    content: [
      "0% interest for first 6 months",
      "EMI options available",
      "Eligible for home loan",
      "Flexible down payment plans",
    ],
  },
  {
    title: "Exterior",
    icon: <img src="./exterior.png" alt="Exterior Icon" className="h-12 w-12" />,
    content: [
      "Landscaped gardens",
      "Children's play area",
      "Ample parking space",
      "Rainwater harvesting system",
    ],
  },
  {
    title: "Utilities",
    icon: <img src="./utilities.png" alt="Utilities Icon" className="h-12 w-12" />,
    content: [
      "Water supply: 24 hrs",
      "Electricity supply: 24 hrs",
      "Backup generator",
      "Gas pipeline connection",
      "Water supply: 24 hrs",
      "Electricity supply: 24 hrs",
      "CCTV surveillance",
      "Intercom facility",
    ],
  },
  {
    title: "Others",
    icon:  <img src="./other.svg" alt="Others Icon" className="h-12 w-12" />,
    content: [
      "Clubhouse with gym",
      "Swimming pool",
      "Community hall",
      "Gated community with security",
    ],
  },
];

export function Amenities() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-5">
      <Heading label="Amenities"/>
      <div className="space-y-2 max-w-4xl mx-auto">
        {amenitiesData.map((item, index) => (
          <div key={index}>
            <div
                className={`flex justify-between items-center pt-4 cursor-pointer ${index !== 0 ? "border-t" : ""}`}
                onClick={() => toggleSection(index)}
            >
              <div className="flex items-center space-x-5 pb-5 text-4xl font-medium">
                <span className="text-xl">{item.icon}</span>
                <span>{item.title}</span>
              </div>
              <span className="text-xl">
                {openIndex === index ? <img src="./up.png" alt="Collapse" className="h-8 w-8" /> : <img src="./down.png" alt="Expand" className="h-8 w-8" />}
              </span>
            </div>

            {openIndex === index && item.content.length > 0 && (
              <div className="p-4 bg-white shadow-md rounded-lg grid grid-cols-2 gap-x-20 gap-y-2 text-xl font-light text-gray-800">
                {item.content.map((line, i) => (
                  <div key={i} className="flex justify-start items-center space-x-2">
                    <span className="text-gray-500 text-2xl">›</span>
                    <span>{line}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
