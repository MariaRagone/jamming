import React, { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = ({ resultsList }) => {
  const [playList, setPlayList] = useState([]);
  const [userSpotifyList, setUserSpotifyList] = useState([]);

  const addTrackToPlayList = (trackToAdd) => {
    setPlayList((playList) => {
      return [...playList, trackToAdd];
    });
  };

  const removeTrackFromPlaylist = (trackToRemove) => {
    setPlayList((tracks) =>
      playList.filter((track) => track.id !== trackToRemove.id)
    );
  };

  const addPlayListToSpotify = (playList) => {
    setUserSpotifyList((userSpotifyList) => {
      const duplicateTracks = playList.filter((trackToAdd) =>
        userSpotifyList.some((track) => track.id === trackToAdd.id)
      );
      if (duplicateTracks.length > 0) {
        alert(
          "Some tracks are already in your Spotify playlist and won't be added again."
        );
      }
      const newTracks = playList.filter(
        (trackToAdd) =>
          !userSpotifyList.some((track) => track.id === trackToAdd.id)
      );
      return [...userSpotifyList, ...newTracks];
    });
  };

  return (
    <div>
      <ResultsContainer
        resultsList={resultsList}
        playList={playList}
        userSpotifyList={userSpotifyList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addPlayListToSpotify={addPlayListToSpotify}
      />
    </div>
  );
};
export default Home;
