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
import lanipicture from "../assets/lani-scholarship.png"
import clinic from "../assets/clinic.png";
import csslab from "../assets/css-lab.png";
import auditorium from "../assets/auditorium.png"
import liblary from "../assets/liblary.png"
import skylab from "../assets/skylab.png"
import canteen from "../assets/canteen.jpg"
import adminoffice from "../assets/adminoffice.jpg"
import maclab from "../assets/maclab.png"
import guidanceoffice from "../assets/guidanceoffice.png"

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
      twoimage: adminoffice,
      twoheader:"Admin Office",
      twodescription: "The Administrative Office serves as the central hub of operations and management within the institution. It is responsible for handling official records, processing documents, coordinating communication, and providing administrative support to students, teachers, staff, and visitors.",
      threeimage: clinic,
      threeheader:"Clinic",
      threedescription: "The School     Clinic is a place within the school campus wherein primary care is rendered to a sick patient. The school health services are vitally necessary in order to provide first aid and triage for illness and injuries, to provide direct services for students with special needs, and to provide health counseling and education for students, and staff. ",
      fourimage: canteen,
      fourheader:"Canteen",
      fourdescription: "The school canteen is the main source of food and beverages for the students, teachers, staff, and visitors. The canteen consists of two rooms, a carinderia and a designated room for sari-sari stores. The canteen is open from 7 AM to 4 PM.",
      fiveimage: maclab,
      fiveheader:"MAC Lab",
      fivedescription: "The MAC Lab or Multimedia Arts Cyber Lab is a specialized computer room for Multimedia Arts . As a project by the Taguig Government, it aims to develop  student's 21st Century Skills like media and technology literacy. As an Apple Authorized Training Centre for Education, our school can build a bridge between students and real-world careers.",
      siximage: csslab,
      sixheader:"CSS Lab",
      sixdescription: "The CSS Lab, also known as the Electronics Shop, is a computer room used to train ICT students and hold ICT-related activities. The lab consists of fully-functional and advanced computer hardware from servers to high-end personal computers provided by the Department of Education.  ",
      sevenimage: guidanceoffice,
      sevenheader:"Guidance Office",
      sevendescription: "The Guidance Office serves as a supportive and nurturing space dedicated to promoting students’ academic, personal, social, and emotional development. It provides counseling services, guidance programs, and interventions that help students understand themselves better, manage challenges, and make informed decisions about their education and future careers.",
      

    },
    {
      title: "SECOND FLOOR",
      header: "L.A.N.I. Scholarship Program",
        description: [
            <p key="p1">
                Mayor Ma. Laarni Cayetano committed that under her leadership, all Taguigeños
                are special and should be given fair opportunities to study, find work, and
                build a brighter future.
            </p>,

            <p key="p2">
                “Lahat ng Taguigeño ay VIP at walang maiiwanan. Lahat may oportunidad.”
            </p>,

            <p key="p3">
                She also believes that education is a crucial key to social progress and
                human development. Hence, the comprehensive Taguig City Scholarship Program
                was established under the Lifeline Assistance for Neighbors In-need (L.A.N.I.)
                Program.
            </p>,


],
      image: lanipicture,
      secondimage: placeholder,
      
      
    },
    {
      title: "THIRD FLOOR",
      header: "Auditorium",
      description: "Our school's auditorium is a venue for the special events that are conducted in school. The auditorium has a balcony that offers more seats in which special chairs are allotted for special guests. ",
      image: auditorium,
      secondheader: "School Library",
      seconddescription:"The School Library is a student's takeaway in their pursuit of knowledge and mental recreation. The library is filled with written works of different subjects from academics to classical literature. It also contains different works by the students throughout the school's history. Students and teachers are also free to play board games like Chess as long as proper library etiquettes are followed.",
      secondimage: liblary,
      
    },
    {   
      title: "FOURTH FLOOR",
      header: "Sky Lab",
      description: "The Sky Lab is a modern and advanced science room used to teach STEM-related subjects. Equipped with high-end equipment and a modern lab twist with the interior, the Sky Lab provides an environment to bring out one's curiosity and passion on science. Science lab equipment allows students to interact directly with the data gathered. They get a first-hand learning experience by performing various experiments on their own. It is also found that school science lab equipment and supplies make teaching and learning easy both for the teachers, as well as for the students.",
      image: skylab,
      
      
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const getFloorCards = () => {
    if (currentIndex === 0) {
      // Ground Floor - 6 cards
      return [
        { header: facilitiesContent[currentIndex].twoheader, image: facilitiesContent[currentIndex].twoimage, description: facilitiesContent[currentIndex].twodescription },
        { header: facilitiesContent[currentIndex].threeheader, image: facilitiesContent[currentIndex].threeimage, description: facilitiesContent[currentIndex].threedescription },
        { header: facilitiesContent[currentIndex].fourheader, image: facilitiesContent[currentIndex].fourimage, description: facilitiesContent[currentIndex].fourdescription },
        { header: facilitiesContent[currentIndex].fiveheader, image: facilitiesContent[currentIndex].fiveimage, description: facilitiesContent[currentIndex].fivedescription },
        { header: facilitiesContent[currentIndex].sixheader, image: facilitiesContent[currentIndex].siximage, description: facilitiesContent[currentIndex].sixdescription },
        { header: facilitiesContent[currentIndex].sevenheader, image: facilitiesContent[currentIndex].sevenimage, description: facilitiesContent[currentIndex].sevendescription }
      ];
    } else if (currentIndex === 1) {
      // Second Floor - 1 card with array description
      return [
        { header: facilitiesContent[currentIndex].header, image: facilitiesContent[currentIndex].image, description: facilitiesContent[currentIndex].description, isArray: true }
      ];
    } else if (currentIndex === 2) {
      // Third Floor - 2 cards
      return [
        { header: facilitiesContent[currentIndex].header, image: facilitiesContent[currentIndex].image, description: facilitiesContent[currentIndex].description },
        { header: facilitiesContent[currentIndex].secondheader, image: facilitiesContent[currentIndex].secondimage, description: facilitiesContent[currentIndex].seconddescription }
      ];
    } else {
      // Fourth Floor - 1 card
      return [
        { header: facilitiesContent[currentIndex].header, image: facilitiesContent[currentIndex].image, description: facilitiesContent[currentIndex].description }
      ];
    }
  };

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
            <div className="facilities-layout">

                <div className="facilities-left">
                    <div className="facilities-title-section">
                        <h1 className="facilities-title">
                            {facilitiesContent[currentIndex].title}
                        </h1>
                    </div>

                    <div className="div-line-facilities">
                        <header></header>
                    </div>

                    <div className="facilties-subtitle-section">
                        <h2 className="facilities-subtitle">Notable Facilities</h2>
                    </div>

                    <div className="ground-floor-cards-grid">
                        {getFloorCards().map((card, idx) => (
                            <div
                                key={`${currentIndex}-${idx}`}
                                className="facility-card"
                            >
                                <div className="facility-card-header">
                                    <img src={card.image} alt={card.header} />
                                </div>
                                <div className="facility-card-content">
                                    <h3>{card.header}</h3>
                                    {card.isArray ? (
                                        <div>{card.description}</div>
                                    ) : (
                                        <p>{card.description}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="facilities-right">
                    <div className="facilities-title-start">
                        <h1>FACILITIES</h1>
                    </div>

                    <div className="div-line-facilities">
                        <header></header>
                    </div>

                    <div className="facilities-subtitle-first">
                        <h2>Directory</h2>
                    </div>

                    <div className="facilities-image">
                        <div className="facilities-image-frame">
                            <button
                                className="facility-nav facility-nav-left"
                                onClick={prevImage}
                            >
                                <img src={LeftButton} alt="" />
                            </button>

                            <img
                                className="facility-main-image"
                                src={facilitiesImages[currentIndex]}
                                alt="Facilities"
                            />

                            <button
                                className="facility-nav facility-nav-right"
                                onClick={nextImage}
                            >
                                <img src={RightButton} alt="" />
                            </button>
                        </div>

                        <div className="facility-indicators">
                            {facilitiesImages.map((_, index) => (
                                <span
                                    key={index}
                                    className={`facility-indicator ${index === currentIndex ? "is-active" : ""
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            
            
        </div>





    )
}

