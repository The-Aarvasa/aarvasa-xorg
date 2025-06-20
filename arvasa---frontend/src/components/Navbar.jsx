import { Phone, Menu, LogIn, SquareMenu } from "lucide-react";
import { Link } from "react-router-dom";
import Profile from "../pages/Profile";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
    const [logged_in, setLoggedin] = useState(false);
    const [fixed, setFixed] = useState(false);
    const ref = useRef(null);
    const menu = useRef(null);
    const [Menu, setMenu] = useState(false);
   useEffect(() => {
     document.addEventListener("scroll", () => {
        if (!ref.current) return;
        let scrollTop = window.scrollY;
        if (scrollTop > 130) {
            ref.current.classList.add("fixed-nav");
            ref.current.classList.add("shadow-lg");
            ref.current.classList.remove('relative-nav');
        }
        else {
            ref.current.classList.remove('fixed-nav');
            ref.current.classList.remove("shadow-lg");

            ref.current.classList.add('relative-nav');
        }
    })
   }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (Menu) {
                setMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [Menu]);




    return (
        <nav ref={ref} className="relative-nav transition-all duration-300 ease-in-out bg-orange-50 z-20 top-0 start-0 z-[9999] px-2 md:px-0 lg:px-2 py-4">
            <div className="lg:mx-8 flex items-center justify-between mx-auto">
                {/* mx-2 */}
                <div className="logo relative z-[999]">
                    <a href="#" className="flex items-center">
                        <img src="/images/logo_shape.png" className="w-20 md:w-20" alt="" />
                        <img src="/images/image.png" alt="" className="w-24 md:w-20" />
                    </a>
                </div>
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
    ${Menu ? "fixed top-0 left-0" : "fixed left-[-100%]"} 
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

                        <li className="relative group w-fit">
                            <Link to={'/'}>
                                <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">Home</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group w-fit">
                            <Link to={'/about'}>
                                <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">About Us</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group w-fit">
                            <Link to={'/agent'}>
                                <p href="#" className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">Agent</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group w-fit">
                            <Link to={'/services'}>
                                <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">Services</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>
                        <li className="relative group w-fit">
                            <Link to={'/listings'}>
                                <p className="text-md lg:text-lg font-[500] group-hover:text-[#6C1E3C]">Listings</p>

                            </Link>
                            <span className="absolute w-0 h-1 left-0 bottom-0 rounded-full bg-[#6C1E3C] bottom-[-5px] group-hover:w-full group-hover:opacity-75 transition-all duration-700"></span>
                        </li>

                    </ul>
                </div>
                <div className="profile flex items-center gap-4 ">
                    {logged_in ?
                        <div>
                            <Link to={'/profile'}>
                                <img src="/images/profile.png" className="w-10 rounded-full h-10" alt="" />
                            </Link>
                            <button className="hidden md:flex font-semibold items-center text-[#8C2841] gap-4 md:py-2 px-2 p-1 lg:p-2 lg:px-6 text-sm rounded-full hover:scale-105 transition-transform" style={{
                                background: "linear-gradient(to right, #F7A240, #F5C01A)",
                            }}>
                                <Phone size={18} color="#8C2841" />
                                Contact us

                            </button>
                            <button className="md:hidden text-white p-2 rounded-lg" style={{
                                background: "linear-gradient(to right, #F7A240, #F5C01A)",
                            }}>
                                <Menu size={24} />
                            </button>
                        </div>
                        :

                        <div>
                            <button className="flex items-center gap-2">
                                <Link to={"/signup"}>Signup</Link>
                                <LogIn />
                            </button>
                        </div>}

                    <SquareMenu color="#8C2841" onClick={(e) => {
                        e.stopPropagation();
                        setMenu(true)
                    }} size={30} className="cursor-pointer md:hidden" />


                </div>
            </div>

        </nav>
    );
};

export default Navbar;
