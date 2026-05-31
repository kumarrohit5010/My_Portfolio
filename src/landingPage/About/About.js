import React from "react";
import ResumeBtn from "../ResumeBtn";

function About() {
  return (
    <div className="container my-5 mb-5">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-4 order-2 order-lg-1 aboutmargintop text-center">
          <img src="../images/mine.jpeg" className="hero-img img-fluid mx-auto" alt="myimg"></img>
        </div>
        <div className="col-12 col-lg-8 order-1 order-lg-2 about aboutmargintop">
          <h2 className="about-heading">
            About <span style={{color:"#0ef"}}>Me</span>
          </h2>
          <h4 className="typing-text">MERN Stack Developer</h4>
          <p className="mt-3">
            I am a MERN Stack Developer specializing in MongoDB, Express.js,
            React.js, and Node.js. I build responsive, user-friendly, and
            scalable web applications with a focus on clean code, performance,
            and seamless user experiences. I am passionate about learning new
            technologies and creating impactful digital solutions.
          </p>
          <a href="/contact"><button className="btn btn-primary btncsAbout">Contact Me.</button></a> 
          <a href="/about" className="btnCv"><ResumeBtn /></a>
        </div>
      </div>
    </div>
  );
}

export default About;
