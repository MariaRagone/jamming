import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Track.css";

const Track = ({ playList = [], track, addTrack, removeTrack }) => {
  const isInPlayList = playList.some(
    (existingTrack) => existingTrack.id === track.id
  );

  return (
    <div className="track-card">
      <div className="track-header">
        <h1>{track.name}</h1>
        <span className="plus-icon">
          {isInPlayList ? (
            <FontAwesomeIcon
              className="icon"
              icon={faMinus}
              onClick={() => removeTrack(track)}
            />
          ) : (
            <FontAwesomeIcon
              className="icon"
              icon={faPlus}
              onClick={() => addTrack(track)}
            />
          )}
        </span>
      </div>
      <p>
        {track.artist} | {track.album}
      </p>
    </div>
  );
};

export default Track;
