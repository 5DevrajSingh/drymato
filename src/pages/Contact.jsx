import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import contactImage from "../assets/drymato/IMG_8119.PNG";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  // JSON Data Store
  const [allContacts, setAllContacts] = useState([]);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save Data In JSON Array
    const updatedData = [...allContacts, formData];

    setAllContacts(updatedData);

    console.log("Saved JSON Data:", updatedData);

    // Popup Show
    setShowPopup(true);

    // Clear Form
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });

    // Auto Hide Popup
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="w-full min-h-screen bg-[#faf7f2] py-20 px-5 lg:px-20 overflow-hidden">
      {/* Popup */}
      {showPopup && (
        <div className="fixed top-10 right-10 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce">
          Message Sent Successfully ✅
        </div>
      )}
      {/* Heading */}
      <div className="text-center mb-16" data-aos="fade-up">
        <p className="uppercase tracking-[6px] text-gray-500 text-sm">
          Contact Us
        </p>

        <h1 className="text-4xl lg:text-6xl font-bold text-black mt-4">
          Let's Connect
        </h1>

        <p className="text-gray-600 mt-5 max-w-2xl mx-auto leading-relaxed">
          We would love to hear from you. Fill out the form and our team will
          get back to you shortly.
        </p>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-[35px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        {/* LEFT FORM */}
        <div className="p-8 sm:p-10 lg:p-16 flex items-center">
          <div className="w-full">
            {/* Form Heading */}
            <div className="mb-10">
              <p className="uppercase tracking-[5px] text-gray-400 text-sm">
                Get In Touch
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold text-black mt-3">
                Send Us A Message
              </h2>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] transition-all duration-300"
                />

                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] transition-all duration-300"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] transition-all duration-300"
              />

              {/* Phone */}
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] transition-all duration-300"
              />

              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="drymato.com pvt. ltd."
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] transition-all duration-300"
              />

              {/* Message */}
              <textarea
                rows="6"
                type="text"
                value={formData.message}
                onChange={handleChange}
                id="message"
                name="message"
                placeholder="Write Your Message..."
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-[#df2360] resize-none transition-all duration-300"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-[#df2360] hover:bg-black text-white py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
                data-aos="fade-up"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:block relative min-h-full">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25"></div>

          {/* Text */}
          <div className="absolute bottom-10 left-10 z-10 text-white">
            <p className="uppercase tracking-[5px] text-sm">Premium Quality</p>

            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mt-4">
              Fresh Organic
              <br />
              Drymato 🍅
            </h2>

            <p className="mt-5 max-w-md text-white/90 leading-relaxed">
              Naturally sun-dried tomatoes crafted with authentic flavor,
              freshness, and premium farm quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
