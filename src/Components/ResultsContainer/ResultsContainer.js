import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = ({
  resultsList,
  playListTracks,
  addTrack,
  removeTrack,
}) => {
  return (
    <div className="results-container">
      <SearchResults resultsList={resultsList} addTrack={addTrack} />
      <PlayList
        resultsList={resultsList}
        tracks={playListTracks}
        removeTrack={removeTrack}
      />
    </div>
  );
};

export default ResultsContainer;
