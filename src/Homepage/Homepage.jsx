import React from "react";
import Navbar from "../components/Navbar.jsx";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>
      <Navbar />

      <header id="home" className="hp-hero">
        <h1>Welcome to Our School</h1>
        <p className="hp-sub">
          A friendly, modern template to showcase classes, admissions, and events.
        </p>
        <div>
          <a href="#admissions" className="btn-primary">Apply Now</a>
        </div>
      </header>

      <main className="hp-main">
        <section id="about" className="hp-section">
          <h2>About Us</h2>
          <p>
            We provide a supportive learning environment focused on curiosity and
            student growth. Use this template as a starting point for your school's
            homepage.
          </p>
        </section>

        <section id="classes" className="hp-section">
          <h2>Featured Classes</h2>
          <ul>
            <li>Mathematics — Grades 6–8</li>
            <li>Computer Science — Introduction to Web Development</li>
            <li>Art & Design — Creative Workshops</li>
          </ul>
        </section>

        <section id="admissions" className="hp-section">
          <h2>Admissions</h2>
          <p>Admissions open year-round. Contact our office for more information.</p>
        </section>

        <section id="contact" className="hp-section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:info@school.example">info@school.example</a></p>
        </section>
      </main>

      <footer className="hp-footer">
        © {new Date().getFullYear()} School Project — All rights reserved
      </footer>
    </div>
  );
}