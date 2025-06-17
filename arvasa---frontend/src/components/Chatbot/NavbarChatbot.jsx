import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarChatbot = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Agent", to: "/agent" },
    { label: "Services", to: "/services" },
    { label: "Listings", to: "/listings" },
  ];

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true);  // Show navbar on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[9999] bg-transparent px-4 py-2 md:px-8 font-[poppins] transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between z-10">
        {/* Logo */}
        <Link to="/">
          <img src="/images/logo.png" alt="Logo" className="w-28" />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-16">
          {navLinks.map(({ label, to }) => (
            <li key={label} className="relative group">
              <Link to={to}>
                <p className="text-base font-semibold text-white group-hover:text-[#8d3e5c] transition-colors duration-300">
                  {label}
                </p>
              </Link>
              <span className="absolute bottom-[-5px] left-0 h-1 w-0 bg-[#6C1E3C] rounded-full group-hover:w-full opacity-50 transition-all duration-500"></span>
            </li>
          ))}
        </ul>

        {/* Profile and Buttons */}
        <div className="flex items-center gap-4">
          <img src="/images/profile.png" alt="Profile" className="w-10 h-10 rounded-full" />

          {/* Contact Us button */}
          <button
            className="hidden md:flex items-center gap-2 font-semibold px-5 py-2 rounded-full hover:scale-105 transition-transform text-[#8C2841]"
            style={{
              background: "linear-gradient(to right, #F7A240, #F5C01A)"
            }}
          >
            <Phone size={18} color="#8C2841" />
            Contact Us
          </button>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden p-2 rounded-lg text-white"
            style={{ background: "linear-gradient(to right, #F7A240, #F5C01A)" }}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-b from-[#541E33] to-[#131212] bg-opacity-70 z-[9999] flex justify-end">
          <div className="w-[70%] sm:w-[50%] bg-[#1E1E1E] h-full p-6 flex flex-col">
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={30} className="text-white" />
              </button>
            </div>
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ label, to }) => (
                <li key={label} onClick={() => setIsMobileMenuOpen(false)}>
                  <Link to={to}>
                    <p className="text-lg font-semibold text-white hover:text-[#F7A240] transition-colors duration-300">
                      {label}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                className="w-full flex justify-center items-center gap-2 font-semibold px-5 py-3 rounded-full text-[#8C2841]"
                style={{ background: "linear-gradient(to right, #F7A240, #F5C01A)" }}
              >
                <Phone size={18} color="#8C2841" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarChatbot;
