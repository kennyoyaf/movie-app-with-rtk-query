import React from "react"

const SearchBox = ({ searchValue, setSearchValue }) => {
  return (
    <div className="">
      <input
        className=""
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Type to search..."
      />
    </div>
  )
}

export default SearchBox
