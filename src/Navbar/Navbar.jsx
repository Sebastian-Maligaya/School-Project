import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/SRCC_logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sp-navbar">
      <div className="sp-container">
        
        <div className="sp-branding">
          <div className="sp-logo">
            <img src={logo} alt="SRCC logo" />
          </div>
          <div className="sp-brand">SRCC</div>
        </div>

        <button
          className="sp-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sp-hamburger" />
        </button>

        <ul className={`sp-links ${open ? "open" : ""}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/admissions">Admissions</Link></li>
          <li><a href="#Classes">Classes</a></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="#Facilities">Facilities</Link></a></li>
          <li><a href="#Clubs">Clubs</a></li>
          <li><a href="#contact" className="sp-cta">Log in</a></li>
        </ul>
      </div>
    </nav>
  );
}
