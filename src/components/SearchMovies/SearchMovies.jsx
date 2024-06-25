import React from "react";
import "./SearchMovies.scss";

const SearchMovies = ({ Poster, Title, Year }) => {
  return (
    <div className="searched-container">
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
