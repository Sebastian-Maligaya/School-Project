import React, { useState } from 'react'

import StrandCard from '../Homepage/Card';
import "./Facilities.css";
import { Link } from 'react-router-dom';
import placeholder from "../assets/Placeholder.jpg"
import Facilities_Ground_Floor from "../assets/Facilities_Ground_Floor.png";
import Facilities_Second_Floor from "../assets/Facilities_Second_Floor.png";
import Facilities_Third_Floor from "../assets/Facilities_Third_Floor.png";
import Facilities_Fourth_Floor from "../assets/Facilities_Fourth_Floor.png";
import LeftButton from "../assets/Left-Button-removebg-preview.png";
import RightButton from "../assets/Right-Button-removebg-preview.png";

export default function Facilities() {
     const facilitiesImages = [
    Facilities_Ground_Floor,
    Facilities_Second_Floor,
    Facilities_Third_Floor,
    Facilities_Fourth_Floor
  ];

  const facilitiesContent = [
    {
      title: "GROUND FLOOR",
      description: "The ground floor of our facility provides easy access and houses key departments...",
      image: placeholder
    },
    {
      title: "SECOND FLOOR",
      description: "The second floor features modern classrooms and collaborative learning spaces...",
      image: placeholder
    },
    {
      title: "THIRD FLOOR",
      description: "The third floor is dedicated to specialized labs and technical facilities...",
      image: placeholder
    },
    {
      title: "FOURTH FLOOR",
      description: "The fourth floor offers student amenities and recreational areas...",
      image: placeholder
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex(
      currentIndex === facilitiesImages.length - 1
        ? 0
        : currentIndex + 1
    );
  };
  const prevImage = () => {
    setCurrentIndex(
      currentIndex === 0
        ? facilitiesImages.length - 1
        : currentIndex - 1
    );
  };

    return (
        <div className="facilities-container">
            <div className="facilities-title">
                <header>FACILITIES</header>
                <h1>Directory</h1>
            </div>
            <div className="facilities-image">
                <div className="facilities-image-frame">
                    <button className="facility-nav facility-nav-left" onClick={prevImage} aria-label="Previous image">
                        <img src={LeftButton} alt="" aria-hidden="true" />
                    </button>
                    <img className="facility-main-image" src={facilitiesImages[currentIndex]} alt="Facilities" />
                    <button className="facility-nav facility-nav-right" onClick={nextImage} aria-label="Next image">
                        <img src={RightButton} alt="" aria-hidden="true" />
                    </button>
                </div>
                <div className="facility-indicators" aria-label="Image indicators">
                    {facilitiesImages.map((_, index) => (
                        <span
                            key={index}
                            className={`facility-indicator${index === currentIndex ? " is-active" : ""}`}
                        />
                    ))}
                </div>
            </div>
     
            <div className="lani-scholarships-info">


                <div className="facilities-title-section">
                    <h1 className='facilities-title'>{facilitiesContent[currentIndex].title}</h1>
                </div>


                <div className='div-line-facilities'>
                    <header></header>
                </div>

                <div className='content-facilities'>
                    <div className='first-facilities-contnent'>
                        <div className='faciliies-image'>
                            <img src={facilitiesContent[currentIndex].image}></img>
                        </div>
                        <div className='facilities-paragraph'>
                            <p>
                                {facilitiesContent[currentIndex].description}
                            </p>
                        </div>
                    </div>
                    <div className='second-facilities-contnent'>
                        <div className='direction-image'>
                            <h1>Direction</h1>
                            <img src={facilitiesContent[currentIndex].image}></img>
                        </div>
                    </div>
                </div>  


            </div>
            

            
             


        </div>




    )
}

