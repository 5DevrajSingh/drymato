import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import logo from '../assets/drymato/transparentlogo.png'


function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // 50px scroll ke baad change
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isHomePage
        ? scrolled
          ? "bg-black/40  border-b border-white/10 shadow-lg text-white"
          : "bg-transparent text-white"
        : "bg-black/30 shadow-md text-white"
        //   ? "bg-black/30 backdrop-blur-md shadow-md text-white"
        //   : "bg-transparent text-white"
        // : "bg-black/30 backdrop-blur-md shadow-md text-white"
        }`}
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 overflow-hidden">

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between">

          {/* Logo */}
          <img
            onClick={() => navigate(`/`)}
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain cursor-pointer"
          />

          {/* Desktop Menu */}
          <ul className="flex gap-6 font-semibold">

            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link to="/product" className="hover:text-black">
                Product
              </Link>
            </li>

            <li>
              <Link to="/why-choose-us" className="hover:text-black">
                Why Choose Us
              </Link>
            </li>

            <li>
              <Link to="/about-us" className="hover:text-black">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/our-story" className="hover:text-black">
                Our Story
              </Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-4">

            <Link
              to="/contact-us"
              className="border border-white px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              <Phone size={18} />
              <span className="hidden lg:block">Contact Us</span>
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#24a052] px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:opacity-90 transition-all duration-300"
            >
              <FaWhatsapp size={20} />
              <span className="hidden lg:block">WhatsApp</span>
            </a>

          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex lg:hidden items-center justify-between w-full">

          {/* Left Burger */}
          <button
            className="text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Center Logo */}
          <img
            onClick={() => navigate(`/`)}
            src="/logo2.png"
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />

          {/* Right Icons */}
          <div className="flex items-center gap-2">

            <Link
              to="/contact-us"
              className="border border-white px-6 py-3 flex items-center gap-2 text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              <Phone size={18} />
              <span className="hidden lg:block">Contact Us</span>
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#24a052] p-2 text-white"
            >
              <FaWhatsapp size={18} />
            </a>

          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 pb-5">
          <ul className="flex flex-col gap-4 font-semibold">

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>



            <li>
              <Link to="/product" onClick={() => setMenuOpen(false)}>
                Product
              </Link>
            </li>

            <li>
              <Link to="/why-choose-us" onClick={() => setMenuOpen(false)}>
                Why Choose Us
              </Link>
            </li>

            <li>
              <Link to="/about-us" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>


            <li>
              <Link to="/our-story" onClick={() => setMenuOpen(false)}>
                Our Story
              </Link>
            </li>


          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
