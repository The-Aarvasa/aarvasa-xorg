import { Phone, LogIn, SquareMenu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Navbar = () => {
    const [data] = useState([
        { route: "Home", path: "" },
        { route: "About us", path: "about" },
        { route: "Agents", path: "agents" },
        { route: "Services", path: "services" },
        { route: "Listings", path: "listings" },
    ]);

    const [logged_in, setLoggedin] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [navHeight, setNavHeight] = useState(0);
    const ref = useRef(null);
    const menu = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const {user, setUser, fetchUser} = useContext(AuthContext);
    const navigate = useNavigate();

    // Detect scroll to fix navbar
    useEffect(() => {
        fetchUser();
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

    // Get navbar height
    useEffect(() => {
        if (ref.current) {
            setNavHeight(ref.current.offsetHeight);
        }
    }, []);



    // Detect token to set login status
 

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            if (MenuOpen) setMenuOpen(false);
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, [MenuOpen]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        toast.info("You were successfully logged out of your account");
        fetchUser();
        navigate("/")
    };


    return (
        <>
            <nav
                ref={ref}
                className={`relative-nav transition-all duration-300 ease-in-out z-[99999] px-2 md:px-0 lg:px-2 py-4 ${fixed ? 'bg-orange-50' : 'bg-transparent'}`}
            >
                <div className="lg:mx-8 flex items-center justify-between mx-auto">
                    {/* Logo */}
                    <div className="logo relative z-[999]">
                        <Link to="/" className="flex items-center">
                            <img src="/images/logo_shape.png" className="w-20 md:w-20" alt="logo-shape" />
                            <img src="/images/image.png" alt="logo-text" className="w-24 md:w-20" />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <ul
                        ref={menu}
                        className={`
                            md:flex items-center md:static md:h-auto md:w-auto md:gap-8 lg:gap-14
                            ${MenuOpen ? "fixed top-0 left-0" : "fixed left-[-100%]"}
                            transition-all bg-orange-50 lg:bg-transparent h-[100vh] w-[80%] pt-[150px] px-12
                            space-y-8 md:space-y-0 md:pt-0 md:px-0 z-[10]
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
                         {user ? 
                          <button
                                    onClick={handleLogout}
                                    className="text-[#8C2841] lg:hidden font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                                    style={{
                                        background: "linear-gradient(to right, #F7A240, #F5C01A)",
                                    }}
                                >
                                    Logout
                                </button> : null}
                    </ul>

                    {/* Profile/Logout/Login */}
                    <div className="profile flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <Link to="/profile">
                                    <img src="/images/profile.png" className="w-10 h-10 rounded-full" alt="profile" />
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="text-[#8C2841] hidden lg:block font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                                    style={{
                                        background: "linear-gradient(to right, #F7A240, #F5C01A)",
                                    }}
                                >
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <Link to="/signup" className="flex items-center gap-2">
                                <span>Signup</span>
                                <LogIn />
                            </Link>
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

            {/* Spacer for fixed navbar */}
            {fixed && <div style={{ height: `${navHeight}px` }} />}
        </>
    );
};

export default Navbar;
