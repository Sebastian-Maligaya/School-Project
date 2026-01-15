import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import { useState } from "react";
import "./accordion.css";
import "./AdmissionPage.css";
import Accordion from "./accordion.jsx";


export default function Admissionpage() {

  return (
    <div className="admission-page">
      <header className="admission-header">
        <h1>Admission</h1>
        <h2>CAYETANO SCI-TECH ADMISSION AND SCREENING FOR INCOMING GRADE 7 AND GRADE 11</h2>
        <p>To qualify for the Sen. Renato "Compañero" Memorial Science & Technology High School (SRCCMSTHS) admission test, the students must meet certain qualifications. </p>


        <table className="admission-table">
          <tr>
            <th className="number">JUNIOR HIGH SCHOOL</th>
            <th className="number">SENIOR HIGH SCHOOL</th>
          </tr>
          <tr>
            <td className="label">
              <button className="btn-primary">LEARN MORE</button>
            </td>
            <td className="label">
              <button className="btn-primary">LEARN MORE</button>
            </td>

          </tr>
        </table>

      </header>



      <div className="admission-questions">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <ol type="1">
          <li>
            When will be the start of screening and admission for incoming Grade 7 and Grade 11?
            <p>Admission and Screening for incoming Grade 7 and Grade 11 students for start on-- . the S.Y. – will</p>
          </li>
          <li>
            Where can I get the application form?
            <p>Application forms are available from the guard-on-duty or can be downloaded from the -- </p>
          </li>
          <li>
            What is the cut-off grade for admission?
            <p>Applicants must have at least a final grade of 85% in major subjects (English, Mathematics and Science) and 83% in minor subjects. Applicants must submit duly accomplished report cards (Form 138) with grades no less than 80% in any subject (Grade 5 for Grade 7 applicants, and Grade 9 for Grade 11 applicants). </p>
          </li>
          <li>
            If my child did not meet the grade requirements, would there be any chance for reconsideration?
            <p>In case the applicant did not meet the grade requirement, please submit a certification signed by the school principal that the applicant belongs to the upper ten percent (10%) of the Grade 5 population for Grade 7 applicants, and the Grade 9 population for Grade 11 applicants. </p>
          </li>
          <li>
            What Strands are offered in Senior High School?
            <p>Cayetano Sci Tech (Senior High School) offers two Academic Strands: Science and Technology, Technical Engineering Mathematics (STEM) and Accountancy, Business and Management (ABM), and one Vocational Strand: Information and Communications Technology-Computer System Servicing (ICT-CSS). </p>
          </li>
          <li>
            I have no certificate of winning in Science and Mathematics Competition, can I still apply?
            <p>Yes.</p>
          </li>
          <li>
            My child is currently enrolled outside Taguig. Can he/she still apply?
            <p>Yes, as long as the parent or guardian can provide any proof of residency in Taguig City. </p>
          </li>
          <li>
            Are both parents required to submit their individual Voter's Certificate?
            <p>No. You can submit at least one Voter's Certificate of the parent or guardian. </p>
          </li>
          <li>
            Where will I submit the requirements?
            <p>Submit the application requirements placed in a long brown envelope labelled with applicant's name at the Guard-On-Duty. Incomplete submission of documents will not be entertained.
              <br />In addition, any representative below 18 years of age or 65 years and above will not be allowed to enter the school premises. The school observes strict compliance to health and safety protocols at all times.</p>
          </li>
          <li>
            What are the criteria for admission and screening?
            <p>60% - Grade 5/Grade 9 Grades in English, Mathematics and Science
              <br />30% - Interview
              <br />10% - Certificate of winnings in Mathematics and Science
              <br />Total of 100%</p>
          </li>
          <li>
            How do I know if I have been accepted?
            <p>The result of qualified applicants will be posted on --- at the school's bulletin board and on official –  Facebook Page.</p>
          </li>
          <li>
            Is there a quota in the number of students to be accepted?
            <p> Yes. For incoming Grade 7, we can only accept the top 160 applicants basd on their screening criteria. For Grade 11, slots will be available depending on the number of Grade 10 students who will transfer to another school for Senior High School.</p>
          </li>

        </ol>
      </div>

      <div className='JUNIOR-HIGH-SCHOOL'>
        <h3>JUNIOR HIGH SCHOOL</h3>
        <p>
          This is to announce on the field of Admission and Screening for Senator Renato "Compañero" Cayetano Memorial Science and Technology High School for incoming Grade 7 students under Science, Technology, and Engineering (STE) Program ---
        </p>
      </div>






      <Accordion />



      

      <div className='SENIOR-HIGH-SCHOOL'>
        <h3 className='title-senior'>SENIOR HIGH SCHOOL</h3>
        <h4>GUIDELINES FOR ADMISSION IN SCIENCE, TECHNOLOGY, AND ENGINEERING (STE) Program in Junior High School specifically for Incoming Grade 7 Students S.Y. 2021-2022</h4> 
        <h5> This is to announce on the field of Admission and Screening for Senator Renato "Compañero" Cayetano Memorial Science and Technology High School for incoming Grade 7 students under Science, Technology, and Engineering (STE) Program --- </h5> 
        <div className="hp-programs-gridcards">
          <StrandCard
            strand={{
              icon: "🔬",
              tag: "STEM",
              title: "Science, Technology, Engineering, and Mathematics",
              description: "A rigorous program focusing on STEM disciplines."
            }}
          />
          <StrandCard
            strand={{
              icon: "💼",
              tag: "ABM",
              title: "Accountancy, Business, and Management",
              description: "Prepares students for careers in business and finance."
            }}
          />
          <StrandCard
            strand={{
              icon: "🎭",
              tag: "ICT",
              title: "Information and Communication Technology",
              description: "Develops critical thinking and communication skills."
            }}
          />
        </div>
      </div>

      <Accordion />





    </div>




  )
}
