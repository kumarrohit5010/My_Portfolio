import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center g-4">
            <div className="col-12 col-lg-6 order-2 order-lg-1 homemargintop home home-copy">
                <h3>Hello, It's Me</h3>
                <h1>Rohit Kumar Yadav</h1>
                <h3>And, I am a <span className="typing-text">MERN Stack Developer |</span></h3>

                <p>I am a Web Developer with extensive experience for over 2 years.<br/>Expertise is to create and design Website,Frontend design and many more...</p>

                <div className="icons mb-3">
                  <Link to="#"><i className="fa-brands fa-facebook"></i></Link>
                  <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                  <Link to="#"><i className="fa-brands fa-linkedin"></i></Link>
                  <Link to="#"><i className="fa-solid fa-envelope"></i></Link>
                  <Link to="#"><i className="fa-brands fa-square-github"></i></Link>
                </div>
                <Link to="/about"><button className="btn btn-primary btncs">More about me</button></Link>
            </div>
            <div className="col-12 col-lg-6 order-1 order-lg-2 homemargintop hero-column">
                <img className="hero-img img-fluid mx-auto mx-lg-0" src="../images/my.jpeg" alt="hero"></img>
            </div>
        </div>
      </div>
    </>
  );
}

export default Home;
