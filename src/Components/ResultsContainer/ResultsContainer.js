import React from "react";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import SpotifyPlayList from "../SpotifyPlayList/SpotifyPlayList";

const ResultsContainer = ({
  resultsList,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  addPlayListToSpotify,
  userSpotifyList,
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
        addPlayListToSpotify={addPlayListToSpotify}
        userSpotifyList={userSpotifyList}
      />
      <SpotifyPlayList
        resultsList={resultsList}
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addPlayListToSpotify={addPlayListToSpotify}
        userSpotifyList={userSpotifyList}
      ></SpotifyPlayList>
    </div>
  );
};

export default ResultsContainer;
