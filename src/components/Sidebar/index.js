import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AccordionSection from "../AccordionSection";
import "./Sidebar.scss";

const selectIsOpen = state => state.menu.open;

const Sidebar = props => {
  const isOpen = useSelector(selectIsOpen);
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <AccordionSection title="Activities">
        <div className="sub-section first-tab">
          <Link className="activity-link" to="/activity/recreational">
            Recreational
          </Link>
        </div>
        <div className="sub-section">
          <Link className="activity-link" to="/activity/cooking">
            Cooking
          </Link>
        </div>
      </AccordionSection>

      <AccordionSection title="Account">
        <div className="sub-section first-tab">
          <Link className="activity-link" to="/account/profile">
            Profile
          </Link>
        </div>
        <div className="sub-section">
          <Link className="activity-link" to="/account/settings">
            Settings
          </Link>
        </div>
      </AccordionSection>
    </aside>
  );
};

export default Sidebar;
