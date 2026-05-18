// import React from "react";
// import Hero from "../components/Hero";
// import Process from "./Process";
// import WhyChooseUs from "./WhyChooseUs";

// function Home() {
//   return (
//     <div className="w-full bg-black">

//       {/* HERO */}
//       <section className="sticky top-0 h-screen z-10">
//         <Hero />
//       </section>

//       {/* PROCESS */}
//       <section className="sticky top-0 h-screen z-20">
//         <Process />
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="sticky top-0 h-screen z-30">
//         <WhyChooseUs />
//       </section>

//       {/* EXTRA SPACE FOR LAST SCROLL */}
//       <div className="h-screen bg-black"></div>

//     </div>
//   );
// }

// export default Home;


import React from 'react'
import Hero from '../components/Hero'
import About from './AboutUs'
import Process from './Process'
import OurStory from './OurStory'
import FutureProduct from './FutureProduct'
import WhyChooseUs from './WhyChooseUs'
import Contact from './Contact'
import WhyDrymato from './WhyDrymato'

function Home() {
  return (
    <div className='w-full'>
      <Hero />
      <Process/>
      <WhyDrymato/>
      <WhyChooseUs/>
      <OurStory/>
      <About/>
      
      
    </div>
  )
}

export default Home;