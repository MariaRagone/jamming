import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import Button from "../Buttons/Button";

const PlayList = ({
  resultsList,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  addPlayListToSpotify,
  userSpotifyList,
}) => {
  const [playListName, setPlayListName] = useState("");

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
                userSpotifyList={userSpotifyList}
              ></Track>
            </div>
          );
        })}
        <Button
          type="submit"
          name={"Save to Spotify!"}
          onClick={() => addPlayListToSpotify(playList)}
        ></Button>
      </div>
    </div>
  );
};

export default PlayList;
