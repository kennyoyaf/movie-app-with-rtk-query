import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ data, isLoading }) => {
  if (isLoading) return <div>Loading...</div>;
  if (!data || !data.Search) return <div>No movies found.</div>;

  console.log({ data });
  return (
    <div className="movie-container">
      {data.Search.map(movies => {
        return (
          <div key={movies.imdbID} className="movies-box">
            <div className="img">
              <img
                src={movies.Poster}
                alt={`${movies.Title} poster`}
                className="image"
              />
            </div>
            <div className="text-title">
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
