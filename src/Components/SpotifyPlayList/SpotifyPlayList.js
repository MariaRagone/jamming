import React, { useState } from "react";
import Track from "../Track/Track";

const SpotifyPlayList = ({
  resultsList,
  track,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  addPlayListToSpotify,
  userSpotifyList = [],
}) => {
  return (
    <div className="play-list">
      <h2>Spotify List</h2>{" "}
      <div>
        {userSpotifyList.some((track) => {
          return (
            <div key={track.uri}>
              <Track
                track={track}
                resultsList={resultsList}
                removeTrackFromPlaylist={removeTrackFromPlaylist}
                addTrackToPlayList={addTrackToPlayList}
                playList={playList}
                userSpotifyList={userSpotifyList}
                addPlayListToSpotify={addPlayListToSpotify}
              ></Track>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpotifyPlayList;
