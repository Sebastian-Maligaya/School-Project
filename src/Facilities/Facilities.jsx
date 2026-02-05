import React, { useState } from 'react'
import "../Homepage/Homepage.css"
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
            <div className="facilities-list"> 
                <table className='buttons-facility'>
                    <tr className='button-table-1'>
                        <td><Link to="#"><button className="facility-button">Lani Scholarships</button></Link></td>
                        <td><Link to="#"><button className="facility-button">Library</button></Link></td>
                        <td><Link to="#"><button className="facility-button">Audio Visual Room</button></Link></td>
                    </tr>
                    <tr className='button-table-2'>
                        <td><button className="facility-button">Canteen</button></td>
                        <td><button className="facility-button">Gymnasium</button></td>
                        <td><button className="facility-button">Clinic</button></td>
                    </tr>
                    <tr className='button-table-3'>
                        <td><button className="facility-button">Guidance Office</button></td>
                        <td><button className="facility-button">Multipurpose Hall</button></td>
                        <td><button className="facility-button">Dormitory</button></td>
                    </tr>
                </table>
            </div>
            <div className="lani-scholarships-info">


                <div className="facilities-title-section">
                    <h1 className='facilities-title'>LANI SCHOLARSHIP</h1>
                </div>


                <div className='div-line-facilities'>
                    <header></header>
                </div>

                <div className='content-facilities'>
                    <div className='first-facilities-contnent'>
                        <div className='faciliies-image'>
                            <img src={placeholder}></img>
                        </div>
                        <div className='facilities-paragraph'>
                            <p>
                                The LANI Scholarship Program is a prestigious scholarship initiative established by the LANI Foundation, dedicated to providing financial assistance and support to deserving students pursuing higher education. The program aims to empower individuals from diverse backgrounds by offering scholarships that cover tuition fees, books, and other educational expenses. Through this scholarship, the LANI Foundation seeks to foster academic excellence, promote equal opportunities, and contribute to the development of future leaders in various fields. Recipients of the LANI Scholarship are selected based on their academic achievements, leadership potential, and commitment to community service, ensuring that the program not only supports education but also nurtures well-rounded individuals who can make a positive impact on society.
                            </p>
                        </div>
                    </div>
                    <div className='second-facilities-contnent'>
                        <div className='direction-image'>
                            <h1>Direction</h1>
                            <img src={placeholder}></img>
                        </div>
                    </div>
                </div>  


            </div>
            

            
             


        </div>




    )
}

