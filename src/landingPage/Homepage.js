import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Services from './Services/Services';
import Project from './Project/Project';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import Qualification from './Qualification/Qualification';

function Homepage() {
  return (
    <div>
      <Home />
      <About />
      <Services />
      <Skills />
      <Qualification />
      <Project />
      <Contact />
    </div>
  )
}

export default Homepage
