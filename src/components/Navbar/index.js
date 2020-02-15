import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { openMenu, closeMenu } from "../../actions/menuActions";

import "./Navbar.scss";

const selectIsOpen = state => state.menu.open;

const Navbar = ({ userName }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);

  const openMenuClickHandler = () => {
    if (isOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };

  const menuImageSrc = isOpen ? "close-24px.svg" : "menu-24px.svg";
  return (
    <header className="navbar">
      <img
        src={`/${menuImageSrc}`}
        className="menu-icon"
        onClick={openMenuClickHandler}
      ></img>
      <Link to="/" className="home-link">
        {/* <🥱</span> */}
        <img src="/Avatar.svg" className="avatar-logo"></img>
        <span className="app-title">Welcome, {userName}!</span>
      </Link>
    </header>
  );
};

export default Navbar;
