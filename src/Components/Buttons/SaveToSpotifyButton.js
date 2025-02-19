import React from "react";
import "./Buttons.css";
const SaveToSpotifyButton = ({ name }) => {
  return (
    <div className="save-to-spotify">
      <button className="search-button">{name}</button>
    </div>
  );
};

export default SaveToSpotifyButton;
