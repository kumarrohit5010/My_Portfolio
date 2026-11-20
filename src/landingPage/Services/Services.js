import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="container servicemargin">
        <div className="row mt-5 my-5 g-4 ">
          <h1 className="serviceHeading">
            My <span>Services</span>
          </h1>
          <div className="col-12 col-md-6 col-lg-4 mt-4 ">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    🧑🏽‍💻
                  </Link>
                </div>
                <h5 className="card-title">Full Stack Web Development</h5>
                <p className="card-text ">
                  Build complete web applications using MongoDB, Express.js,
                  React.js, and Node.js with scalable architecture and modern
                  UI.
                </p>
                <a
                  href="https://www.geeksforgeeks.org/blogs/what-is-full-stack-development/"
                  className="btn btn-primary btncsServ"
                  target="_blank"
                  rel="noreferrer"
                >
                  learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    <i className="fa-solid fa-code"></i>
                  </Link>
                </div>
                <h5 className="card-title">Frontend Development</h5>
                <p className="card-text">
                  Create responsive and interactive user interfaces using
                  React.js, Bootstrap, Tailwind CSS, HTML, CSS, and JavaScript
                </p>
                <a
                  href="https://www.geeksforgeeks.org/blogs/front-end-development/"
                  className="btn btn-primary btncsServ"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mt-4">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    ⚙️
                  </Link>
                </div>
                <h5 className="card-title">Backend & API Development</h5>
                <p className="card-text">
                  Develop secure RESTful APIs, authentication systems, and
                  server-side logic using Node.js and Express.js.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 ">
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card box ">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    🗄️
                  </Link>
                </div>
                <h5 className="card-title">Database Design & Management</h5>
                <p className="card-text">
                  Design and manage MongoDB databases with optimized schemas,
                  indexing, and efficient data handling.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card box ">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    🔒
                  </Link>
                </div>
                <h5 className="card-title">Authentication & Security</h5>
                <p className="card-text">
                  Implement JWT authentication, role-based access control,
                  password encryption, and secure user management.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    🛒
                  </Link>
                </div>
                <h5 className="card-title">E-Commerce Development</h5>
                <p className="card-text">
                  Build online stores with product management, shopping carts,
                  payment integration, and order tracking.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 ">
          <div className="col-12 col-md-6 col-lg-4 ">
            <div className="card box ">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    👤
                  </Link>
                </div>
                <h5 className="card-title">Dashboard & Admin Panels</h5>
                <p className="card-text">
                  Create powerful admin dashboards with analytics, charts, user
                  management, and data visualization.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-5">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    ☁️
                  </Link>
                </div>
                <h5 className="card-title">Deployment & Maintenance</h5>
                <p className="card-text">
                  Deploy applications on cloud platforms and provide ongoing
                  updates, optimization, and bug fixes.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="card box">
              <div className="card-body">
                <div className="iconsServ mt-3 mb-3">
                  <Link to="#" style={{ fontSize: "45px" }}>
                    🚀
                  </Link>
                </div>
                <h5 className="card-title">Performance Optimization</h5>
                <p className="card-text">
                  Optimize web applications for faster loading, better user
                  experience, SEO improvement, and scalable performance.
                </p>
                <Link to="#" className="btn btn-primary btncsServ">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
