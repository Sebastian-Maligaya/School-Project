import React from 'react'
import "../Homepage/Homepage.css"

export default function Admissionpage() {
	return (
		<div className="admission-page">
            <header>
            <h1>Admission</h1>
            <h2>CAYETANO SCI-TECH ADMISSION AND SCREENING FOR INCOMING GRADE 7 AND GRADE 11</h2>
            <p>To qualify for the Sen. Renato "Compañero" Memorial Science & Technology High School (SRCCMSTHS) admission test, the students must meet certain qualifications. </p>
            
            <table>
                <tr>
                  <th className="number">JUNIOR HIGH SCHOOL</th>
                  <th className="number">SENIOR HIGH SCHOOL</th>
                </tr>
                <tr>
                  <td className="label">Students</td>
                  <td className="label">Teachers</td>
                </tr>
              </table>

            </header>
		</div>
	)
}
