import React from "react";
import { useEffect } from "react";
import whyDrymatoImg from "../assets/drymato/IMG_8119.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
const WhyDrymato = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refreshHard();
  }, []);
  return (
    <section className="w-full min-h-screen bg-[#f8f6f1] py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div
          className="relative z-10"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-[#d94f2b]/10 text-[#d94f2b] text-sm font-semibold tracking-wide mb-6">
            WHY DRYMATO?
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1c1c1c]">
            Smart Vegetables <br />
            for Modern Kitchens
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#555] max-w-xl">
            Modern-day vegetables often travel through long supply chains and
            are exposed to chemicals, artificial ripening, and unnecessary
            preservatives.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#555] max-w-xl">
            Fresh produce spoils quickly — leading to food waste, extra expense,
            and daily kitchen hassle.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#555] max-w-xl">
            That’s where{" "}
            <span className="font-semibold text-[#d94f2b]">Drymato</span> comes
            in. We carefully dehydrate fresh vegetables in small batches to
            preserve their natural flavor, rich color, and everyday convenience.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-3 gap-4 mt-10">
            {["No Chopping", "No Spoilage", "No Mess"].map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#eee] rounded-2xl px-5 py-6 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <h4 className="font-semibold text-[#1c1c1c] text-lg">{item}</h4>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <div
            className="w-full flex justify-center sm:justify-end mt-12"
            data-aos="zoom-in"
          >
            <button className="mt-10 bg-[#d94f2b] hover:bg-[#bf4322] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
              Explore Products
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-left"
        >
          {/* BACKGROUND SHAPE */}
          <div className="absolute w-[500px] h-[500px] bg-[#d94f2b]/10 rounded-full blur-3xl"></div>

          {/* MAIN IMAGE */}
          <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
            <img
              src={whyDrymatoImg}
              alt="Drymato Vegetables"
              className="w-full max-w-[550px] h-[650px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* FLOATING CARD */}
          <div className="absolute bottom-10 left-0 bg-white shadow-2xl rounded-3xl px-6 py-5 border border-[#eee] z-20">
            <p className="text-3xl font-bold text-[#d94f2b]">100%</p>
            <p className="text-[#555] text-sm mt-1">
              Natural & Preservative Free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDrymato;
