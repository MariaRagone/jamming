import React, { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = ({ resultsList }) => {
  const [playList, setPlayList] = useState([]);

  const addTrackToPlayList = (trackToAdd, trackToRemove) => {
    setPlayList((playList) => {
      if (
        playList.some((existingTrack) => existingTrack.id === trackToAdd.id)
      ) {
        alert("You already added this track to the playlist.");
        return playList;
      }

      return [...playList, trackToAdd];
    });
  };

  const removeTrackFromPlaylist = (trackToRemove) => {
    setPlayList((tracks) =>
      playList.filter((track) => track.id !== trackToRemove.id)
    );
  };

  return (
    <div>
      <ResultsContainer
        resultsList={resultsList}
        playList={playList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
      />
    </div>
  );
};
export default Home;
