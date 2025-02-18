import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";

const PlayList = ({ playListTracks = [], removeTrack }) => {
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

      {/* {playListTracks.map((track, index) => {
        return (
          <div>
            <Track
              removeTrack={removeTrack}
              tracks={playListTracks}
              key={track.name}
            >
              {track.name}
            </Track>
          </div>
        );
      })} */}
    </div>
  );
};

export default PlayList;
