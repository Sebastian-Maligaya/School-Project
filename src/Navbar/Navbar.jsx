import React, { useState } from "react";
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
          <li><a href="#home">Home</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#Classes">Classes</a></li>
          <li><a href="#News">News</a></li>
          <li><a href="#Facilities">Facilities</a></li>
          <li><a href="#Clubs">Clubs</a></li>
          <li><a href="#contact" className="sp-cta">Log in</a></li>
        </ul>
      </div>
    </nav>
  );
}
