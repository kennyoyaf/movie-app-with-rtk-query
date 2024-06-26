import React from "react";
import "./MovieCard.scss";
import { useSelector } from "react-redux";

const MovieCard = ({ data, isLoading }) => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  if (isLoading) return <div>Loading...</div>;
  if (!data || !data.Search) return <div>No movies found.</div>;
  return (
    <div
      className={`movie-container ${
        darkMode ? "black-container" : "white-container"
      }`}
    >
      {data.Search.map(movies => {
        return (
          <div
            key={movies.imdbID}
            className={`movies-box ${
              darkMode ? "different-container" : "white-container"
            }`}
          >
            <div className="img">
              <img
                src={movies.Poster}
                alt={`${movies.Title} poster`}
                className="image"
              />
            </div>
            <div
              className={`text-title ${darkMode ? "white-text" : "black-text"}`}
            >
              <h4 className="movie-title">{movies.Title} </h4>
              <p className="movie-text">{movies.Year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
