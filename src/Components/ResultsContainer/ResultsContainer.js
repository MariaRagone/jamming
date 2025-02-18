import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = ({ addTrack, removeTrack }) => {
  return (
    <div className="results-container">
      <SearchResults addTrack={addTrack} />
      <PlayList removeTrack={removeTrack} />
    </div>
  );
};

export default ResultsContainer;
