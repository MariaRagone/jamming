import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import Button from "../Buttons/Button";
import SpotifyPlayList from "../SpotifyPlayList/SpotifyPlayList";

const PlayList = ({
  resultsList,
  track,
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
        >
          {console.log(`spotify playlist: ${userSpotifyList}`)}
          {/* {console.log(`playlist: ${playList}`)} */}
        </Button>
      </div>
    </div>
  );
};

export default PlayList;
