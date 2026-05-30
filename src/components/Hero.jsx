import React, { useEffect } from "react";
import daymatoVideo from "../assets/drymato/IMG_6290.MP4";
import profileImage from "../assets/dev.png";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* VIDEO */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            // src="https://danubeproperties.com/wp-content/uploads/2026/04/Sequence-11.mp4"
            src={daymatoVideo}
            type="video/mp4"
          />
        </video>

        {/* Portfolio Image */}
        <div
          // className="absolute bottom-24 right-5 md:right-40 z-10"
          className="absolute bottom-10 right-5 md:right-16 lg:right-24 z-20"
          data-aos="zoom-in"
        >
          <div 
          className="w-35 h-35 md:w-56 md:h-56 rounded-full overflow-hidden  shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          // className="w-35 h-35 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl"
          >
            <img
              src={profileImage} // apni image ka path
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* CONTENT */}
        <div
          className="relative z-20 flex flex-col items-start justify-center text-left px-4 sm:pl-12 md:pl-20 h-screen"
          data-aos="fade-up"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            Sun-Dried Goodness,
            <br />
            Bursting With Flavor 🍅
          </h1>

          <p className="mt-5 max-w-3xl text-sm sm:text-base md:text-lg text-white leading-relaxed">
            Naturally dehydrated tomatoes and vegetable powders made in small
            batches.
          </p>

          <button className="mt-8 bg-[#df2360] hover:bg-green-600 transition-all duration-300 px-8 py-4 rounded-[10px] text-white text-lg">
            Explore Recipes
          </button>
        </div>
      </section>

      {/* WHITE CONTENT SECTION */}
      <section className="relative z-30  px-5 lg:px-20">
        <div className="bg-white text-center max-w-6xl mx-auto">
          {/* Small Heading */}
          <p className="mt-10 lg:mt-15 uppercase tracking-[6px] text-gray-500 text-sm">
            Latest Launch
          </p>

          {/* Main Heading */}
          <h2 className="text-2xl lg:text-4xl font-bold mt-5 text-black">
            Drymato
          </h2>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-5 lg:mt-10 mb-10 lg:mb-15">
            <button className="bg-[#df2360] hover:bg-black text-white px-8 py-4  transition-all duration-300">
              DISCOVER
            </button>

            <Link
              to="/contact-us"
              className="border border-black hover:bg-black hover:text-white text-black px-8 py-4 transition-all duration-300 inline-block"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
