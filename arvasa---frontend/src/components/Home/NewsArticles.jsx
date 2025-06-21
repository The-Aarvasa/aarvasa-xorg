import React, { useState, useRef, useEffect } from 'react'
import { Heading } from '../../components/Utils/Heading'
import { MoveRight } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Testimonials } from './Testimonials';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.2 },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const Counter = ({ end, duration = 3 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = (currentTime - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const NewsArticles = () => {
    const [data, setData] = useState([
        {
            id: 1,
            img: '/na-1.jpg',
            text: 'Housing markets That Changed the most in this month',
            name: "Alice Johnson",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            content: "Amazing insights into the housing market. Very helpful!",
            stars: "★★★★★",
        },
        {
            id: 2,
            img: '/na-2.jpg',
            text: 'Walkable cities where you can Live Affordably',
            name: "Rahul Mehra",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            content: "Great tips on affordable cities, saved me a lot of time!",
            stars: "★★★★☆",
        },
        {
            id: 3,
            img: '/na-3.jpg',
            text: 'Read Unveils the Best Cities for Biking',
            name: "Emily Smith",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            content: "I found my dream city thanks to this article.",
            stars: "★★★★★",
        }
    ]);

    const [data1, setData1] = useState([
        {
            id: 1,
            img: '/na - 1.jpg',
            text: 'Housing markets That Changed the most in  this month',
        },
        {
            id: 2,
            img: '/na - 2.jpg',
            text: 'Walkable cities where you can Live Affordably',
        },
        {
            id: 3,
            img: '/na - 3.jpg',
            text: 'Read Unevils the Best Cities for Biking',
        }
    ])

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.5 });

    return (
        <div className='mx-2 mt-8 md:mx-4 relative'>
            <Heading label={"News & Articles"}></Heading>
            <div className="rows flex flex-col gap-4">
                <div className="main bg-gradient-to-br p-10 flex justify-center items-center rounded-2xl from-[#A82E4F] to-[#42121F]">
                    <div className="cards flex flex-wrap justify-center gap-8 md:gap-20">
                        {data1.map((currElem) => {
                            return (
                                <div className="card" key={currElem.id}>
                                    <img className='w-[290px] rounded-lg' src={currElem.img} alt="" />
                                    <p className='w-full md:max-w-[270px] text-white mt-4 mb-4 text-sm'>{currElem.text}</p>
                                    <button className='flex justify-center items-center gap-1 text-white text-sm'>Read More
                                        <MoveRight></MoveRight>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row_2 px-4">
                    <div className="cols flex items-center flex-wrap justify-center lg:justify-between lg:space-y-20 md:space-y-10 px-2 md:px-20 w-full mx-auto">
                        {/* Left Column */}
                        <motion.div
                            ref={ref}
                            className="left_col p-6"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? 'visible' : 'hidden'}
                        >
                            <motion.h1
                                className="text-black font-semibold text-3xl"
                                variants={headingVariants}
                            >
                                More than 10 Years of Experience
                            </motion.h1>
                            <motion.p
                                className="text-[#181A20] text-sm font-normal pt-4 pb-10"
                                variants={textVariants}
                            >
                                We’ve been helping individuals and families find their perfect home through trusted insights,<br /> expert support, and innovative tools.
                            </motion.p>
                            <motion.div
                                className="numbers flex items-center gap-12 pt-2 -mb-10"
                                variants={containerVariants}
                            >
                                <motion.div variants={numberVariants}>
                                <h1 className="text-md md:text-3xl font-semibold">
                                    <Counter end={2000000} /> +
                                </h1>
                                <p className="text-sm">User visits</p>
                                </motion.div>
                                <motion.div variants={numberVariants}>
                                <h1 className="text-md md:text-3xl font-semibold">
                                    <Counter end={999} /> +
                                </h1>
                                <p className="text-sm">Satisfied Customers</p>
                                </motion.div>
                                <motion.div variants={numberVariants}>
                                <h1 className="text-md md:text-3xl font-semibold">
                                    <Counter end={29000} /> +
                                </h1>
                                <p className="text-sm">Home ownership</p>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column (Swiper) */}
                        <div className="right_col w-full pt-20 md:w-[750px] md:pt-0">
                            <Testimonials />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsArticles;
