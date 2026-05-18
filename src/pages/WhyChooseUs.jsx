import { section } from "framer-motion/client";
import React, { useEffect } from "react";
import whyDramato from "../assets/drymato/IMG_8169.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Naturally Dehydrated",
      desc: "No artificial drying shortcuts.",
    },
    {
      title: "No Preservatives",
      desc: "Just real ingredients.",
    },
    {
      title: "Long Shelf Life",
      desc: "Use whenever needed without worrying about spoilage.",
    },
    {
      title: "Less Food Waste",
      desc: "Smart storage means fewer vegetables thrown away.",
    },
    {
      title: "Convenient Cooking",
      desc: "No chopping, peeling, or grinding.",
    },
    {
      title: "Rich Flavor",
      desc: "Dehydration naturally concentrates taste.",
    },
    {
      title: "Small Batch Production",
      desc: "Prepared with care instead of mass factory processing.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div
        className="text-center justify-center items-center"
        data-aos="fade-up"
      >
        <span className="inline-block px-5 py-2 rounded-full bg-[#d94f2b]/10 text-[#d94f2b] text-sm font-semibold tracking-wide mb-6">
          WHY CHOOSE US?
        </span>

        <h2 className="text-4xl md:text-6xl font-bold leading-tight text-[#1c1c1c]">
          Better Ingredients. Better Cooking.
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT IMAGE */}
        <div
          className="relative flex justify-center items-center"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          {/* Background Blur */}
          <div className="absolute w-[450px] h-[450px] bg-[#d94f2b]/10 rounded-full blur-3xl"></div>

          {/* Main Image */}
          <div className="relative z-10 overflow-hidden rounded-[40px] shadow-2xl">
            <img
              src={whyDramato}
              alt="Why Choose Drymato"
              className="w-full max-w-[550px] h-[680px] object-cover hover:scale-105 transition-all duration-700"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute top-10 -right-4 bg-white border border-[#eee] shadow-2xl rounded-3xl px-6 py-5 z-20">
            <h3 className="text-3xl font-bold text-[#d94f2b]">7+</h3>
            <p className="text-sm text-[#555] mt-1">
              Reasons to Choose Drymato
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div data-aos="fade-left">
          <p className="mt-8 text-lg leading-8 text-[#555] max-w-2xl">
            Drymato brings together convenience, flavor, and smart food
            preservation — helping modern kitchens cook faster with less waste
            and more natural goodness.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-[#eee] rounded-3xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* ICON */}
                  <div className="min-w-[45px] h-[45px] rounded-full bg-[#d94f2b]/10 flex items-center justify-center text-[#d94f2b] text-xl font-bold">
                    ✔
                  </div>

                  {/* TEXT */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#1c1c1c]">
                      {item.title}
                    </h3>

                    <p className="text-[#666] mt-2 leading-7">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="w-full flex justify-center sm:justify-end mt-12"
            data-aos="zoom-in"
          >
            {/* BUTTON */}
            <button className="mt-10 bg-[#d94f2b] hover:bg-[#bf4322] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-lg hover:scale-105">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
