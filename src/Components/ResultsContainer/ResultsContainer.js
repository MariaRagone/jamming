import React from "react";
import "./ResultsContainer.css";
import Track from "../Track/Track";
import SearchResults from "../SearchResults/SearchResults";

const ResultsContainer = () => {
  return (
    <div className="results-container">
      <SearchResults></SearchResults>
    </div>
  );
};

export default ResultsContainer;
