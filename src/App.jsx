import { useEffect, useState } from 'react'
import './index.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { motion } from 'framer-motion';
import { useRef } from 'react';
function App() {
  
  const cursorRef = useRef(null);
  
  useEffect(() => {
    const mouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="relative z-0 bg-primary">
    <div className='bg-no-repeat bg-center bg-hero-pattern bg-cover'>
      <Navbar/>
      <Hero/>
      <div 
      className="cursor w-6 h-6 fixed top-0 left-0 z-20 rounded-full  animate-pulse bg-white"
      ref={cursorRef}
      
      
          

    
      />
    </div>
    <About/>
    <Experience/>
    <Tech/>
    <Works/>
    <Feedbacks/>
    <div className = "relative z-0">
      <Contact/>
      <StarsCanvas/>
    </div>
  </div>
  )
}

export default App
