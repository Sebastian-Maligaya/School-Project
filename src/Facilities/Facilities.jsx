import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import "./Facilities.css";
import Facilities_Ground_Floor from "../assets/Facilities_Ground_Floor.png";

export default function Facilities() {
    return (
        <div className="facilities-container">
            <div className="facilities-title">
                <header>FACILITIES</header>
                <h1>Directory</h1>
            </div>
            <div className="facilities-image">
                <img src={Facilities_Ground_Floor} alt="Facilities" />
            </div>
            <div className="facilities-list"> 
                <table className='buttons-facility'>
                    <tr className='button-table-1'>
                        <td><button className="facility-button">Lani Scholarships</button></td>
                        <td><button className="facility-button">Library</button></td>
                        <td><button className="facility-button">Audio Visual Room</button></td>
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
        </div>




    )
}

