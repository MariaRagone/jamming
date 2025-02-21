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

  const addPlayListToSpotify = (trackToAdd) => {
    setUserSpotifyList((userSpotifyList) => {
      return [...userSpotifyList, trackToAdd];
    });
  };

  return (
    <div>
      <ResultsContainer
        resultsList={resultsList}
        playList={playList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addPlayListToSpotify={addPlayListToSpotify}
        userSpotifyList={userSpotifyList}
      />
    </div>
  );
};
export default Home;
