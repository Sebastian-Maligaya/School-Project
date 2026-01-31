import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import "./Clubs.css";
import icon_placeholder from "../assets/icon_placeholder.png";
import { Link } from 'react-router-dom';

export default function Clubs() {
    return (
        <div className="clubs-container">
            <div className='Page-Header'>
            <div className="clubs-title">
                <header>CLUBS</header>  
            </div>
           
            <section class="contact-admission-section">
                <div class="contact-title1">
                    <span class="admission-line1"></span>
                </div>
            </section>
            </div>
            
            <div className="clubs-list">
                <h1>MATHEMATICS DEPARTMENT</h1>
                <div className="department-icons">
                    <a
                        href="https://www.facebook.com/srccict"
                        target="_blank"
                        rel="noreferrer"
                        className="club-button"
                    >
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </a>
                </div>

                <h1>ENGLISH DEPARTMENT</h1>
                <div className="department-icons">
                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>
                </div>
                <h1>FILIPINO DEPARTMENT</h1>
                <div className="department-icons">
                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>
                </div>

                <h1>SOCIAL DEPARTMENT</h1>
                <div className="department-icons">
                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>

                    <Link to="#" className="club-button">
                        <img src={icon_placeholder} alt="icon" className="club-icon" />
                    </Link>
                </div>        
            </div>
        </div>
    )
}

