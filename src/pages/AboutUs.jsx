import React, { useEffect } from "react";
import aboutUs1 from "../assets/drymato/IMG_8121.PNG";
import aboutUs2 from "../assets/drymato/IMG_8112.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden py-24 px-6 md:px-16">
      <div
        className="text-center justify-center items-center"
        data-aos="fade-up"
      >
        {/* TAG */}
        <span className="inline-block px-5 py-2 rounded-full bg-[#d94f2b]/10 text-[#d94f2b] text-sm font-semibold tracking-wide mb-6">
          ABOUT US
        </span>

        {/* HEADING */}
        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1c1c1c]">
          Made With Simplicity & Care 🌿
        </h2>
      </div>

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#d94f2b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT IMAGE SECTION */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-right"
        >
          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl z-10">
            <img
              src={aboutUs2}
              alt="About Drymato"
              className="w-full max-w-[580px] h-[760px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Floating Card 1 */}
          <div className="absolute top-10 -left-4 bg-white shadow-2xl border border-[#eee] rounded-3xl px-6 py-5 z-20">
            <h3 className="text-3xl font-bold text-[#d94f2b]">100%</h3>
            <p className="text-sm text-[#666] mt-1">Natural Ingredients</p>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute bottom-10 right-0 bg-white shadow-2xl border border-[#eee] rounded-3xl px-6 py-5 z-20">
            <h3 className="text-2xl font-bold text-[#1c1c1c]">
              Simple <br /> Everyday Cooking
            </h3>

            <p className="text-sm text-[#666] mt-2">Smart kitchen essentials</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          {/* TEXT CONTENT */}
          <div
            className="mt-8 space-y-6 text-lg leading-8 text-[#555]"
            data-aos="fade-left"
          >
            <p>
              <span className="font-semibold text-[#d94f2b]">Drymato</span>
              started with one simple idea: Make everyday cooking easier,
              healthier, and less wasteful.
            </p>

            <p>
              What began at home with carefully dehydrated tomatoes slowly
              turned into a passion for creating smart kitchen essentials that
              people can actually use daily.
            </p>

            <p>
              Every batch is prepared with attention to quality, flavor, and
              freshness.
            </p>

            <p>
              Instead of over-processing ingredients, we focus on preserving
              their natural goodness through dehydration.
            </p>

            <p>
              Our goal is simple: To create products that save time in the
              kitchen while still delivering real taste.
            </p>
          </div>

          {/* FEATURE BOXES */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            <div className="bg-[#fafafa] border border-[#eee] rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#d94f2b]/10 flex items-center justify-center text-2xl">
                🌿
              </div>

              <h3 className="text-xl font-semibold text-[#1c1c1c] mt-5">
                Natural Process
              </h3>

              <p className="text-[#666] leading-7 mt-3">
                We carefully dehydrate ingredients to preserve natural flavor
                and freshness.
              </p>
            </div>

            <div className="bg-[#fafafa] border border-[#eee] rounded-3xl p-6 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-[#d94f2b]/10 flex items-center justify-center text-2xl">
                🍅
              </div>

              <h3 className="text-xl font-semibold text-[#1c1c1c] mt-5">
                Smart Kitchen Essentials
              </h3>

              <p className="text-[#666] leading-7 mt-3">
                Convenient products designed to make everyday cooking simpler
                and faster.
              </p>
            </div>
          </div>

          <div
            className="w-full flex justify-center sm:justify-end mt-12"
            data-aos="zoom-in"
          >
            {/* BUTTON */}
            <button className="mt-10 bg-[#d94f2b] hover:bg-[#bf4322] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
