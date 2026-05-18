import React from "react";
import processImage from "../assets/drymato/IMG_8251.PNG";

const Process = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src={processImage}
        alt="Process"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Top Left Button */}
      <div className="absolute top-8 left-5 lg:top-10 lg:left-10 z-20">

        {/* Glow Effect */}
        <div className="relative inline-flex items-center justify-center">

          {/* Animated Ring */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-white/30 animate-ping"></span>

          {/* Button */}
          <button className="relative px-8 py-4 bg-white text-black font-semibold rounded-full shadow-2xl hover:scale-105 transition-all duration-300 uppercase tracking-[3px]">

            Our Process

          </button>

        </div>

      </div>

      {/* Center Content Optional */}
      {/* <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-4">

        <div>

          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            From Farm To Flavor 🍅
          </h1>

          <p className="mt-6 text-white/90 max-w-2xl mx-auto text-lg">
            Discover how we carefully craft premium sun-dried products
            with authentic taste and natural freshness.
          </p>

        </div>

      </div> */}

    </section>
  );
};

export default Process;