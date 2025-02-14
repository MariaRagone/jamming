import React from "react";
import "./Track.css";

const Track = ({ track }) => {
  console.log(track);
  return (
    <div className="track-card">
      <h2>{track.name}</h2>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
