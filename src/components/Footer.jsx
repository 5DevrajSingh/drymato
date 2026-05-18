import React from "react";
import logo from "../assets/drymato/transparentlogo.png"
import {
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigation
  return (
    <footer className="bg-[#0f0f0f] text-white pt-20">

      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 pb-14 border-b border-white/10">

          {/* LOGO + TAGLINE */}
          <div className="lg:col-span-2">

            <img
            onClick={() => navigate(`/`)}
            src={logo}
            alt="Logo"
            className="h-15 w-auto cursor-pointer"
          />

            {/* <h2 className="text-4xl md:text-5xl font-bold mb-5">
              DRY<span className="text-red-500">MATO</span>
            </h2> */}

            <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
              Cook smarter with naturally dried kitchen essentials
              made for modern homes and healthy cooking.
            </p>

            {/* TAGLINES */}
            <div className="space-y-3">

              {[
                "Naturally Dried. Naturally Better.",
                "No Chopping. No Spoilage. No Stress.",
                "Small Batch Goodness.",
                "Everyday Kitchen Essentials.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <p>{item}</p>
                </div>
              ))}

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="/" className="hover:text-white transition">
                Home
              </a>

              <a href="/about" className="hover:text-white transition">
                About
              </a>

              <a href="/products" className="hover:text-white transition">
                Products
              </a>

              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>

            </div>
          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <a
                href="tel:+918000897238"
                className="flex items-start gap-4 text-gray-400 hover:text-white transition"
              >
                <FaPhoneAlt className="mt-1 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p>+91 8000897238</p>
                </div>
              </a>

              <a
                href="mailto:yourmail@example.com"
                className="flex items-start gap-4 text-gray-400 hover:text-white transition"
              >
                <MdEmail className="mt-1 text-red-500 text-xl" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p>required</p>
                </div>
              </a>

              <a
                href="https://instagram.com/drymato_"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 text-gray-400 hover:text-white transition"
              >
                <FaInstagram className="mt-1 text-red-500" />
                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p>@drymato_</p>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/5 mt-10">

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Drymato. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <a href="/" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="/" className="hover:text-white transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;