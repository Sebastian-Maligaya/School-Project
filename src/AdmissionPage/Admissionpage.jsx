import React from 'react'
import "../Homepage/Homepage.css"
import StrandCard from '../Homepage/Card';
import { useState } from "react";
import "./accordion.css";
import "./AdmissionPage.css";
import Accordion from "./accordion.jsx";
import Microscopeicon from "../assets/microscopeicon.jpg";
import Footer from '../Footer/Footer.jsx';
import monitoricon from "../assets/Monitoricon.png"
import ABMicon from "../assets/ABMicon.png"

export default function Admissionpage() {

  // --- DATA FOR JUNIOR HIGH SCHOOL ---
  const jhsSections = [
  { 
    title: "THE SCHOOL'S ADMISSION POLICY", 
    content: (
      <div>
        <p>Admission to the <strong>Science, Technology, and Engineering (STE) Program</strong> is open to all Grade 6 students who meet the following:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.6' }}>
          <li><strong>a.</strong> Must be a candidate for graduation from a government-recognized elementary school.</li>
          <li><strong>b.</strong> Must have a final grade of 85% or higher in Science, Mathematics, and English.</li>
          <li><strong>c.</strong> Must have a grade of at least 83% in all other subjects.</li>
          <li><strong>d.</strong> If the grade requirement is not met, the applicant must belong to the <strong>Upper 10%</strong> of the graduating class (certified by the Principal).</li>
        </ul>
      </div>
    )
  },
  { 
    title: "QUALIFICATIONS", 
    content: (
      <div>
        <p>To qualify for the screening process, the student must:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Be a bonafide resident of Taguig City.</li>
          <li>Have a consistent record of good conduct (no disciplinary issues).</li>
          <li>Be physically fit to handle the advanced curriculum of a Science High School.</li>
          <li>Must not have been a repeater in any grade level in elementary.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "APPLICATION REQUIREMENTS", 
    content: (
      <div>
        <p>Submit the following in a <strong>long brown envelope</strong> labeled with the applicant's name:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Duly accomplished Grade 7 Application Form.</li>
          <li>Photocopy of Grade 6 Report Card (Form 138) - 1st to 3rd Grading.</li>
          <li>Certified True Copy of PSA Birth Certificate.</li>
          <li><strong>Proof of Residency:</strong> Parent's Voter's Certificate (Taguig) or any valid government document.</li>
          <li>Two (2) identical 2x2 recent ID pictures (white background).</li>
        </ul>
      </div>
    )
  },
  { 
    title: "APPLICATION PROCEDURE", 
    content: (
      <div>
        <ol style={{ paddingLeft: '20px' }}>
          <li><strong>Filing:</strong> Submit documents to the Guard-on-Duty or via the online portal (if available).</li>
          <li><strong>Evaluation:</strong> The screening committee reviews the grades and residency.</li>
          <li><strong>Examination:</strong> Qualified applicants will take the STE Admission Test (Science, Math, English, and Abstract Reasoning).</li>
          <li><strong>Interview:</strong> Shortlisted students (Top 160) will undergo a face-to-face interview.</li>
        </ol>
      </div>
    )
  },
  { 
    title: "PROCEDURE FOR CONFIRMATION OF ENROLLMENT", 
    content: (
      <div>
        <p>Upon passing both the exam and interview:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Parents must sign a <strong>Contract of Enrollment</strong>, signifying agreement to maintain the required grades.</li>
          <li>Attend the mandatory orientation for incoming Grade 7 students and parents.</li>
          <li>Submit the final Grade 6 Report Card showing "Promoted to Grade 7".</li>
        </ul>
      </div>
    )
  },
  {   
    title: "ENROLLMENT REQUIREMENTS", 
    content: (
      <div>
        <p>Final requirements for official enrollment:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Original Grade 6 Report Card (SF9) signed by the Principal.</li>
          <li>Original SF10 (Learner's Permanent Record).</li>
          <li>Certificate of Good Moral Character from the Elementary School.</li>
          <li>Duly signed Enrollment Form.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "RELEASE OF APPLICATION RESULTS", 
    content: (
      <div style={{ textAlign: 'center', backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <p>The <strong>List of Qualified Grade 7 Students</strong> will be posted at the School Entrance and on the official Facebook Page.</p>
        <p>Please note that only the <strong>Top 160 applicants</strong> will be accepted for the Grade 7 STE Program.</p>
      </div>
    )
  },
];

  // --- DATA FOR SENIOR HIGH SCHOOL ---
  const shsSections = [
  { 
    title: "THE SCHOOL'S ADMISSION POLICY", 
    content: (
      <div>
        <p>An incoming Grade 11 applicant must have the following qualifications:</p>
        <ul style={{ listStyleType: 'none', paddingLeft: '0', lineHeight: '1.6' }}>
          <li><strong>a.</strong> A candidate for graduation or completion from any DepEd recognized secondary schools as certified by the school.</li>
          <li><strong>b.</strong> Must have a grade of at least 85% in Mathematics, Science, and English subjects. (Lower grades in succeeding periods is ground for non-admission).</li>
          <li><strong>c.</strong> Top 10% certification from the Principal (for schools with 100+ students) or Top 10 students (for schools below 100).</li>
          <li><strong>d.</strong> Possesses good moral character and is physically/mentally fit for rigorous activities.</li>
          <li><strong>e.</strong> Must be a bonafide resident of Taguig City.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "QUALIFICATIONS", 
    content: (
      <div>
        <p>Beyond residency and grades, applicants must:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Pass the SRCCMSTHS Admission Test (Standardized Science High School Exam).</li>
          <li>Pass the Oral Interview conducted by the screening committee.</li>
          <li>Have no record of disciplinary action from the previous school.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "APPLICATION REQUIREMENTS", 
    content: (
      <div>
        <p>Please prepare the following documents in a <strong>long brown envelope</strong>:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Duly accomplished Application Form.</li>
          <li>Certified True Copy of Grade 10 Report Card (Form 138).</li>
          <li>Certified True Copy of Birth Certificate (PSA).</li>
          <li>Original Voter’s Certificate of Parent/Guardian (Taguig).</li>
          <li>Two (2) recent 2x2 ID pictures with name tag.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "APPLICATION PROCEDURE", 
    content: (
      <div>
        <ol style={{ paddingLeft: '20px' }}>
          <li><strong>Submission:</strong> Drop off the required documents at the Guard-On-Duty.</li>
          <li><strong>Verification:</strong> The registrar will verify the authenticity of the grades.</li>
          <li><strong>Testing:</strong> Qualified applicants will receive a test permit via email/text.</li>
          <li><strong>Interview:</strong> After passing the exam, applicants will be scheduled for an interview.</li>
        </ol>
      </div>
    )
  },
  { 
    title: "PROCEDURE FOR CONFIRMATION OF ENROLLMENT", 
    content: (
      <div>
        <p>Successful candidates must confirm their slot by:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Submitting the Letter of Intent to Enroll by the specified deadline.</li>
          <li>Attending the Parent-Student Orientation (Virtual or In-Person).</li>
          <li>Filing the Strand Preference Form (STEM, ABM, or ICT).</li>
        </ul>
      </div>
    )
  },
  { 
    title: "ENROLLMENT REQUIREMENTS", 
    content: (
      <div>
        <p>Upon enrollment, submit the following originals:</p>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Original Grade 10 Report Card (Form 138).</li>
          <li>Original Certificate of Completion.</li>
          <li>Certificate of Good Moral Character.</li>
          <li>Medical Certificate from a government physician.</li>
        </ul>
      </div>
    )
  },
  { 
    title: "RELEASE OF APPLICATION RESULTS", 
    content: (
      <div style={{ textAlign: 'center', padding: '10px' }}>
        <p>Results will be officially posted on the <strong>School Bulletin Board</strong> and the <strong>Official Facebook Page</strong>.</p>
        <p>Individual applicants will also receive an email notification regarding their final status.</p>
      </div>
    )
  },
];
  return (
    <div>
    <div className="admission-page">
      <div>
      <header className="admission-header">
        <div className='admission-h'>
          <h1>Admission</h1>
        </div>

        <section className="contact-admission-section">
          <div className="contact-title1">
            <span className="admission-line1"></span>
          </div>
        </section>

        <div className='h-2'>
          <h2>CAYETANO SCI-TECH ADMISSION AND SCREENING FOR INCOMING GRADE 7 AND GRADE 11</h2>
        </div>
        <p>To qualify for the Sen. Renato "Compañero" Memorial Science & Technology High School (SRCCMSTHS) admission test, the students must meet <br/> certain qualifications. </p>

        <table className="admission-table">
          <thead>
            <tr>
              <th className="number">JUNIOR HIGH SCHOOL</th>
              <th className="number">SENIOR HIGH SCHOOL</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <td className="label">
                    <button
                      className="btn-primary"
                      onClick={() => document.getElementById('section1').scrollIntoView({ behavior: 'smooth' })}
                    >
                      LEARN MORE
                    </button>
                  </td>
                  <td className="label">
                    <button
                      className="btn-primary"
                      onClick={() => document.getElementById('section2').scrollIntoView({ behavior: 'smooth' })}
                    >
                      LEARN MORE
                    </button>
                  </td>
                </tr>
              </tbody>
        </table>
      </header>

      <div className="admission-questions">
        <h2>FREQUENTLY ASKED QUESTIONS</h2>
        <ol type="1">
          <li>
            <strong>When will be the start of screening and admission for incoming Grade 7 and Grade 11?</strong>
            <p>Admission and Screening for incoming Grade 7 and Grade 11 students for start on-- . the S.Y. – will</p>
          </li>
          <li>
            <strong>Where can I get the application form?</strong>
            <p>Application forms are available from the guard-on-duty or can be downloaded from the -- </p>
          </li>
          <li>
            <strong>What is the cut-off grade for admission?</strong>
            <p>Applicants must have at least a final grade of 85% in major subjects (English, Mathematics and Science) and 83% in minor subjects. Applicants must submit duly accomplished report cards (Form 138) with grades no less than 80% in any subject (Grade 5 for Grade 7 applicants, and Grade 9 for Grade 11 applicants). </p>
          </li>
          <li>
            <strong>If my child did not meet the grade requirements, would there be any chance for reconsideration?</strong>
            <p>In case the applicant did not meet the grade requirement, please submit a certification signed by the school principal that the applicant belongs to the upper ten percent (10%) of the Grade 5 population for Grade 7 applicants, and the Grade 9 population for Grade 11 applicants. </p>
          </li>
          <li>
            <strong>What Strands are offered in Senior High School?</strong>
            <p>Cayetano Sci Tech (Senior High School) offers two Academic Strands: Science and Technology, Technical Engineering Mathematics (STEM) and Accountancy, Business and Management (ABM), and one Vocational Strand: Information and Communications Technology-Computer System Servicing (ICT-CSS). </p>
          </li>
          <li>
            <strong>I have no certificate of winning in Science and Mathematics Competition, can I still apply?</strong>
            <p>Yes.</p>
          </li>
          <li>
            <strong>My child is currently enrolled outside Taguig. Can he/she still apply?</strong>
            <p>Yes, as long as the parent or guardian can provide any proof of residency in Taguig City. </p>
          </li>
          <li>
            <strong>Are both parents required to submit their individual Voter's Certificate?</strong>
            <p>No. You can submit at least one Voter's Certificate of the parent or guardian. </p>
          </li>
          <li>
            <strong>Where will I submit the requirements?</strong>
            <p>Submit the application requirements placed in a long brown envelope labelled with applicant's name at the Guard-On-Duty. Incomplete submission of documents will not be entertained.
              <br /><br />
              In addition, any representative below 18 years of age or 65 years and above will not be allowed to enter the school premises. The school observes strict compliance to health and safety protocols at all times.</p>
          </li>
          <li>
            <strong>What are the criteria for admission and screening?</strong>
            <p>60% - Grade 5/Grade 9 Grades in English, Mathematics and Science
              <br />30% - Interview
              <br />10% - Certificate of winnings in Mathematics and Science
              <br />Total of 100%</p>
          </li>
          <li>
            <strong>How do I know if I have been accepted?</strong>
            <p>The result of qualified applicants will be posted on --- at the school's bulletin board and on official –  Facebook Page.</p>
          </li>
          <li>
            <strong>Is there a quota in the number of students to be accepted?</strong>
            <p> Yes. For incoming Grade 7, we can only accept the top 160 applicants basd on their screening criteria. For Grade 11, slots will be available depending on the number of Grade 10 students who will transfer to another school for Senior High School.</p>
          </li>
        </ol>
      </div>                   
      <div className='high-school'>
              <section id="section1">
                <div className='JUNIOR-HIGH-SCHOOL-CONTAINER'>
                  <div className='JUNIOR-HIGH-SCHOOL'>
                    <h3>JUNIOR HIGH SCHOOL</h3>
                    <p>
                      This is to announce on the field of Admission and Screening for Senator Renato "Compañero" Cayetano Memorial Science and Technology High School for incoming Grade 7 students under Science, Technology, and Engineering (STE) Program ---
                    </p>
                  </div>
                  {/* JHS Accordion with specific data */}
                  <Accordion data={jhsSections} />
                </div>
              </section>  
        <div className='SENIOR-HIGH-SCHOOL-CONTAINER'>
          <section id="section2">
          <div className='SENIOR-HIGH-SCHOOL'>
            <h3 className='title-senior'>SENIOR HIGH SCHOOL</h3>
            <h4>GUIDELINES FOR ADMISSION IN SCIENCE, TECHNOLOGY, AND ENGINEERING (STE) Program in Junior High School specifically for Incoming Grade 7 Students S.Y. 2021-2022</h4> 
            <h5> This is to announce on the field of Admission and Screening for Senator Renato "Compañero" Cayetano Memorial Science and Technology High School for incoming Grade 7 students under Science, Technology, and Engineering (STE) Program --- </h5> 
            
            <div className="hp-programs-gridcards">
              <StrandCard
                strand={{
                  icon :<img src={Microscopeicon} alt="STEM" className="club-icon"/>,
                  tag: "STEM",
                  title: "Science, Technology, Engineering, and Mathematics",
                  description: "A rigorous program focusing on STEM disciplines."
                }}
              />
              <StrandCard
                strand={{
                  icon:<img src={ABMicon} alt="ABM" className="club-icon"/>,
                  tag: "ABM",
                  title: "Accountancy, Business, and Management",
                  description: "Prepares students for careers in business and finance."
                }}
              />
              <StrandCard
                strand={{
                  icon:<img src={monitoricon} alt="ICT" className="club-icon"/>,
                  tag: "ICT",
                  title: "Information and Communication Technology",
                  description: "Develops critical thinking and communication skills."
                }}
              />
            </div>
            {/* SHS Accordion with specific data */}
            <Accordion data={shsSections} />
          </div>
          </section>
        </div>
      </div>
      </div>


    </div>
    <Footer />
    </div>


  )
}