import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Services from '../Pages/Services';
import OurPortfolio from '../Pages/Ourportfolio';


const Navigation = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="portfoliout" element={<OurPortfolio />} />
      <Route path="contact" element={<Contact />} />
      
    </Routes>
    </>
  );
}

export default Navigation;
