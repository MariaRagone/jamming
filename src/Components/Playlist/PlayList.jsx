import propTypes from "../propTypes";
import { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import Button from "../Buttons/Button";

const PlayList = ({
  accessToken,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  userSpotifyList,
}) => {
  const [playListName, setPlayListName] = useState("");

  const handleClick = async () => {
    const profileData = await getProfileData(accessToken);
    await postPlayListToSpotify(profileData.id, accessToken, playListName);
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
        <p>Token: {accessToken}</p>
        {playList.map((track) => {
          return (
            <div key={track.id}>
              <Track
                track={track}
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
          onClick={handleClick}
        ></Button>
      </div>
    </div>
  );
};

PlayList.propTypes = {
  accessToken: propTypes.accessToken,
  resultsList: propTypes.resultsList,
  playList: propTypes.playList,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  addPlayListToSpotify: propTypes.addPlayListToSpotify,
  userSpotifyList: propTypes.userSpotifyList,
  userProfileDetails: propTypes.userProfileDetails,
};

const getProfileData = async (accessToken) => {
  if (!accessToken) {
    alert("Your login session expired. Please log in to continue.");
    return;
  }

  const result = await fetch(`https://api.spotify.com/v1/me`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });
  const data = await result.json();
  return data;
};

const postPlayListToSpotify = async (userId, accessToken, playListName) => {
  if (!accessToken) {
    alert("Your login session expired. Please log in to continue.");
    return;
  }
  await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: playListName,
      public: false,
      description: "Created using Spotify API",
    }),
  });
};
export default PlayList;
