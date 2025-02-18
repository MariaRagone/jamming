import React, { useState } from "react";
import "./Home.css";
import SearchResults from "../SearchResults/SearchResults";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = () => {
  const [playListTracks, setPlayListTrack] = useState([
    {
      name: "name",
      artist: "artist",
      album: "album",
    },
  ]);
  const addTrack = (track) => {
    setPlayListTrack((playList) => [track, ...[playListTracks]]);
  };

  const removeTrack = (trackNameToRemove) => {
    setPlayListTrack((tracks) =>
      playListTracks.filter((track) => track.name !== trackNameToRemove)
    );
  };
  return (
    <div>
      <ResultsContainer />
    </div>
  );
};

export default Home;
