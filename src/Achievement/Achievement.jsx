import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import "./Achievement.css";
import Placeholder from "../assets/Placeholder.jpg"

export default function Achievements() {
    return (
        <div className="achievement-container">
          
               
            <div className="achievements-page">
                    <h1 className='achievement'>ACHIEVEMENTS</h1>
                    <span className='line-achivement'></span>
            </div>

            <div className='div-line-achievement'>
                <header></header>
            </div>

            <div className='achievement-Aboxes'>
                <div className='box-achievement-container'>
                    <div className="achievements-title">
                        <header>BRIGADA ESKWELA</header>
                    </div>



                    <div className='first-achievement-container'>
                        <div className="achievements-list-left">
                            <ul>
                                <p className='first-p'>2020</p>
                                <li>1st Place - Best Brigada Eskwela Implementer - Division Level (Medium School Category)</li>
                                <li>Regional Awardee</li>

                                <p>Mr. Mark Anthony Galan</p>
                                <li>Division Rank 1 - Best Brigada Eskwela Coordinator (Medium School Category)</li>
                                <li>Regional Awardee - Brigada Eskwela Coordinator</li>

                                <p>2019</p>
                                <li>2nd Place - Best Brigada Eskwela Implementer - Division Level</li>

                                <p>2018</p>
                                <li>1st Place - Best Brigada Eskwela Implementer - Division Level</li>
                                <li>5th Place - Best Brigada Eskwela Implementer - Regional Level</li>

                                <p>Mr. Judd Lawrence D. Guy-joco</p>
                                <li>Best Brigada Eskwela Coordinator - Secondary Level</li>
                                <li>1st Place - 2018 Regional Brigada Eskwela Table Evaluation Best Presenter - Secondary Level</li>

                                <p>2017</p>
                                <li>2nd Place - Best Brigada Eskwela Implementer - Division Level</li>

                            </ul>
                        </div>

                        <div className='achievements-list-right'>
                            <img src={Placeholder}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='achievement-Aboxes'>
                <div className='box-achievement-container'>
                    <div className="achievements-title">
                        <header>BRIGADA ESKWELA</header>
                    </div>
                    <div className='second-achievement-container'>
                        <div className="achievements-list-left">
                            <ul>
                                <p className='first-p'>2020</p>
                                <li>1st Place - Best Brigada Eskwela Implementer - Division Level (Medium School Category)</li>
                                <li>Regional Awardee</li>

                                <p>Mr. Mark Anthony Galan</p>
                                <li>Division Rank 1 - Best Brigada Eskwela Coordinator (Medium School Category)</li>
                                <li>Regional Awardee - Brigada Eskwela Coordinator</li>

                                <p>2019</p>
                                <li>2nd Place - Best Brigada Eskwela Implementer - Division Level</li>

                                <p>2018</p>
                                <li>1st Place - Best Brigada Eskwela Implementer - Division Level</li>
                                <li>5th Place - Best Brigada Eskwela Implementer - Regional Level</li>

                                <p>Mr. Judd Lawrence D. Guy-joco</p>
                                <li>Best Brigada Eskwela Coordinator - Secondary Level</li>
                                <li>1st Place - 2018 Regional Brigada Eskwela Table Evaluation Best Presenter - Secondary Level</li>

                                <p>2017</p>
                                <li>2nd Place - Best Brigada Eskwela Implementer - Division Level</li>
                            </ul>
                        </div>
                        <div className='achievements-list-right'>
                            <img src={Placeholder}></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='padding-purposes'>
                <div className='pandemic-page'>
                    <div className="achievements-page-pandemic-graduation-line">
                        <span className='line-achivement-padnemic'></span>
                        <p>PANDEMIC GRADUATION</p>
                        <span className='line-achivement-padnemic'></span>
                    </div>
                    <div className='pandemic-image'>
                        <img src={Placeholder}></img>
                        <img src={Placeholder}></img>
                    </div>
                </div>
            </div>
            <div className='padding-purposes'>
                <div className='performance-page'>
                    <div className="achievements-page-performances-line">
                        <span className='line-achivement-Performances'></span>
                        <p>PERFORMANCES</p>
                        <span className='line-achivement-Performances'></span>
                    </div>

                    <div right className="Performancess">
                        <h1>YUNG MGA SAYAW NAYIN</h1>


                        <img src={Placeholder}></img>


                    </div>
                    <div right className="Performancess">
                        <h1>YUNG MGA SAYAW NAYIN</h1>

                        <img src={Placeholder}></img>

                    </div>
                </div>
            </div>


        </div>



    )
}
            
