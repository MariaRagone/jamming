import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import Button from "../Buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import SearchResults from "../SearchResults/SearchResults";

const PlayList = ({
  resultsList,
  track,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
}) => {
  const [playListName, setPlayListName] = useState("");
  const [saveToSpotify, setSaveToSpotify] = useState([]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    alert(`Saved!`);
  };

  return (
    <div className="play-list">
      <form>
        <input
          className="play-list-input"
          onChange={(e) => {
            setPlayListName(e.target.value);
          }}
          autoFocus
          value={playListName}
          type="text"
          placeholder="playlist name..."
        ></input>
      </form>
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
        <Button
          type="submit"
          name={"Save to Spotify!"}
          onClick={handleButtonClick}
        ></Button>
      </div>
    </div>
  );
};

export default PlayList;
