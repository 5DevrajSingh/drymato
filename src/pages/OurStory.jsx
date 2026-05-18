import React, { useEffect } from "react";
import ourStoryImg1 from "../assets/drymato/IMG_8228.PNG";
import ourStoryImg2 from "../assets/drymato/IMG_8110.PNG";
import AOS from "aos";
import "aos/dist/aos.css";
const OurStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="relative w-full min-h-screen bg-[#f8f6f1] overflow-hidden py-24 px-6 md:px-16">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-[#d94f2b]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <div data-aos="zoom-in">
            {/* TAG */}
            <span className="inline-block px-5 py-2 rounded-full bg-[#d94f2b]/10 text-[#d94f2b] text-sm font-semibold tracking-wide mb-6">
              OUR STORY
            </span>

            {/* HEADING */}
            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1c1c1c]">
              From Our Farms <br />
              To Your Kitchen 🍅
            </h2>
          </div>

          {/* MAIN TEXT */}
          <div
            className="mt-8 space-y-6 text-lg leading-8 text-[#555]"
            data-aos="fade-up"
          >
            <p>
              At <span className="font-semibold text-[#d94f2b]">Drymato</span>,
              our journey begins right at the farm.
            </p>

            <p>
              The tomatoes used in our products are carefully sourced from our
              own farms, where we focus on growing with care and simplicity.
            </p>

            <p>
              We believe food should stay as close to nature as possible. That’s
              why we avoid unnecessary preservatives and focus on creating
              naturally dehydrated products with real ingredients.
            </p>

            <p>
              From harvesting fresh tomatoes to slowly dehydrating and packing
              them — every step is done thoughtfully to preserve flavor,
              quality, and freshness.
            </p>
          </div>

          {/* PROBLEM BOX */}
          <div
            className="mt-10 bg-white rounded-[30px] p-8 shadow-xl border border-[#eee]"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold text-[#1c1c1c] mb-6">
              The Problem We Saw
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="min-w-[45px] h-[45px] rounded-full bg-[#d94f2b]/10 flex items-center justify-center text-[#d94f2b] font-bold text-xl">
                  ✦
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#1c1c1c]">
                    Fresh vegetables spoil too quickly
                  </h4>

                  <p className="text-[#666] mt-1">
                    Especially tomatoes with very short shelf life.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-[45px] h-[45px] rounded-full bg-[#d94f2b]/10 flex items-center justify-center text-[#d94f2b] font-bold text-xl">
                  ✦
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-[#1c1c1c]">
                    Everyday cooking takes too much preparation
                  </h4>

                  <p className="text-[#666] mt-1">
                    Chopping, peeling, grinding — all time consuming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-left"
        >
          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={ourStoryImg1}
              alt="Drymato Story"
              className="w-full max-w-[600px] h-[780px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Floating Card Top */}
          <div className="absolute top-8 -left-6 bg-white shadow-2xl border border-[#eee] rounded-3xl px-6 py-5 z-20">
            <h3 className="text-3xl font-bold text-[#d94f2b]">100%</h3>
            <p className="text-sm text-[#666] mt-1">Farm Fresh Tomatoes</p>
          </div>

          {/* Floating Card Bottom */}
          <div className="absolute bottom-10 right-0 bg-white shadow-2xl border border-[#eee] rounded-3xl px-6 py-5 z-20">
            <h3 className="text-2xl font-bold text-[#1c1c1c]">
              Naturally <br /> Dehydrated
            </h3>

            <p className="text-sm text-[#666] mt-2">
              Rich flavor with longer shelf life
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div
        className="max-w-6xl mx-auto mt-24 bg-white rounded-[40px] p-10 md:p-16 shadow-2xl border border-[#eee] relative z-10"
        data-aos="fade-up"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#1c1c1c] leading-tight">
              How Drymato Started
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#555]">
              We started experimenting with dehydrating fresh tomatoes at home —
              slowly drying them to naturally lock in flavor.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#555]">
              The result was a product that became flavorful, convenient,
              long-lasting, and incredibly easy to use.
            </p>

            <p className="mt-5 text-lg leading-8 text-[#555]">
              Today, Drymato is growing into a complete range of naturally dried
              kitchen essentials designed for modern homes.
            </p>

            <div
              className="w-full flex justify-center sm:justify-end mt-12"
              data-aos="zoom-in"
            >
              <button className="mt-8 bg-[#d94f2b] hover:bg-[#bf4322] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
                Explore Our Products
              </button>
            </div>
          </div>

          {/* Small Side Image */}
          <div className="overflow-hidden rounded-[35px] shadow-xl">
            <img
              src={ourStoryImg2}
              alt="Dried Tomatoes"
              className="w-full h-[450px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
