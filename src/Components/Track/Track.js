import React from "react";
import "./Track.css";

const Track = ({ track }) => {
  console.log(track);
  return (
    <div className="track-card">
      <h1>{track.name}</h1>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
