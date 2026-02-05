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
          <div className="sp-brand">SRCCMSTHS</div>
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
          <li><Link to="/Classes">Classes</Link></li>
          <li><Link to="/achievements">Achievements</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/clubs">Clubs</Link></li>
          <li><Link to="/sign">Log in</Link></li>
        </ul>
      </div>
    </nav>
  );
}
