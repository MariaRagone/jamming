import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Track.css";

const Track = ({ track }) => {
  console.log(track);
  return (
    <div className="track-card">
      <div className="track-header">
        <h1>{track.name}</h1>
        <span className="plus-icon">
          <FontAwesomeIcon icon={faPlus} />
        </span>
      </div>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
