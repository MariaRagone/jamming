import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../Buttons/Button";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form>
        <input type="text" placeholder="Search for a song..."></input>
        <Button name={"Find It!"} />
      </form>
    </div>
  );
};

export default SearchBar;
