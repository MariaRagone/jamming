import React, { useState } from "react";
import "./Home.css";
import SearchResults from "../SearchResults/SearchResults";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = () => {
  const addTrack = (track) => {
    setPlayListTrack((playListTracks) => {
      if (
        playListTracks.some(
          (exhistingTrack) => exhistingTrack.name === track.name
        )
      ) {
        alert("You already added this track to the playlist.");
        return playListTracks;
      }

      return [track, ...playListTracks];
    });
  };
  const [playListTracks, setPlayListTrack] = useState([
    {
      name: "name",
      artist: "artist",
      album: "album",
    },
  ]);

  const removeTrack = (trackToRemove) => {
    setPlayListTrack((tracks) =>
      playListTracks.filter((track) => track.name !== trackToRemove)
    );
  };
  return (
    <div>
      <ResultsContainer addTrack={addTrack} />
    </div>
  );
};
export default Home;
