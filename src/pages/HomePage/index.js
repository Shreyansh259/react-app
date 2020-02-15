import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const HomePage = props => {
  return (
    <div className="home-page page">
      <h1>Are you bored!? Need something to do!? </h1>
      <p>
        Well we have you covered! In this app we specialize in cooking and
        recreational activities that will keep you from being bored for at least
        this lifetime.
      </p>
      <Link to="/activity/recreational">Recreational</Link>{" "}
      <Link to="/activity/cooking">Cooking</Link>
    </div>
  );
};

export default HomePage;
