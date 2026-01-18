import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import "./Clubs.css";
import icon_placeholder from "../assets/icon_placeholder.png";
import { Link } from 'react-router-dom';

export default function Clubs() {
    return (
        <div className="clubs-container">
            <div className="clubs-title">
                <header>CLUBS</header>  
            </div>
            <div className="clubs-list">
                <h1>MATHEMATICS DEPARTMENT</h1> 
                 <table className='mathematics-department'>
                    <tr>
                        <td>
                            <a href='https://www.facebook.com/srccict' target="_blank">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/>
                            </a>
                        </td>
                    </tr>
                 </table>
                 <h1>ENGLISH DEPARTMENT</h1>
                 <table className='english-department'>
                    <tr>
                        <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                        <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                    </tr>
                 </table>
                 <h1>FILIPINO DEPARTMENT</h1>
                    <table className='filipino-department'>
                    <tr>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                        <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                    </tr>
                 </table>
                 <h1>SOCIAL DEPARTMENT</h1>
                    <table className='social-department'>
                    <tr>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                        <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                         <td>
                            <Link to="#" className="club-button">
                             <img src={icon_placeholder} alt="icon" className="club-icon"/></Link>
                        </td>
                    </tr>
                    </table>                    
            </div>
        </div>
    )
}

