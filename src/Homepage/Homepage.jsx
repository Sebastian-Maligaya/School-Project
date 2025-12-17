import React from "react";
import "./Homepage.css";

export default function Homepage() {
  return (
    <div className="hp-page">

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
          <div className="hp-about-grid">
            <div className="hp-left">
              <h2>About our School</h2>

              <p>The Sunrays stands for the light that illuminates your path in building a temple of immortal souls in the future generations; the Open Book means that anyone may come to engraft a branch of knowledge into the stock of wisdom. The Mountains and Sunrays represents hope of a new beginning.</p>

              <p>The Gear symbolizes technology and know-how in the modern society. The Building represents the City of Taguig of modern infrastructures whilst the White Duck represents Pateros. The Laurel leaves represent the dignity of man and serve as the emblem of victory, of a courageous flight of success.</p>

              <p>This is the meaning of our seal, revere it, cherish it, and lives by it always.</p>

              <table>
                <tr>
                  <td className="number">1200+</td>
                  <td className="number">100+</td>
                  <td className="number">95%</td>
                </tr>
                <tr>
                  <td className="label">Students</td>
                  <td className="label">Teachers</td>
                  <td className="label">Success Rate</td>
                </tr>
              </table>
            </div>

            <div className="hp-right">
              <img className = "about-img" src="https://cdn.britannica.com/19/148619-004-113E7353.jpg" alt="School placeholder" />
            </div>
          </div>

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