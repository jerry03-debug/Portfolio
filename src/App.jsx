import { useState } from 'react'
import './App.css'
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="relative z-0 bg-primary">
    <div className='bg-no-repeat bg-center bg-hero-pattern bg-cover'>
      <Navbar/>
      <Hero/>
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
