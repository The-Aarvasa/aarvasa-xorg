import React from "react";
import whyImage from "../../assets/WhyAarvasapersonwithquestionmark.png"; // Combined image: question mark + person

const WhyAarvasa = () => {
  return (
    <section className="font-[poppins] mx-2 md:mx-8 flex justify-center items-center px-4 py-10">

      <div className="w-full bg-gradient-to-r from-[#d16283] to-[#82213a] rounded-3xl px-6 py-8 flex flex-col md:flex-row items-center justify-around gap-24 text-white text-center md:text-left">


        {/* Left: Image with "Why Aarvasa" text over it */}
        <div className="relative w-[250px] min-w-[200px]">
          <img
            src={whyImage}
            alt="Why Aarvasa"
            className="w-full object-contain"
          />
          <h2 className="absolute top-4 left-4 text-3xl font-bold">
            Why Aarvasa
          </h2>
        </div>

        {/* Right: Bullet Points */}
        <div className="max-w-md space-y-4 text-xl leading-relaxed text-left">

          <p>Extensive property database</p>
          <p>Experienced consultants</p>
          <p>Personalized investment strategies</p>
          <p>Testimonials or client success stories</p>
        </div>
      </div>
    </section>
  );
};

export default WhyAarvasa;
