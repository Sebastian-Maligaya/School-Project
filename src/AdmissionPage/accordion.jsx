import { useState } from "react";
import "./accordion.css";

// We removed the hard-coded 'sections' array from here
export default function Accordion({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => toggle(index)}
          >
            <span>{item.title}</span>
            <span className={`arrow ${openIndex === index ? "open" : ""}`}>
              ▾
            </span>
          </button>

          {openIndex === index && (
            <div className="accordion-content">
              {/* This now renders the specific content for that section */}
              <p>{item.content}</p> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
}