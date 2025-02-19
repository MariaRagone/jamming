import React, { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = ({ resultsList }) => {
  const [playList, setPlayList] = useState([]);

  const addTrack = (trackToAdd) => {
    setPlayList((playList) => {
      if (
        playList.some((existingTrack) => existingTrack.id === trackToAdd.id)
      ) {
        alert("You already added this track to the playlist.");
        return playList;
      }

      // playList.push(trackToAdd);
      return [...playList, trackToAdd];
    });
  };

  const removeTrack = (trackToRemove) => {
    setPlayList((tracks) =>
      playList.filter((track) => track.id !== trackToRemove.id)
    );
  };
  return (
    <div>
      <ResultsContainer
        resultsList={resultsList}
        playList={playList}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
};
export default Home;
