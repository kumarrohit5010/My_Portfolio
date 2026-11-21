import React from "react";
import { Link } from "react-router-dom";

function Qualification() {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="serviceHeading mt-5 my-5">
            My <span>Qualifiction</span>
          </h1>
          
          <div className="col-6">
            <div className="card boxQuali">
              <div className="card-body">
                <h5 className="card-title">Nawayug Academy</h5>
                <p className="card-text">UP to SEE.</p>
                <Link to="https://nawayug.edu.np/"   target="_blank" rel="noopener noreferrer" className=" btncsQuali">
                  <span className="qualiSpan" aria-hidden="true"></span>
                  <span className="qualiLabel">More About It.</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
        <div className="row mt-1">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="card boxQuali">
              <div className="card-body">
                <h5 className="card-title">Greenland Secondary School</h5>
                <p className="card-text">+2</p>
                <Link to="https://greenlandcollege.edu.np/" className=" btncsQuali">
                  <span className="qualiSpan" aria-hidden="true"></span>
                  <span className="qualiLabel">More About It</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-1">
          <div className="col-6">
            <div className="card boxQuali">
              <div className="card-body">
                <h5 className="card-title">Purwanchal Engineering Campus-ERC</h5>
                <p className="card-text">Bachelor In Computer Engineering.</p>
                <Link to="https://www.ioepc.edu.np/" className="btncsQuali">
                  <span className="qualiSpan" aria-hidden="true"></span>
                  <span className="qualiLabel">Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-7"></div>
        </div>
      </div>
    </>
  );
}

export default Qualification;
