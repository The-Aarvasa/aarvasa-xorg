import { Phone, Menu, LogIn, SquareMenu } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    
        const [data, setData] = useState([
            {
            route : "Home",
            path : ""
           },
           {
            route : "About us",
            path : "about"
           },
           {
            route : "Agents",
            path : "agents"
           },
           {
            route : "Services",
            path : "services"
           },
           {
            route : "Listings",
            path : "listings"
           },
    ]);
    const [logged_in, setLoggedin] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const ref = useRef(null);
    const menu = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);

    // Handle scroll to toggle fixed navbar
    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrollTop = window.scrollY;

            if (scrollTop > 130) {
                setFixed(true);
                ref.current.classList.add("fixed-nav", "shadow-lg");
                ref.current.classList.remove("relative-nav");
            } else {
                setFixed(false);
                ref.current.classList.remove("fixed-nav", "shadow-lg");
                ref.current.classList.add("relative-nav");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Get navbar height on mount
    useEffect(() => {
        if (ref.current) {
            setNavHeight(ref.current.offsetHeight);
        }
    }, []);

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (MenuOpen) {
                setMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [MenuOpen]);

    return (
        <>
            <nav
                ref={ref}
                className="relative-nav transition-all duration-300 ease-in-out bg-orange-50 z-[9999] px-2 md:px-0 lg:px-2 py-4"
            >
                <div className="lg:mx-8 flex items-center justify-between mx-auto">
                    {/* Logo */}
                    <div className="logo relative z-[999]">
                        <Link to={"/"} className="flex items-center">
                            <img src="/images/logo_shape.png" className="w-20 md:w-20" alt="logo-shape" />
                            <img src="/images/image.png" alt="logo-text" className="w-24 md:w-20" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <ul
                            ref={menu}
                            className={`
                                md:flex 
                                md:static 
                                md:h-auto 
                                md:w-auto 
                                md:space-y-0 
                                md:px-0 
                                md:pt-0 
                                md:gap-8 
                                lg:gap-14
                                ${MenuOpen ? "fixed top-0 left-0" : "fixed left-[-100%]"} 
                                transition-all 
                                bg-orange-50 
                                h-[100vh] 
                                w-[80%] 
                                pt-[150px] 
                                px-12 
                                space-y-8 
                                z-[10]
                            `}
                        >
                            {data.map((item, i) => (
                                <li className="relative group w-fit" key={i}>
                                    <Link to={`/${item.path}`}>
                                        <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">
                                            {item.route}
                                        </p>
                                    </Link>
                                    <span className="absolute w-0 h-1 left-0 bottom-[-5px] rounded-full bg-[#6C1E3C] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Profile/Contact/Login Section */}
                    <div className="profile flex items-center gap-4">
                        {logged_in ? (
                            <div className="flex items-center gap-2">
                                <Link to={"/profile"}>
                                    <img src="/images/profile.png" className="w-10 h-10 rounded-full" alt="profile" />
                                </Link>
                                <button
                                    className="hidden md:flex font-semibold items-center text-[#8C2841] gap-2 md:py-2 px-2 lg:px-6 text-sm rounded-full hover:scale-105 transition-transform"
                                    style={{ background: "linear-gradient(to right, #F7A240, #F5C01A)" }}
                                >
                                    <Phone size={18} color="#8C2841" />
                                    Contact us
                                </button>
                            </div>
                        ) : (
                            <div>
                                <button className="flex items-center gap-2">
                                    <Link to={"/signup"}>Signup</Link>
                                    <LogIn />
                                </button>
                            </div>
                        )}

                        {/* Mobile menu toggle */}
                        <SquareMenu
                            color="#8C2841"
                            onClick={(e) => {
                                e.stopPropagation();
                                setMenuOpen(true);
                            }}
                            size={30}
                            className="cursor-pointer md:hidden"
                        />
                    </div>
                </div>
            </nav>

            {/* Spacer div when navbar is fixed */}
            {fixed && <div style={{ height: `${navHeight}px` }}></div>}
        </>
    );
};

export default Navbar;
