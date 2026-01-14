import { useState } from "react";
import "./accordion.css";
import "./AdmissionPage.css";

const sections = [
  "THE SCHOOL'S ADMISSION POLICY",
  "QUALIFICATIONS",
  "APPLICATION REQUIREMENTS",
  "APPLICATION PROCEDURE",
  "PROCEDURE FOR CONFIRMATION OF ENROLLMENT",
  "ENROLLMENT REQUIREMENTS",
  "RELEASE OF APPLICATION RESULTS",
];



export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {sections.map((title, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
          >
            <span>{title}</span>
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>
              ▾
            </span>
          </button>

          {openIndex === index && (
            <div className="accordion-content">
              <p>
                Content for <strong>{title}</strong> goes here.
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
