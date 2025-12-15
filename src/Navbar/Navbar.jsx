import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sp-navbar">
      <div className="sp-container">
        <div className="sp-brand">School Project</div>

        <button
          className="sp-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sp-hamburger" />
        </button>

        <ul className={`sp-links ${open ? "open" : ""}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#admissions">Admissions</a></li>
          <li><a href="#classes">Classes</a></li>
          <li><a href="#contact" className="sp-cta">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
