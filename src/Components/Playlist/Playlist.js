import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

const PlayList = ({
  resultsList,
  track,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
}) => {
  const [playListName, setPlayListName] = useState("");
  return (
    <div className="play-list">
      <form>
        <input
          onChange={(e) => {
            setPlayListName(e.target.value);
          }}
          autoFocus
          value={playListName}
          type="text"
          placeholder="enter a playlist name..."
        ></input>
      </form>
      <h2>{playListName}</h2>
      <div>
        {playList.map((track) => {
          return (
            <div key={track.id}>
              <Track
                track={track}
                resultsList={resultsList}
                removeTrackFromPlaylist={removeTrackFromPlaylist}
                addTrackToPlayList={addTrackToPlayList}
                playList={playList}
              ></Track>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayList;
