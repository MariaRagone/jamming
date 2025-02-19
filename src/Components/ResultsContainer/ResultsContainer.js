import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

const ResultsContainer = ({
  resultsList,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
}) => {
  return (
    <div className="results-container">
      <SearchResults
        resultsList={resultsList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        playList={playList}
      />
      <PlayList
        resultsList={resultsList}
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addTrackToPlayList={addTrackToPlayList}
      />
    </div>
  );
};

export default ResultsContainer;
