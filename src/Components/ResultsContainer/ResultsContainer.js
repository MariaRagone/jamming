import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import SavedTrackList from "../TrackList/SavedTrackList";

const ResultsContainer = () => {
  return (
    <div className="results-container">
      <SearchResults />
      <SavedTrackList />
    </div>
  );
};

export default ResultsContainer;
