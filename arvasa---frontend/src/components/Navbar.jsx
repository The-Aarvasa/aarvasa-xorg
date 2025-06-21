import { Phone, Menu, LogIn, SquareMenu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const [logged_in, setLoggedin] = useState(false);
    const ref = useRef(null);
    const menu = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    // Detect scroll
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (!ref.current) return;
            let scrollTop = window.scrollY;
            if (scrollTop > 130) {
                ref.current.classList.add("fixed-nav", "shadow-lg");
                ref.current.classList.remove('relative-nav');
            } else {
                ref.current.classList.remove('fixed-nav', "shadow-lg");
                ref.current.classList.add('relative-nav');
            }
        });
    }, []);

    // Toggle mobile menu
    useEffect(() => {
        const handleClickOutside = () => {
            if (MenuOpen) setMenuOpen(false);
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [MenuOpen]);

    // Detect token to show profile
    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        setLoggedin(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        setLoggedin(false);
        navigate("/signin");
    };

    return (
        <nav ref={ref} className="relative-nav transition-all duration-300 ease-in-out bg-orange-50 z-[9999] top-0 px-2 md:px-0 lg:px-2 py-4">
            <div className="lg:mx-8 flex items-center justify-between mx-auto">
                <div className="logo relative z-[999]">
                    <Link to="/" className="flex items-center">
                        <img src="/images/logo_shape.png" className="w-20 md:w-20" alt="" />
                        <img src="/images/image.png" alt="" className="w-24 md:w-20" />
                    </Link>
                </div>

                <ul
                    ref={menu}
                    className={`
                        ${MenuOpen ? "fixed top-0 left-0" : "fixed left-[-100%]"} 
                        md:flex md:static md:h-auto md:w-auto md:gap-8 lg:gap-14 
                        transition-all bg-orange-50 h-[100vh] w-[80%] pt-[150px] px-12 
                        space-y-8 md:space-y-0 md:pt-0 md:px-0 z-[10]
                    `}
                >
                    {["Home", "About Us", "Agent", "Services", "Listings"].map((item, i) => (
                        <li key={i} className="relative group w-fit">
                            <Link to={`/${item.toLowerCase().replace(" ", "")}`}>
                                <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">{item}</p>
                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                    ))}
                </ul>

                <div className="profile flex items-center gap-4">
                    {logged_in ? (
                        <>
                            <Link to="/profile">
                                <img src="/images/profile.png" className="w-10 rounded-full h-10" alt="Profile" />
                            </Link>
                            <button onClick={handleLogout} className="text-[#8C2841] font-semibold px-4 py-2 rounded-full hover:scale-105" style={{
                                background: "linear-gradient(to right, #F7A240, #F5C01A)",
                            }}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link to="/signup" className="flex items-center gap-2">
                            <span>Signup</span>
                            <LogIn />
                        </Link>
                    )}
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
    );
};

export default Navbar;
