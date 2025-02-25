import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../Buttons/Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleButtonClick = (e) => {
    e.preventDefault();
    alert(`Search Term: ${searchTerm}`);
    // console.log(searchTerm);
  };

  return (
    <div className="search-bar-area">
      <form>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          type="text"
          placeholder="Search for a song, artist, or album..."
        ></input>
        <Button type="submit" name={"Find It!"} onClick={handleButtonClick} />
      </form>
    </div>
  );
};

export default SearchBar;
