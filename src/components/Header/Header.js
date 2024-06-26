import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/Profile-Image.png";
import SearchBox from "../SearchBox/SearchBox";
import SearchMovies from "../SearchMovies/SearchMovies";
import ToogleSwitch from "../ToggleSwitch/ToogleSwitch";
import { ContextApi } from "../../ContextApi/ContextApi";
import "./Header.scss";
import { useSelector } from "react-redux";

const Header = () => {
  const { data, isLoading, error, searchValue, setSearchValue } =
    useContext(ContextApi);

  const [showResults, setShowResults] = useState(true);

  const handleMovieClick = () => {
    setSearchValue("");
    setShowResults(false);
  };

  const handleSearchChange = event => {
    setSearchValue(event.target.value);
    setShowResults(true);
  };
  const darkMode = useSelector(state => state.darkMode.darkMode);

  return (
    <div
      className={`header-container ${
        darkMode ? "black-header" : "white-header"
      }`}
    >
      <div className="header">
        <Link to="/">
          <div className={`logo ${darkMode ? "white-logo" : "black-logo"}`}>
            {" "}
            Movie App
          </div>
        </Link>
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
      <div className="second-header">
        <SearchBox
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSearchChange={handleSearchChange}
        />
        <ToogleSwitch />
      </div>
      {showResults && (
        <div className="movie-lane" onClick={handleMovieClick}>
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data?.Search && (
            <div className="movie-list-box">
              {data.Search.map(movie => (
                <Link
                  to={`/movie/${movie.imdbID}`}
                  key={movie.imdbID}
                  onClick={handleMovieClick}
                  className="link"
                >
                  <SearchMovies key={movie.imdbID} {...movie} />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
