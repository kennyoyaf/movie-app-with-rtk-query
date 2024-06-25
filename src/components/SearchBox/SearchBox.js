import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBox.scss";

const SearchBox = ({ searchValue, setSearchValue, handleSearchChange }) => {
  return (
    <div>
      <div className="input-container">
        <FaSearch className="icon" />
        <input
          className=""
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search Everything..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
