import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";

const PlayList = ({ tracks, removeTrack }) => {
  const [playListName, setPlayListName] = useState("");
  return (
    <div className="play-list">
      <form>
        <input
          onChange={(e) => {
            setPlayListName(e.target.value);
          }}
          value={playListName}
          type="text"
          placeholder="enter a playlist name..."
        ></input>
      </form>
      <h2>{playListName}</h2>

      {/* {tracks.map((track) => {
        return (
          <div>
            <Track
              removeTrack={removeTrack}
              track={track}
              key={track.name}
            ></Track>
          </div>
        );
      })} */}
    </div>
  );
};

export default PlayList;

/* this is where the tracks will go when you add them to your saved list */
