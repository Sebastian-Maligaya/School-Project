

import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import Badicon from "../assets/Badicon.png";
import Bannericon from "../assets/Bannericon.png";
import Bookicon from "../assets/Bookicon.png";
import Monitoricon from "../assets/Monitoricon.png";
import locationicon from "../assets/locationicon.png";
import phoneicon from "../assets/phoneicon.png";
import emailicon from "../assets/emailicon.png";
import HorizontalCard from "./HorizontalCard";
import Gradhat from "../assets/Gradhat.png";



export default function Homepage() {
  return (
    <div className="hp-page">

      <div id="home" className="hp-hero">
        <p className="ABC">Senator Renato "Compañero" Cayetano Memorial Science and Technology High School</p>
        <p className="hp-sub">
          "HOME OF THE INTERNATIONAL CHAMPIONS"
        </p>
        <div>
          <Link to="/admissions" className="btn-primary">Apply Now</Link>
        </div>
      </div>

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

         <div className="hat-line">
         <section class="contact-section">
          <div className="contact-title">
            <span className="line"></span>
            <h2><img src={Gradhat} alt="Graduation Hat" className="sp-brand"/></h2>
            <span className="line"></span>
            
          </div>
         </section>
          </div>

        <section id="programs" className="hp-section">

          <div id ="program-page-desc"className="hp-section">
            <h1>Our programs</h1>
           <p>We offer a diverse range of programs designed to nurture <br/>every aspect of your child's development.</p>
          </div>
          
          <div className="hp-programs-gridcards">
            <div className="card">
            <div className="icon"><img src={Bookicon} alt="Bannericon" className="club-icon"/></div>
            <span className="tag"></span>
            <h3 className="title">Academic Excellence</h3>
            <p className="description">
              Comprehensive curriculum covering all core subjects with advanced placement option
            </p>
          </div>

          <div className="card">  
            <div className="icon"><img src={Bannericon} alt="Bannericon" className="club-icon"/></div>
            <span className="tag"></span>
            <h3 className="title">Holistic Development</h3>
            <p className="description">
              Programs that promote character building, leadership, creativity, and emotional intelligence through co-curricular activities.
            </p>
          </div>

          <div className="card">
            <div className="icon"><img src={Monitoricon} alt="Monitoricon" className="club-icon"/></div>
            <span className="tag"></span>
            <h3 className="title">Technology & Innovation</h3>
            <p className="description">
              Hands-on learning in ICT, coding, robotics, and digital literacy to prepare students for a technology-driven future.
            </p>
          </div>

            <div className="card">
            <div className="icon"><img src={Bannericon} alt="Bannericon" className="club-icon"/></div>
            <span className="tag"></span>
            <h3 className="title">4 Arts, Sports & Wellness</h3>
            <p className="description">
              Opportunities in visual and performing arts, athletics, and health programs that support physical fitness and self-expression.
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

        <section class="contact-section">
          <div class="contact-title">
            <span class="line"></span>
            <h2>Contact Information</h2>
            <span class="line"></span>
          </div>

          <div className="contact-grid">

            <HorizontalCard
            icon={locationicon} 
            title="Location"
            content="Cayetano Sci-Tech Memorial High School, 1001 P. C. Valdez St., Taguig City" />

            <HorizontalCard 
            icon={phoneicon} 
            title="Phone Number"
               content="(02) 8765-4321" />

            <HorizontalCard 
            icon={emailicon} 
            title="Email Address"
               content="info@srcmthscayetano.edu.ph" />

            <HorizontalCard 
            icon={emailicon}
            title="Website" 
               content="www.srcmthscayetano.edu.ph" />
                

              
          </div>
        </section>

        

      </main>

      <footer className="footer">
    <div className="container">
      <div className="footer-content">
        
        
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 SRCMTHS. All rights reserved.</p>
      </div>
    </div>
  </footer>
    </div>
  );
}