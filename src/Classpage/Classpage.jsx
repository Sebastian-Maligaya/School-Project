import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import "./Classpage.css";
import { NavLink } from 'react-router-dom';
import placeholder from "../assets/Placeholder.jpg"
import classesicon from "../assets/classesicon.png"

export default function Classes() {
  return (
    <div className='Classes-Content'>
      <div className='Upright-NavigationBar'>
        <nav>
          <NavLink to="/Classes" className={({isActive}) => `Class ${isActive ? 'active' : ''}`}>
            <img src={classesicon} alt="" />
            <span>Class</span>
          </NavLink>

          <NavLink to="/Calendar" className={({isActive}) => `Calendar ${isActive ? 'active' : ''}`}>
            <img src={classesicon} alt="" />
            <span>Calendar</span>
          </NavLink>
        </nav>
      </div>
    </div>
  )
}