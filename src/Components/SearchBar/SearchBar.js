import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../Buttons/Button";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
        {/* <Button
          name={"Find It!"}
          onClick={(e) => {
            e.preventDefault();
            console.log(searchTerm);
          }}
        /> */}

        <button
          type="submit"
          onClick={() => {
            alert(`
            Search Term: ${searchTerm}`);
          }}
        >
          Find It
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
