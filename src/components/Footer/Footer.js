import React from "react";
import "./Footer.scss";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  return (
    <div
      className={`footer ${darkMode ? "black-container" : "white-container"}`}
    >
      <div>Movie App</div>
      <div>02021, Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
