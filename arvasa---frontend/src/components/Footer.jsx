import React from 'react';

const Footer = () => {
  return (
    <div
      className="hidden md:block w-full px-4 pb-12 flex flex-col gap-12 items-center"
      style={{
        background: 'linear-gradient(to right, #A82E4F, #8C2841)',
      }}
    >
      <footer className="grid p-[50px] grid-cols-[repeat(auto-fit,_minmax(200px,_2fr))] place-items-center md:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-7xl px-4">
        {/* Logo & Text */}
        <div className="flex flex-col items-start gap-6">
          <a href="#" className="flex flex-col sm:flex-row items-center gap-2">
            <img src="/images/logo_shape.png" className="w-24" alt="logo" />
            <img src="/images/logo_text.png" className="w-32" alt="text logo" />
          </a>
          <p className="text-white font-semibold text-sm sm:text-base">
            Revolutionize Scheduling with <br /> Aarvasa.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Quick links</h1>
          <span className="bg-[#D4AF37] w-1/2 h-[5px] absolute top-7"></span>
          <a className="text-white text-sm hover:text-gray-300" href="#">Home</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">About us</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">Services</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">Our team</a>
        </div>

        {/* Privacy & Terms */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Privacy & terms</h1>
          <span className="bg-[#D4AF37] w-1/2 h-[5px] absolute top-7"></span>
          <a className="text-white text-sm hover:text-gray-300" href="#">Terms and Conditions</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">Privacy Policy</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">Refund and Cancellation Policy</a>
          <a className="text-white text-sm hover:text-gray-300" href="#">Security</a>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 relative">
          <h1 className="text-white font-bold text-lg">Contact us</h1>
          <span className="bg-[#D4AF37] w-1/3 h-[5px] absolute top-7"></span>
          <p className="text-white text-sm">Technology Tower, VIT Vellore</p>
          <p className="text-white text-sm">Room No. 004, Ground Floor</p>
          <p className="text-white text-sm">Vellore, Tamil Nadu, 632014</p>
          <a className="text-white text-sm hover:text-gray-300" href="#">theaarvasa@gmail.com</a>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 text-center text-white text-sm px-4">
        <p>© TimeSlotter Technologies Pvt. Ltd. | All rights reserved</p>
        <p>GSTIN - 23AAKCT9224E1ZD</p>
        <p>CIN - U63999MP2024PTCO70797</p>
      </div>
    </div>
  );
};

export default Footer;
