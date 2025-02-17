import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = () => {
  return (
    <div className="results-container">
      <SearchResults />
      <PlayList />
    </div>
  );
};

export default ResultsContainer;
