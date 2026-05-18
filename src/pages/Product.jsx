import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

 const currentProducts = [
    {
      id: 1,
      title: "Sun-Dried Tomatoes",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1000&auto=format&fit=crop",
    },

    {
      id: 2,
      title: "Tomato Powder",
      image:
        "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?q=80&w=1000&auto=format&fit=crop",
    },

    {
      id: 3,
      title: "Onion Powder",
      image:
        "https://www.shutterstock.com/image-photo/red-onion-cut-half-isolated-260nw-2640205437.jpg",
    },

    {
      id: 4,
      title: "Garlic Powder",
      image:
        "https://t3.ftcdn.net/jpg/04/03/29/38/360_F_403293835_yv2pImRN8zbKmsNp0pwXxvrVKSlfkZtZ.jpg",
    },
  ];

const Product = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });

    AOS.refreshHard();
  }, []);

 

  const comingSoon = [
    "Dried Onion",
    "Dried Garlic",
    "Onion Powder",
    "Garlic Powder",
    "Beetroot Powder",
    "Carrot Powder",
    "More dehydrated vegetables",
    "More natural vegetable powders",
    "Smart kitchen essentials",
  ];

  return (
    <section className="w-full py-20 px-5 lg:px-20 bg-[#faf7f2] overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-16"
      data-aos="fade-up">

        <p className="uppercase tracking-[6px] text-gray-500 text-sm">
          OUR PRODUCTS
        </p>

        <h1 className="text-4xl lg:text-6xl font-bold text-black mt-4">
          Current Range
        </h1>

        <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
          Premium dehydrated products crafted with authentic taste,
          natural ingredients, and rich everyday flavor.
        </p>

      </div>

      {/* Current Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8"
       data-aos="fade-up"
        data-aos-delay="200">

        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-[30px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
          >

            {/* Image */}
            <div className="h-72 overflow-hidden">

              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
              />

            </div>

            {/* Content */}
            <div className="p-6 text-center">

              <h2 className="text-2xl font-bold text-black">
                {product.title}
              </h2>

            </div>

          </div>
        ))}

      </div>

      {/* Coming Soon Section */}
      <div className="mt-24 bg-white rounded-[35px] p-8 lg:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">

        {/* Heading */}
        <div className="text-center mb-12">

          <p className="uppercase tracking-[6px] text-gray-500 text-sm" data-aos="fade-left">
            Coming Soon 🚀
          </p>

          <h2 className="text-3xl lg:text-5xl font-bold text-black mt-4" data-aos="fade-right">
            Expanding Our Natural Product Range
          </h2>

        </div>

        {/* Small Boxes */}
        <div className="flex flex-wrap justify-center gap-4" data-aos="fade-up">

          {comingSoon.map((item, index) => (
            <div
              key={index}
              className="px-6 py-3 rounded-full bg-[#fff3f3] border border-[#ffd9d9] text-[#df2360] font-medium hover:bg-[#df2360] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Product;