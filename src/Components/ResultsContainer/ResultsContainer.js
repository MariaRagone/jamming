import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = ({ resultsList, playList, addTrack, removeTrack }) => {
  return (
    <div className="results-container">
      <SearchResults
        resultsList={resultsList}
        addTrack={addTrack}
        removeTrack={removeTrack}
        playList={playList}
      />
      <PlayList
        resultsList={resultsList}
        playList={playList}
        removeTrack={removeTrack}
        addTrack={addTrack}
      />
    </div>
  );
};

export default ResultsContainer;
