import React, { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";

const Home = ({ resultsList }) => {
  const addTrackToPlaylist = (resultsList, playList, trackToAdd) => {
    playList.push(trackToAdd);
  };

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
      <ResultsContainer
        resultsList={resultsList}
        tracks={playListTracks}
        addTrack={addTrack}
        removeTrack={removeTrack}
      />
    </div>
  );
};
export default Home;
