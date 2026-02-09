
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import StrandCard from '../Homepage/Card';
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
import Placeholder from "../assets/Placeholder.jpg"
import Sports from "../assets/Sports.png"
import Librarycard from "../assets/Librarycard.jpg"
import Footer from "../Footer/Footer";
import Rian from "../assets/Rian.png"
import Arturo from "../assets/Arturo.png"

export default function Homepage() {
  const [visible, setVisible] = useState(false); // track if table is in view
  const tableRef = useRef(null);

  // IntersectionObserver to detect when table enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // trigger animation
          observer.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.3 } // 30% of table must be visible
    );

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => observer.disconnect();
  }, []);
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
              <p>Established through the initiative of Congressman Alan Peter S. Cayetano via House Bill No. 4448 in 2002, the Sen. Renato “Compañero” Cayetano Memorial Science and Technology High School (SRCCMSTHS) was created to provide elite, free science and technology education to deserving public school students in Taguig and Pateros. </p>
              <p>After securing a 5,000-square-meter site in Pamayanang Diego Silang and constructing two four-story buildings, the school received official DepEd approval in September 2004.</p>
              <p className="lastp">Following a rigorous admission process that selected only 146 inaugural students, the institution—renamed in honor of the late Senator Renato Cayetano—began its operations on June 6, 2005. Today, "SRCC" serves as a premier academic hub focused on Science, Mathematics, and Communication Arts, aiming to produce "Compañeros" and "Compañeras" who can compete with the best private institutions in the country.</p>

              <table className="percentage-data-table" ref={tableRef}>
                <tbody>
                  <tr className="percentage-data">
                    <td className="number">
                      {visible ? <CountUp start={0} end={1200} duration={2} delay={0} /> : 0}+
                    </td>
                    <td className="number">
                      {visible ? <CountUp start={0} end={100} duration={2} delay={0.3} /> : 0}+
                    </td>
                    <td className="number">
                      {visible ? <CountUp start={0} end={95} duration={2} delay={0.6} /> : 0}%
                    </td>
                  </tr> 
                  <tr className="percentage-data">
                    <td className="label">Students</td>
                    <td className="label">Teachers</td>
                    <td className="label">Success Rate</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="hp-right">
              <img className="about-img" src="https://cdn.britannica.com/19/148619-004-113E7353.jpg" alt="School placeholder" />
            </div>
          </div>

        </section>
        <section>
          <div className="Vision-Mission">
            <div className="mv-top">
              <div className="divider"></div>
              <div className="mv-box">
                <h2>Our Mission</h2>
                <p>
                  We shall achieve academic excellence in the field of science and
                  technology by developing globally competitive students determined
                  to cope in a technology-oriented society dedicated to God.
                </p>
              </div>

              <div className="divider"></div>
              <div className="mv-box">
                <h2>Our Vision</h2>
                <p>
                  We shall emerge as the premier school of science and technology in
                  the National Capital Region with pro-active leadership providing
                  quality technical education to our learners thereby developing
                  their full potentials and producing academically excellent and
                  morally upright individuals.
                </p>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="mv-bottom">
            
              {/* Image */}
              <img src={Rian} alt="George P. Tizon" className="mv-image" />
              <img src={Arturo} alt="George P. Tizon" className="mv-image-2" />

              {/* Text content */}
              <div className="mv-bottom-content-content">
                <span className="mv-bottom-content">
                  <h3>RIAN A. LORIEGA</h3>
                  <h1>Assistant Schools Division Superintendent</h1>
                  <h2>Officer-In-Charge</h2>
                  <h2>Office of the School Principal</h2>
                </span>
                <span className="mv-bottom-content-2">
                  <h3>ARTURO A. TOLENTINO</h3>
                  <h1>Assistant Schools Division Superintendent</h1>
                  <h2>Officer-In-Charge</h2>
                  <h2>Office of the School Principal</h2> 
                </span>
              </div>
            </div>
          </div>

        </section>




        <section id="programs" className="hp-section-card">

          <div id="program-page-desc" className="hp-section-card">
            <h1>Our programs</h1>
            <p>We offer a diverse range of programs designed to nurture <br />every aspect of your child's development.</p>
          </div>

          <div className="hp-programs-gridcards">
            <div className="card">
              <div className="icon"><img src={Bookicon} alt="Bannericon" className="club-icon" /></div>
              <span className="tag"></span>
              <h3 className="title">Academic Excellence</h3>
              <p className="description">
                Comprehensive curriculum covering all core subjects with advanced placement option
              </p>
            </div>

            <div className="card">
              <div className="icon"><img src={Bannericon} alt="Bannericon" className="club-icon" /></div>
              <span className="tag"></span>
              <h3 className="title">Holistic Development</h3>
              <p className="description">
                Programs that promote character building, leadership, creativity, and emotional intelligence through co-curricular activities.
              </p>
            </div>

            <div className="card">
              <div className="icon"><img src={Monitoricon} alt="Monitoricon" className="club-icon" /></div>
              <span className="tag"></span>
              <h3 className="title">Technology & Innovation</h3>
              <p className="description">
                Hands-on learning in ICT, coding, robotics, and digital literacy to prepare students for a technology-driven future.
              </p>
            </div>

            <div className="card">
              <div className="icon"><img src={Bannericon} alt="Bannericon" className="club-icon" /></div>
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
              <img src={Sports} alt="Sports activity" />
              <div className="overlay">
                <h3>Sports</h3>
                <p>Teamwork and physical development</p>
              </div>
            </article>

            <article className="gallery-item">
              <img src={Librarycard} alt="Library and students reading" />
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

       
         

         
       


      </main>
      <Footer />
    
    </div>
  );
}