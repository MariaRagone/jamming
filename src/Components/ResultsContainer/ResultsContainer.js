import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = ({ addTrack }) => {
  return (
    <div className="results-container">
      <SearchResults addTrack={addTrack} />
      <PlayList />
    </div>
  );
};

export default ResultsContainer;
