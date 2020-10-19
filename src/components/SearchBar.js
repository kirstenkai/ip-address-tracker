import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <form>
          <input type="search" placeholder="Search for IP addresses"/>
          <button type="submit">{'>'}</button>
      </form>
    </div>
  )
}

export default SearchBar;
