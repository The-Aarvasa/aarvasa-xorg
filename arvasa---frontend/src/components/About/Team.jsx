import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ansh from "../../assets/ansh.png"
import uday from "../../assets/uday.png"
import archit from "../../assets/archit.png"
import anirudh from "../../assets/anirudh.png"
import { Heading } from "../Utils/Heading";

const teamMembers = [
    {
        name: "Uday Prakash Sahu",
        role: "Founder & CEO",
        image: uday,
        linkedin: "https://www.linkedin.com/in/udayprakashsahu/",
        facebook: "",
        instagram: "",
    },
    {
        name: "Ansh Dubey",
        role: "Co-Founder & COO",
        image: ansh,
        linkedin: "https://www.linkedin.com/in/ansh-dubey-526325273/",
        facebook: "",
        instagram: "",
    },
    {
        name: "Archit Agarwal",
        role: "Chief Marketing Officer",
        image: archit,
        linkedin: "https://www.linkedin.com/in/archit-agarwal03/",
        facebook: "",
        instagram: "",
    },
    {
        name: "Anirudh Saxena",
        role: "Chief Technology Officer",
        image: anirudh,
        linkedin: "https://www.linkedin.com/in/udayprakashsahu/",
        facebook: "",
        instagram: "",
    },
    {
        name: "Anirudh Saxena",
        role: "Chief Technology Officer",
        image: anirudh,
        linkedin: "https://www.linkedin.com/in/udayprakashsahu/",
        facebook: "",
        instagram: "",
    },
];


// smaller teams component


// const Team = () => {
//     return (
//         <section className="md:px-6 md:py-10 mx-2 mx-8 font-[poppins]">
//             <Heading label="Meet Our Team" />

//             <div className="flex flex-col items-center gap-6 mb-6">
//                 {/* First row with 3 members */}
//                 <div className="flex justify-center flex-wrap gap-6 transition-all duration-500">
//                     {teamMembers.slice(0, 3).map((member, index) => (
//                         <div
//                             key={index}
//                             className={`relative group rounded-xl overflow-hidden shadow-md ${member.bgColor} w-64`}
//                         >
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className="w-full cursor-pointer object-cover"
//                             />
//                             <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all left-0 right-0 bg-[#6C1E3C] bg-opacity-80 px-4 py-2 text-white">
//                                 <h4 className="text-sm font-semibold">{member.name}</h4>
//                                 <p className="text-xs">{member.role}</p>
//                                 <div className="absolute bottom-4 right-4 flex items-center gap-2">
//                                     <a href={member.facebook} target="_blank" rel="noopener noreferrer">
//                                         <FaFacebookF className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                                         <FaLinkedinIn className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                     <a href={member.instagram} target="_blank" rel="noopener noreferrer">
//                                         <FaInstagram className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Second row with 2 members */}
//                 <div className="flex justify-center flex-wrap gap-6 transition-all duration-500">
//                     {teamMembers.slice(3, 5).map((member, index) => (
//                         <div
//                             key={index + 3} // Adjust key to avoid duplication
//                             className={`relative group rounded-xl overflow-hidden shadow-md ${member.bgColor} w-64`}
//                         >
//                             <img
//                                 src={member.image}
//                                 alt={member.name}
//                                 className="w-full cursor-pointer object-cover"
//                             />
//                             <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 left-0 right-0 bg-[#6C1E3C] bg-opacity-80 px-4 py-2 text-white">
//                                 <h4 className="text-sm font-semibold">{member.name}</h4>
//                                 <p className="text-xs">{member.role}</p>
//                                 <div className="absolute bottom-4 right-4 flex items-center gap-2">
//                                     <a href={member.facebook} target="_blank" rel="noopener noreferrer">
//                                         <FaFacebookF className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                     <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
//                                         <FaLinkedinIn className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                     <a href={member.instagram} target="_blank" rel="noopener noreferrer">
//                                         <FaInstagram className="text-white text-sm cursor-pointer hover:text-gray-400" />
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//         </section>

//     );
// };






const Team = () => {
    return (
        <section className="px-4 sm:px-6 py-10 font-[poppins]">
            <Heading label="Meet Our Team" />

            <div className="flex flex-col items-center gap-10 mb-6">
                {/* First row with 3 members */}
                <div className="flex justify-center flex-wrap gap-4 sm:gap-6 transition-all duration-500">
                    {teamMembers.slice(0, 3).map((member, index) => (
                        <div
                            key={index}
                            className={`relative group rounded-xl overflow-hidden shadow-lg w-72 sm:w-64 transition-transform hover:scale-105`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all left-0 right-0 bg-[#6C1E3C] bg-opacity-80 px-4 py-2 text-white">
                                <h4 className="text-base font-semibold">{member.name}</h4>
                                <p className="text-xs">{member.role}</p>
                                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                    {member.facebook && (
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF className="text-white text-sm hover:text-gray-400" />
                                        </a>
                                    )}
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className="text-white text-sm hover:text-gray-400" />
                                    </a>
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-white text-sm hover:text-gray-400" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second row with 2 members */}
                <div className="flex justify-center flex-wrap gap-4 sm:gap-6 transition-all duration-500">
                    {teamMembers.slice(3, 5).map((member, index) => (
                        <div
                            key={index + 3}
                            className={`relative group rounded-xl overflow-hidden shadow-lg w-72 sm:w-64 transition-transform hover:scale-105`}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all left-0 right-0 bg-[#6C1E3C] bg-opacity-80 px-4 py-2 text-white">
                                <h4 className="text-base font-semibold">{member.name}</h4>
                                <p className="text-xs">{member.role}</p>
                                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                                    {member.facebook && (
                                        <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF className="text-white text-sm hover:text-gray-400" />
                                        </a>
                                    )}
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                        <FaLinkedinIn className="text-white text-sm hover:text-gray-400" />
                                    </a>
                                    {member.instagram && (
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                                            <FaInstagram className="text-white text-sm hover:text-gray-400" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>


    );
};

export default Team;
