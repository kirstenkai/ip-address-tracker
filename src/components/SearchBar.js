
import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = (props) => {

  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }
  return (
    <div className="searchBar">
      <input
        className="searchInput"
        value={searchValue}
        onChange={handleSearchInputChanges} type="text"
        placeholder={props.placeholder}
      />
      <button
        className="searchButton"
        type="submit"
        onClick={callSearchFunction}
      >
        <svg className="searchIcon" xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6" /></svg>
      </button>
    </div>
  )
}

export default SearchBar;
