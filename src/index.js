import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './landingPage/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './landingPage/Homepage';
import About from './landingPage/About/About';
import Services from './landingPage/Services/Services';
import Skills from './landingPage/Skills/Skills';
import Project from './landingPage/Project/Project';
import Contact from './landingPage/Contact/Contact';
import Qualification from './landingPage/Qualification/Qualification';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/Qualification" element={<Qualification/>} />
      <Route path="/project" element={<Project/>} />
      <Route path="/contact" element={<Contact/>} />

    </Routes>
  </BrowserRouter>
);

