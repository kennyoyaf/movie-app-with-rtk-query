import React from "react";
import "./SearchMovies.scss";
import { useSelector } from "react-redux";

const SearchMovies = ({ Poster, Title, Year }) => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  return (
    <div
      className={`searched-container ${
        darkMode ? "black-search" : "white-search"
      }`}
    >
      <div className="searched-image">
        <img src={Poster} alt={Title} />
      </div>
      <div className="searched-text">
        <h3>{Title}</h3>
        <p>{Year}</p>
      </div>
    </div>
  );
};

export default SearchMovies;
