import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";
import logo from "../assets/srcclogotrans.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [schoolOpen, setSchoolOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    function handleScroll() {
      if (!isHomePage) {
        setIsAtTop(false);
        return;
      }
      setIsAtTop(window.scrollY < 10);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  function closeMenus() {
    setOpen(false);
    setSchoolOpen(false);
  }

  function handleLogout() {
    logout();
    closeMenus();
    navigate("/sign");
  }

  function toggleNav() {
    setOpen((v) => {
      const next = !v;
      if (!next) {
        setSchoolOpen(false);
      }
      return next;
    });
  }

  function toggleSchoolMenu() {
    setSchoolOpen((v) => !v);
  }

  return (
    <nav className={`sp-navbar ${isHomePage ? "is-home" : ""} ${isHomePage && isAtTop ? "home-top" : ""}`}>
      <div className="sp-container">
        <Link to="/" className="sp-brand-link" onClick={closeMenus}>
          <div className="sp-branding">
            <div className="sp-logo">
              <img src={logo} alt="SRCC logo" />
            </div>
            <div className="sp-brand">SRCCMSTHS</div>
          </div>
        </Link>

        <button
          className="sp-toggle"
          aria-label="Toggle navigation"
          onClick={toggleNav}
        >
          <span className="sp-hamburger" />
        </button>

        <ul className={`sp-links ${open ? "open" : ""}`}>
          <li><Link to="/" onClick={closeMenus}>Home</Link></li>

          <li className={`sp-dropdown ${schoolOpen ? "open" : ""}`}>
            <button
              className="sp-dropdown-toggle"
              type="button"
              onClick={toggleSchoolMenu}
              aria-expanded={schoolOpen}
              aria-haspopup="true"
            >
              <span>Our School</span>
              <span className="sp-caret" aria-hidden="true" />
            </button>
            <ul className="sp-dropdown-menu">
              <li><Link to="/our-school/history" onClick={closeMenus}>History</Link></li>
              <li><Link to="/our-school/mission-vision" onClick={closeMenus}>Mission and Vision</Link></li>
              <li><Link to="/our-school/deped-philosophy" onClick={closeMenus}>DepEd Philosophy</Link></li>
              <li><Link to="/our-school/student-handbook" onClick={closeMenus}>Student Handbook</Link></li>
              <li><Link to="/our-school/office-school-head" onClick={closeMenus}>Office of School Head</Link></li>
            </ul>
          </li>

          <li><Link to="/admissions" onClick={closeMenus}>Admissions</Link></li>
          {user && <li><Link to="/classes" onClick={closeMenus}>Classes</Link></li>}
          <li><Link to="/news" onClick={closeMenus}>News</Link></li>
          <li><Link to="/facilities" onClick={closeMenus}>Facilities</Link></li>
          <li><Link to="/clubs" onClick={closeMenus}>Clubs</Link></li>

          {user?.role === "admin" && (
            <li><Link to="/admin" onClick={closeMenus}>Admin</Link></li>
          )}
          {user?.role === "teacher" && (
            <li><Link to="/teacher" onClick={closeMenus}>Dashboard</Link></li>
          )}

          {user ? (
            <li className="sp-logout-li sp-no-separator">
              <button className="sp-logout-btn" onClick={handleLogout}>
                Log out
              </button>
            </li>
          ) : (
            <li className="log-in sp-no-separator">
              <Link to="/sign" onClick={closeMenus}>
                <span className="button-text">Log in</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
