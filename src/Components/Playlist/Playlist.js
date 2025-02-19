import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const PlayList = ({ resultsList, playList, addTrack, removeTrack }) => {
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
      <div>
        {playList.map((track) => {
          return (
            <div key={track.name}>
              <Track
                track={track}
                resultsList={resultsList}
                removeTrack={removeTrack}
                addTrack={addTrack}
              ></Track>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
