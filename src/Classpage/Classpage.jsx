import React from 'react'
import "../Homepage/Homepage.css"
import "./Classpage.css";
import { NavLink } from 'react-router-dom';
import classesicon from "../assets/classesicon.png"
import { useAuth } from "../context/AuthContext";
import { getHomeworksBySection, getHomeworksBySectionAndSubject } from "../data/homeworks";
import { getSubjectsForSection, getStrandFromSection } from "../data/accounts";

export default function Classes() {
  const { user } = useAuth();

  const isStudent = user && user.role === "student";
  const section = isStudent ? user.section : null;
  const strand = isStudent ? getStrandFromSection(section) : null;
  const subjects = isStudent ? getSubjectsForSection(section) : [];

  function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function getDaysLeft(deadline) {
    const diff = new Date(deadline) - new Date();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    if (days <= 0) return "Due today";
    if (days === 1) return "1 day left";
    return `${days} days left`;
  }

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

      <div className="classes-main">
        {!isStudent ? (
          <div className="classes-login-prompt">
            <h2>Classes</h2>
            <p>Please log in as a student to view your class homework.</p>
          </div>
        ) : (
          <>
            <h2 className="classes-title">My Classes</h2>
            <p className="classes-section">
              Section: <strong>{section}</strong> &nbsp;|&nbsp; Strand: <strong>{strand}</strong>
            </p>
            {subjects.map((subject) => {
              const homeworks = getHomeworksBySectionAndSubject(section, subject);
              return (
                <div key={subject} className="subject-block">
                  <h3 className="subject-name">{subject}</h3>
                  {homeworks.length === 0 ? (
                    <p className="no-hw">No active homework</p>
                  ) : (
                    <div className="hw-cards">
                      {homeworks.map((hw) => (
                        <div key={hw.id} className="student-hw-card">
                          <div className="student-hw-header">
                            <h4>{hw.title}</h4>
                            <span className="days-left">{getDaysLeft(hw.deadline)}</span>
                          </div>
                          <p className="student-hw-desc">{hw.description}</p>
                          <div className="student-hw-footer">
                            <span>By: {hw.teacherName}</span>
                            <span>Due: {formatDate(hw.deadline)}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  )
}