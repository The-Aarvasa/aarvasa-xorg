import React, { useState, useRef } from 'react';
import {
  FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaBed, FaBath, FaRuler, FaHeart, FaRegHeart, FaWhatsapp
} from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Property = ({ listing, favourites, handleLiking }) => {
  const {
    _id,
    propertyTitle,
    price,
    priceD,
    imageUrls = [],
    bedrooms,
    bathrooms,
    coordinates,
    listingType,
    propertyType,
    carpetArea,
    transactionType,
    location,
    city,
    shortDescription
  } = listing;

  const formatMoney = (amount) => {
    if (!amount) return "";
    return `₹${amount.toLocaleString("en-IN")}`;
  }

  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100;

  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div className="w-full h-auto bg-white dark:bg-[#373737] dark:text-white rounded-xl shadow-md flex flex-col gap-6 lg:gap-2 lg:flex-row p-4">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full lg:w-[500px] h-[250px] lg:h-[269px] rounded-lg overflow-hidden mb-4 lg:mb-0"
      >
        <Link to={`/listings/propertydetails/${_id}`}>
          <Swiper
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop(); // don't start autoplay on mount
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: `.custom-next-${_id}`,
              prevEl: `.custom-prev-${_id}`,
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination, Autoplay]}
            className="h-full"
          >
            {imageUrls.length > 0 ? (
              imageUrls.map((url, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={url}
                    alt={`Slide ${index}`}
                    className="h-full p-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg object-contain"
                  />
                </SwiperSlide>
              ))
            ) : (
              <SwiperSlide>
                <img
                  src="https://via.placeholder.com/400x300?text=No+Image"
                  alt="No Image"
                  className="h-full p-1 w-full border border-gray-300 dark:border-gray-600 rounded-lg object-contain"
                />
              </SwiperSlide>
            )}

            {/* Custom Nav Buttons */}
            <div className={`custom-prev-${_id} absolute top-1/2 -translate-y-1/2 left-2 z-10 bg-white/80 dark:bg-white/20 text-black dark:text-white rounded-full p-2 shadow hover:bg-white cursor-pointer`}>
              <FaChevronLeft size={16} />
            </div>
            <div className={`custom-next-${_id} absolute top-1/2 -translate-y-1/2 right-2 z-10 bg-white/80 dark:bg-white/20 text-black dark:text-white rounded-full p-2 shadow hover:bg-white cursor-pointer`}>
              <FaChevronRight size={16} />
            </div>
          </Swiper>
        </Link>

        {/* Like Button */}
        <button
          onClick={() => handleLiking(_id)}
          className="absolute top-4 right-4 p-2 bg-white/30 dark:bg-white/10 rounded-full"
        >
          {favourites.includes(_id?.toString()) ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-black/30 dark:text-white/50" />
          )}
        </button>

        {/* Map Button */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`}
        >
          <button className="absolute bottom-1 z-[999] left-[10px] px-4 py-2 bg-black/50 dark:bg-white/20 rounded text-white flex items-center gap-2">
            <FaMapMarkerAlt />
            View on Map
          </button>
        </a>
      </div>

      <div className="flex-1 px-4 lg:px-8">
        {/* <div className="flex flex-wrap gap-2 text-sm mb-4">
          <button className="px-3 bg-[#F5D5E2] border border-[#6D1E3D]/50 rounded-xl text-[#6D1E3D]">Overview</button>
          <button className="px-3 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Details</button>
          <button className="px-3 py-2 border border-[#949494] rounded-xl text-[#5A5A59]">Facilities</button>
        </div> */}

        <h2 className="text-lg font-semibold text-[#3D3D3D] dark:text-white mb-2">{propertyTitle}</h2>
        <p className="text-md font-semibold text-[#3D3D3D] dark:text-white mb-2">{formatMoney(price)}</p>

        <div className="flex flex-wrap gap-4 mb-2">
          {propertyType !== 'Plot' ? (
            <div className="flex gap-4">
              <div className="flex items-center gap-2"><FaBed /><span>{bedrooms}</span></div>
              <div className="flex items-center gap-2"><FaBath /><span>{bathrooms}</span></div>
              <div className="flex items-center gap-2"><FaRuler /><span>{carpetArea} sq.ft</span></div>
            </div>
          ) : (
            <div className="flex items-center gap-2"><FaRuler /><span>{carpetArea} sq.ft</span></div>
          )}
        </div>

        <p className="text-[#656565] dark:text-white mb-1">
          {shortDescription && shortDescription.length > maxLength ? (
            <>
              {isExpanded ? shortDescription : `${shortDescription.slice(0, maxLength)}...`}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="ml-1 text-blue-600 hover:underline"
              >
                {isExpanded ? 'Show less' : 'Read more'}
              </button>
            </>
          ) : (
            shortDescription
          )}
        </p>
        <p className="text-[#656565] dark:text-white">{location}, {city}</p>
      </div>

      <div className="w-full lg:w-[300px] space-y-3 lg:space-y-5 text-base border-t-2 lg:border-t-0 lg:border-l-2 border-[#000000] dark:border-white/20 mt-4 lg:mt-0 pt-4 lg:pt-0 lg:pl-4">
        <button className="w-full py-2.5 bg-white dark:bg-[#4a4a4a] rounded-xl text-[#5A5A59] dark:text-white">Connect Owners</button>
        <button className="w-full p-2 py-2.5 bg-white dark:bg-[#4a4a4a] border dark:border-white/20 rounded-xl flex items-center gap-2 text-sm dark:text-white">
          <MdEmail /> Get Mail Id
        </button>
        <button className="w-full p-2 py-2.5 bg-white dark:bg-[#4a4a4a] border dark:border-white/20 rounded-xl flex items-center gap-2 text-sm dark:text-white">
          <MdPhone /> Get Phone no
        </button>
        <button className="w-full p-2 py-2.5 bg-white dark:bg-[#4a4a4a] border dark:border-white/20 rounded-xl flex items-center gap-2 text-sm dark:text-white">
          <FaWhatsapp className="text-[#00A000]" /> Get Whatsapp no
        </button>
      </div>
    </div>
  );
};

export default Property;
