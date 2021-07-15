
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
      <form>
          <input 
          value={searchValue} 
          onChange={handleSearchInputChanges} type="text" 
          placeholder={props.placeholder}
          />
          <button 
          type="submit"
          onClick={callSearchFunction}
          >{'>'}
          </button>
      </form>
    </div>
  )
}

export default SearchBar;
