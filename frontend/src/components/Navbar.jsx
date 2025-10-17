import { Phone, LogIn, SquareMenu } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

import Alert from "./Utils/Alert";
const Navbar = () => {
    const [data] = useState([
        { route: "Home", path: "" },
        { route: "About us", path: "about" },
        { route: "Agents", path: "agents" },
        { route: "Services", path: "services" },
        { route: "Listings", path: "listings" },
    ]);

    const { theme, toggleTheme } = useContext(ThemeContext)

    const [logged_in, setLoggedin] = useState(false);
    const [fixed, setFixed] = useState(false);
    const [path, setPath] = useState('');
    const [alert, setAlert] = useState(null);
    const [navHeight, setNavHeight] = useState(0);
    const ref = useRef(null);
    const menu = useRef(null);
    const [MenuOpen, setMenuOpen] = useState(false);
    const { user, setUser, fetchUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    // Detect scroll to fix navbar
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

    useEffect(() => {
        setPath(location.pathname);
    }, [location.pathname])

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
        setAlert({
            message: "You were logged out !",
            color: "red"
        })
        setUser(null);
        navigate("/")
    };


    return (
        <>
            <nav

                ref={ref}
                className={`relative-nav transition-all duration-300 ease-in-out z-[99999] px-2 md:px-0 lg:px-2 py-4 ${fixed ? 'bg-orange-50' : 'dark:bg-transparent dark:bg-transparent'} dark:bg-black`}
            >
                <div className="lg:mx-8 flex items-center justify-between mx-auto">
                    {/* Logo */}
                    <div className="logo flex gap-8 items-center relative z-[999]">
                        <Link to="/" className="flex items-center">
                            <img src="/images/logo_shape.png" className="w-20 md:w-20" alt="logo-shape" />
                            <img src="/images/image.png" alt="logo-text" className="w-24 md:w-20" />

                        </Link>
                        {(path == '/signin' || path == '/signup') ? <Link to={'/'}>
                            <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">
                                Home
                            </p>
                        </Link> : null}

                    </div>

                    {/* Navigation Links */}
                    <ul
                        ref={menu}
                        className={`
                            md:flex items-center dark:bg-gray-900 dark:text-white md:dark:bg-transparent md:static md:h-auto md:w-auto md:gap-8 lg:gap-14
                            ${MenuOpen ? "fixed top-0 left-0" : "fixed left-[-100%]"}
                            transition-all bg-orange-50 md:bg-transparent h-[100vh] w-[80%] pt-[150px] px-12
                            space-y-8 md:space-y-0 md:pt-0 md:px-0 z-[10]
                        `}
                    >
                        {(path !== "/signin" && path !== "/signup" && path !== "/otp") ?
                            data.map((item, i) => (
                                <li className="relative group w-fit" key={i}>
                                    <Link to={`/${item.path}`}>
                                        <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">
                                            {item.route}
                                        </p>
                                    </Link>
                                    <span className="absolute w-0 h-1 left-0 bottom-[-5px] rounded-full bg-[#6C1E3C] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>

                                </li>
                            )) : null}
                        {user ?
                            <button
                                onClick={handleLogout}
                                className="text-[#8C2841] lg:hidden font-semibold px-4 py-2 rounded-full hover:scale-105 transition-transform"
                                style={{
                                    background: "linear-gradient(to right, #F7A240, #F5C01A)",
                                }}
                            >
                                Logout
                            </button> :
                            <Link to="/signup" className="flex md:hidden items-center gap-2">
                                <span>Signup</span>
                                <LogIn />
                            </Link>}
                    </ul>

                    {/* Profile/Logout/Login */}
                    <div className="profile flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-3">
                                <Link to="/profile">
                                    {user.photo ? <img
                                        src={user.photo
                                        }
                                        alt="Profile"
                                        className="w-8 h-8 md:w-8 md:h-8 rounded-full object-cover"
                                    /> :
                                        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-[#8C2841] text-white flex items-center justify-center text-xl font-bold">
                                            {user.email.charAt(0).toUpperCase()}
                                        </div>}

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
                            (path !== '/signin' && path !== '/signup' && path !== '/otp') ? <Link to="/signup" className="hidden md:flex items-center gap-2">
                                <span>Signup</span>
                                <LogIn />
                            </Link> : null
                        )}

                       

                        {theme === "dark" ? <MdDarkMode className="size-10 dark:text-black cursor-pointer bg-white rounded-full p-2" onClick={toggleTheme} />
 : <CiLight className="size-10 text-white font-semibold cursor-pointer bg-black rounded-full p-2" onClick={toggleTheme} />}


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

            {alert && <div className="fixed top-[90px] left-0 transform z-[999999] w-full max-w-full px-4">
                <Alert color={alert.color} message={alert.message} />
            </div>}

            {/* Spacer for fixed navbar */}
            {fixed && <div style={{ height: `${navHeight}px` }} />}
        </>
    );
};

export default Navbar;
