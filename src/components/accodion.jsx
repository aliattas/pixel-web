import React, { useState } from "react";
import "./styles/Accordion.css"; // Import external CSS file

const AccordionItem = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className={`icon ${isOpen ? "rotate" : ""}`}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/></svg></span>
      </button>
      {isOpen && <div className="accordion-content">مع أكثر من 39 لونًا وأكثر من 120.000 اختلاف, تحكم في الشكل الذي سيبدو عليه الصور الخاص بك.        </div>}
    </div>
  );
};

export default function CustomAccordion() {
  return (
    <div className="accordion-container">
      {/* First Section */}
      <div className="accordion-title">عمل السجلات والكاسيت</div>
      {[...Array(4)].map((_, index) => (
        <AccordionItem key={index} title="التصميم والتخصيص" />
      ))}

      {/* Second Section */}
      <div className="accordion-title">عمل السجلات والكاسيت</div>
      {[...Array(4)].map((_, index) => (
        <AccordionItem key={`second-${index}`} title="التصميم والتخصيص" />
      ))}
      <div className="accordion-title">عمل السجلات والكاسيت</div>
      {[...Array(2)].map((_, index) => (
        <AccordionItem key={`second-${index}`} title="التصميم والتخصيص" />
      ))}
      
    </div>
  );
}
