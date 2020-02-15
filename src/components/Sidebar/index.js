import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { closeMenu } from "../../actions/menuActions";
import AccordionSection from "../AccordionSection";
import "./Sidebar.scss";

const selectIsOpen = state => state.menu.open;

const Sidebar = props => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);

  const closeMenuClickHandler = () => {
    dispatch(closeMenu());
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <AccordionSection title="Activities">
        <div className="sub-section">
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
        <div className="sub-section">
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
