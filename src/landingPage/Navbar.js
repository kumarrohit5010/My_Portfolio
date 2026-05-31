import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top borderbtm">
        <div className="container marginnav w-100 navbar-inner">
          <Link className="navbar-brand" to="/home">
            <h4>Portfolio</h4>
          </Link>
          <button
            type="button"
            className="navbar-toggle"
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`navbar-collapse-wrapper ${isMenuOpen ? "is-open" : ""}`}>
            <ul className="navbar-nav ms-auto mb-0 p-0 navwt">
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/home" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/services" onClick={closeMenu}>
                  Services
                </Link>
              </li> 
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/skills" onClick={closeMenu}>
                  Skills
                </Link>
              </li>
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/qualification" onClick={closeMenu}>
                  Qualification
                </Link>
              </li> 
              <li className="nav-item navhover">
                <Link className="nav-link" aria-current="page" to="/project" onClick={closeMenu}>
                  Project
                </Link>
              </li> 
              <li className="nav-item navhover">
               <Link className="nav-link" aria-current="page" to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li> 
            </ul>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
