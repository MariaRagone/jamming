import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Track.css";

export const trackList = () => {
  const [track, setTrack] = useState([]);
};

const addTrack = (track, setTrack, newTrack) => {
  setTrack([...track, newTrack]);
};
const Track = ({ track, onAddTrack }) => {
  console.log(track);
  return (
    <div className="track-card">
      <div className="track-header">
        <h1>{track.name}</h1>
        <span className="plus-icon">
          <FontAwesomeIcon icon={faPlus} onClick={() => onAddTrack(track)} />
        </span>
      </div>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
