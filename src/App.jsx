import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './pages/Home';
import Product from "./pages/Product";
import WhyChooseUs from "./pages/WhyChooseUs";
import About from "./pages/AboutUs";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";


function App() {


  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>


      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App
