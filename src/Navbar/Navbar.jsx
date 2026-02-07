import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/SRCC_logo.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/sign");
  }

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
          {user && <li><Link to="/classes">Classes</Link></li>}
          <li><Link to="/news">News</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/clubs">Clubs</Link></li>

          {/* Role-specific links */}
          {user?.role === "admin" && (
            <li><Link to="/admin">Admin</Link></li>
          )}
          {user?.role === "teacher" && (
            <li><Link to="/teacher">Dashboard</Link></li>
          )}

          {/* Auth links */}
          {user ? (
            <li className="sp-logout-li">
              <button className="sp-logout-btn" onClick={handleLogout}>
                Log out
              </button>
            </li>
          ) : (
            <li><Link to="/sign">Log in</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
}
