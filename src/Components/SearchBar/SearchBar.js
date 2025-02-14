import React, { useState } from "react";
import "./SearchBar.css";
import SearchButton from "../Buttons/SearchButton";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search for a song..."></input>
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchBar;
