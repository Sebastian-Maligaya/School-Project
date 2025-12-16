import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div>

      <header id="home" className="hp-hero">
        <h1>Senator Renato "Compañero" Cayetano Memorial Science and Technology High School</h1>
        <p className="hp-sub">
          "HOME OF THE International CHAMPIONS"
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

        <section id="Achievement" className="hp-section">
          <h2>Achievement</h2>
          <ul>
            <li>Achivement 1</li>
            <li>Achivement 2</li>
            <li>Achivement 3</li>
          </ul>
        </section>

        <section id="Features" className="hp-section">
          <h2>Features</h2>
          <p>Our school Features </p>
          <ul>
           <li>Features 1</li>
           <li>Features 2</li>
           <li>Features 3</li>
          </ul>
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