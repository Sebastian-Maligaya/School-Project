import React, { useState } from 'react'
import "./Classpage.css";
import "./Calendar.css";
import { NavLink } from 'react-router-dom';
import classesicon from "../assets/classesicon.png"
import { useAuth } from "../context/AuthContext";
import { getActiveHomeworksForSection } from "../data/homeworks";

export default function Calendar() {
  const { user } = useAuth();
  const [currentDate, setCurrentDate] = useState(new Date());

  const isStudent = user && user.role === "student";
  const section = isStudent ? user.section : null;

  // Get active homeworks for the student's section only
  const myHomeworks = isStudent ? getActiveHomeworksForSection(section) : [];

  // Calendar helpers
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  function prevMonth() {
    setCurrentDate(new Date(year, month - 1, 1));
  }

  function nextMonth() {
    setCurrentDate(new Date(year, month + 1, 1));
  }

  // Group homeworks by day-of-month in current month
  function getHomeworksForDay(day) {
    return myHomeworks.filter((hw) => {
      const d = new Date(hw.deadline);
      return d.getFullYear() === year && d.getMonth() === month && d.getDate() === day;
    });
  }

  // Build calendar grid
  const calendarDays = [];
  // Empty cells before first day
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    calendarDays.push(d);
  }

  const today = new Date();
  const isToday = (day) =>
    day &&
    today.getFullYear() === year &&
    today.getMonth() === month &&
    today.getDate() === day;

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

      <div className="calendar-main">
        {!isStudent ? (
          <div className="classes-login-prompt">
            <h2>Calendar</h2>
            <p>Please log in as a student to view your homework calendar.</p>
          </div>
        ) : (
          <>
            <div className="calendar-nav">
              <button onClick={prevMonth}>&lt;</button>
              <h2>{monthNames[month]} {year}</h2>
              <button onClick={nextMonth}>&gt;</button>
            </div>

            <div className="calendar-grid">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="calendar-day-header">{d}</div>
              ))}
              {calendarDays.map((day, idx) => {
                const hwForDay = day ? getHomeworksForDay(day) : [];
                return (
                  <div
                    key={idx}
                    className={`calendar-cell ${!day ? "empty" : ""} ${isToday(day) ? "today" : ""}`}
                  >
                    {day && (
                      <>
                        <span className="cal-day-num">{day}</span>
                        {hwForDay.map((hw) => (
                          <div key={hw.id} className="cal-hw-tag" title={hw.description}>
                            <span className="cal-hw-subject">{hw.subject}</span>
                            <span className="cal-hw-title">{hw.title}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Upcoming homework list */}
            <div className="cal-upcoming">
              <h3>Upcoming Deadlines</h3>
              {myHomeworks.length === 0 ? (
                <p className="no-hw">No upcoming homework</p>
              ) : (
                myHomeworks
                  .sort((a, b) => new Date(a.deadline) - new Date(b.deadline))
                  .map((hw) => {
                    const dl = new Date(hw.deadline);
                    return (
                      <div key={hw.id} className="cal-upcoming-item">
                        <div className="cal-upcoming-date">
                          <span className="cal-up-day">{dl.getDate()}</span>
                          <span className="cal-up-month">{monthNames[dl.getMonth()].slice(0, 3)}</span>
                        </div>
                        <div className="cal-upcoming-info">
                          <strong>{hw.title}</strong>
                          <span>{hw.subject} &middot; {hw.teacherName}</span>
                        </div>
                      </div>
                    );
                  })
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}