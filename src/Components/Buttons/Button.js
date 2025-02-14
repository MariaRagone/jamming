import React from "react";

const SearchButton = ({ name }) => {
  return (
    <div>
      <button className="search-button">{name}</button>
    </div>
  );
};

export default SearchButton;
