import React, { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = ({ resultsList }) => {
  const [playList, setPlayList] = useState([]);

  console.log(playList);

  const addTrack = (trackToAdd) => {
    setPlayList((playList) => {
      if (
        playList.some(
          (exhistingTrack) => exhistingTrack.name === trackToAdd.name
        )
      ) {
        alert("You already added this track to the playlist.");
        return playList;
      }

      // playList.push(trackToAdd);
      return [trackToAdd, ...playList];
    });
  };

  // const removeTrack = (trackToRemove) => {
  //   setPlayListTrack((tracks) =>
  //     playListTracks.filter((track) => track.name !== trackToRemove)
  //   );
  // };
  return (
    <div>
      <ResultsContainer
        resultsList={resultsList}
        playList={playList}
        addTrack={addTrack}
        // removeTrack={removeTrack}
      />
    </div>
  );
};
export default Home;
