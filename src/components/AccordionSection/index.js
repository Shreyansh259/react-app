import React, { useState } from "react";

import "./AccordionSection.scss";

const AccordionSection = props => {
  const [isOpen, setOpen] = useState(false);
  const { title, children } = props;
  const toggleOpen = () => {
    if (isOpen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  const iconSrc = isOpen ? "caret-down.svg" : "caret-right.svg";

  return (
    <div className="accordion">
      <div className="accordion-toggle" onClick={toggleOpen}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-caret">
          <img
            src={`/${iconSrc}`}
            className="accordion-toggle-icon"
            alt="arrow"
          ></img>
        </span>
      </div>
      {isOpen && <div className="accordion-body">{children}</div>}
    </div>
  );
};

export default AccordionSection;
