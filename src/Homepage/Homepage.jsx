import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/admissions" className="btn-primary">Apply Now</Link>
        </div>
      </header>

      <main className="hp-main">
        <section id="about" className="hp-section">
          <div className="hp-about-grid">
            <div className="hp-left">
              <h2>About our School</h2>

              <p>The Sunrays stands for the light that illuminates your path in building a temple of immortal souls in the future generations; the Open Book means that anyone may come to engraft a branch of knowledge into the stock of wisdom. The Mountains and Sunrays represents hope of a new beginning.</p>

              <p>The Gear symbolizes technology and know-how in the modern society. The Building represents the City of Taguig of modern infrastructures whilst the White Duck represents Pateros. The Laurel leaves represent the dignity of man and serve as the emblem of victory, of a courageous flight of success.</p>

              <p className="lastp">This is the meaning of our seal, revere it, cherish it, and lives by it always.</p>

              <table className="percentage-data-table">
                <tr className="percentage-data">
                  <td className="number">1200+</td>
                  <td className="number">100+</td>
                  <td className="number">95%</td>
                </tr>
                <tr className="percentage-data">
                  <td className="label">Students</td>
                  <td className="label">Teachers</td>
                  <td className="label">Success Rate</td>
                </tr>
              </table>
            </div>

            <div className="hp-right">
              <img className="about-img" src="https://cdn.britannica.com/19/148619-004-113E7353.jpg" alt="School placeholder" />
            </div>
          </div>

        </section>

        <section id="programs" className="hp-section">

          <div id ="program-page-desc"className="hp-section">
            <h1>Our programs</h1>
           <p>We offer a diverse range of programs designed to nurture <br/>every aspect of your child's development.</p>
          </div>
          
          <div className="hp-programs-gridcards">
            <div className="card">
            <div className="icon">★</div>
            <span className="tag">Random</span>
            <h3 className="title">Card Title</h3>
            <p className="description">
              This is a short description inside the card. You can put any text here.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚙</div>
            <span className="tag">Sample</span>
            <h3 className="title">Another Card</h3>
            <p className="description">
              Cards will automatically move to the next row if space runs out.
            </p>
          </div>

          <div className="card">
            <div className="icon">💡</div>
            <span className="tag">Idea</span>
            <h3 className="title">Third Card</h3>
            <p className="description">
              Flexbox makes layouts responsive without extra work.
            </p>
          </div>
          </div>
        </section>

        <section id="features" className="hp-section hp-gallery">
          <h2>Features</h2>
          <p>Explore our campus and activities.</p>

          <div className="gallery-grid">
            <article className="gallery-item">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop&s=1a1a1a" alt="Students in science lab" />
              <div className="overlay">
                <h3>Science Lab</h3>
                <p>Hands-on experiments and research</p>
              </div>
            </article>

            <article className="gallery-item">
              <img src="https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1200&auto=format&fit=crop&s=2b2b2b" alt="Sports activity" />
              <div className="overlay">
                <h3>Sports</h3>
                <p>Teamwork and physical development</p>
              </div>
            </article>

            <article className="gallery-item">
              <img src="https://images.unsplash.com/photo-1523580494863-6e55d7f7a9b0?q=80&w=1200&auto=format&fit=crop&s=3c3c3c" alt="Library and students reading" />
              <div className="overlay">
                <h3>Library</h3>
                <p>Quiet space for study and research</p>
              </div>
            </article>

            <article className="gallery-item">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop&s=4d4d4d" alt="Campus building" />
              <div className="overlay">
                <h3>Campus</h3>
                <p>Modern facilities and green spaces</p>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="hp-section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:info@school.example">info@school.example</a></p>
        </section>
      </main>

      <footer class="footer">
    <div class="container">
      <div class="footer-content">
        
        
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 SRCMTHS. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </div>
  );
}