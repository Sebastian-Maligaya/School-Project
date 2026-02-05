import React from 'react';
import "../Homepage/Homepage.css";
import "./Clubs.css";
// Import your actual logo images here
// import sipnayanLogo from "../assets/sipnayan.png"; 

export default function Clubs() {
    const departments = [
        {
            name: "MATHEMATICS DEPARTMENT",
            clubs: [
                { name: "SIPNAYAN CLUB", logo: "src/assets/sipnayan_club.jpg", link: "https://www.facebook.com/SipnayanClubSRCC" }
            ]
        },
        {
            name: "ENGLISH DEPARTMENT",
            clubs: [
                { name: "ENGLISH CLUB", logo: "src/assets/english_club.jpg", link: "https://www.facebook.com/EnglishClubSRCC?rdid=91VRZHpw4o2Pm4wU&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F189wvvYCFV%2F#" },
                { name: "EL COMPAÑERO", logo: "src/assets/elcompanero_club.jpg", link: "https://www.facebook.com/share/1CsNwFxoMP/" },
                { name: "TEATRO COMPAÑERO", logo: "src/assets/teatro_club.jpg", link: "https://www.facebook.com/share/189wvvYCFV/" },
                { name: "ATHENAEUM ARCHIVE", logo: "src/assets/athenaeum_club.jpg", link: "https://www.facebook.com/profile.php?id=61578071344580" },
            ]
        },
        {
            name: "FILIPINO DEPARTMENT",
            clubs: [
                { name: "KAPISANAN SA FILIPINO", logo: "src/assets/filipino_club.jpg", link: "https://www.facebook.com/profile.php?id=61578749867316 " },
                { name: "EVIDENTE", logo: "src/assets/evidente_club.jpg", link: "https://www.facebook.com/profile.php?id=100067499314699" },
                { name: "ATHENAEUM", logo: "src/assets/athenaeum_club.jpg", link: "https://www.facebook.com/profile.php?id=61578071344580" },
            ]
        },
        // Add Social Sciences, Science, Mapeh, and ICT here...
        {
            name: "SOCIAL SCIENCES DEPARTMENT",
            clubs: [
            {name: "SOCIAL STUDIES CLUB", logo: "src/assets/ssc_club.jpg", link: "https://www.facebook.com/share/1MoK4WfmKX/" },
            {name: "SRCC - CAT", logo: "src/assets/cat_org.jpg", link: "https://www.facebook.com/SRCCMSTHSCAT" },
            {name: "BKD-NDEP", logo: "src/assets/bkd_club.jpg", link: " https://www.facebook.com/share/1C4NWoduwe/" },
            {name: "CIC-CCR", logo: "src/assets/cic_club.jpg", link: "  https://www.facebook.com/share/1CbbGRtjqY/" },
            {name: "ROVER SCOUTS", logo: "src/assets/sangtuklas_club.jfif", link: " https://www.facebook.com/share/17xbWh8Jcy/" },
            {name: "SENIOR SCOUTS", logo: "src/assets/rover_club.jfif", link: " https://www.facebook.com/profile.php?id=100087055287138" },
    ]
        },
        {
            name: "SCIENCE DEPARTMENT",
            clubs: [
            {name: "SCIENCE CLUB", logo: "src/assets/science_club.jpg", link: "https://www.facebook.com/share/1CCKaB5N5Z/" },
            {name: "YES-CO", logo: "src/assets/yesco_club.jpg", link: "https://www.facebook.com/srcc.yesco" },
            {name: "ROBOTICS CLUB", logo: "src/assets/robotics_club.jpg", link: " https://www.facebook.com/profile.php?id=100090305843850" },
            ]
        },
        {
            name: "MAPEH DEPARTMENT",
            clubs: [
            {name: "SPORTS CLUB", logo: "src/assets/sportsclub_2.jpg", link: "https://www.facebook.com/profile.php?id=61565010521139" },
            {name: "PILIPINTURA", logo: "src/assets/pilipintura_club.jpg", link: "https://www.facebook.com/profile.php?id=61551558302229" },
            {name: "DRUM AND LYRE CORPS", logo: "src/assets/drumandlyre_club.jpg", link: " https://www.facebook.com/profile.php?id=100089693978452" },
            {name: "RESONARE CLUB", logo: "src/assets/resonare_club.jpg", link: " https://www.facebook.com/profile.php?id=61578210522673" },
            ]
        },
    ];

    return (
        <div className="clubs-container">
            <div className='Page-Header'>
                <div className="clubs-title">
                    <header>CLUBS</header>
                </div>
                <div className="admission-line-separator"></div>
            </div>

            <div className="clubs-list">
                {departments.map((dept, index) => (
                    <div key={index} className="department-section">
                        <h1 className="dept-name">{dept.name}</h1>
                        <div className="department-icons">
                            {dept.clubs.map((club, cIndex) => (
                                <div key={cIndex} className="club-item">
                                    <a 
                                        href={club.link} 
                                        target="_blank" 
                                        rel="noreferrer" 
                                        className="club-button"
                                    >
                                        <img src={club.logo} alt={club.name} className="club-icon" />
                                    </a>
                                    <span className="club-label">{club.name}</span>
                                </div>
                            ))}
                        </div>
                        {index !== departments.length - 1 && <hr className="dept-divider" />}
                    </div>
                ))}
            </div>
        </div>
    );
}