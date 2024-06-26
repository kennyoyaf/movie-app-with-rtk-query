import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBox.scss";
import { useSelector } from "react-redux";

const SearchBox = ({ searchValue, handleSearchChange }) => {
  const darkMode = useSelector(state => state.darkMode.darkMode);
  return (
    <div>
      <div className="input-container">
        <FaSearch className="icon" />
        <input
          className={`${darkMode ? "white-input" : "black-input"}`}
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search Everything..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
