import React from "react";
import whyImage from "/assets/WhyAarvasapersonwithquestionmark.png"; // Combined image: question mark + person

const WhyAarvasa = () => {
  return (
    <section className="font-[poppins] mx-2 md:mx- flex justify-center items-center py-10">

      <div className="relative w-full bg-gradient-to-r from-[#d16283] to-[#82213a] rounded-3xl px-6 py-8 flex flex-col md:flex-row items-center justify-around gap-8 text-white text-center md:text-left dark:bg-gradient-to-r from-[#c9a530] to-[#93373f] dark:text-black">


        {/* Left: Image with "Why Aarvasa" text over it */}
        <div className="w-[200px] md:min-w-[400px]">
          <img
            src={whyImage}
            alt="Why Aarvasa"
            className="w-[900px] relative top-10 md:top-0 left-0 object-contain"
          />
          <h2 className=" absolute left-[100px] xl:left-92 top-[80px] text-2xl lg:text-5xl font-bold">
            Why Aarvasa
          </h2>
        </div>

        {/* Right: Bullet Points */}
        <div className="max-w-md space-y-4 text-xl leading-relaxed text-left font-semibold">
          <p>• Extensive property database</p>
          <p>• Experienced consultants</p>
          <p>• Personalized investment strategies</p>
          <p>• Testimonials or client success stories</p>
        </div>
        <div className="max-w-md space-y-4 text-xl leading-relaxed text-left font-semibold">
          <p>• Automated secure real estate.</p>
          <p>• Blockchain ensures transparent trust.</p>
          <p>• Experienced team, tailored solutions.</p>
          <p>• Innovation, integrity, property excellence.</p>

        </div>
      </div>
    </section>
  );
};

export default WhyAarvasa;
