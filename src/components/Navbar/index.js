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
        alt="hamburger menu"
      ></img>
      <Link to="/" className="home-link">
        <span className="app-title">unqork</span>
      </Link>
      <span className="user-title">Welcome, {userName}!</span>
        <img src="/Avatar.svg" className="avatar-logo" alt="avatar logo"></img>
        
    </header>
  );
};

export default Navbar;
