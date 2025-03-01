import propTypes from "../propTypes";
import { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";
import Button from "../Buttons/Button";

const PlayList = ({
  userProfileDetails,
  accessToken,
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
              <p>User ID: {userProfileDetails.id}</p>
              <p>Token:  {accessToken}</p>

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
          onClick={() => postPlayListToSpotify(playLuserProfileDetails.id, accessToken, playListNameist)}
          // onClick={() => addPlayListToSpotify(playList)}
        ></Button>
      </div>
    </div>
  );
};

PlayList.propTypes = {
  resultsList: propTypes.resultsList,
  playList: propTypes.playList,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  addPlayListToSpotify: propTypes.addPlayListToSpotify,
  userSpotifyList: propTypes.userSpotifyList,
  userProfileDetails: propTypes.userProfileDetails,

};


const postPlayListToSpotify = async (user_id, accessToken, playListName) => {
  if (!accessToken) {
      alert("Your login session expired. Please log in to continue.");
      return;
    }
  const response = await fetch(`https://api.spotify.com/v1/users/${userProfileDetails.id}/playlists`, {
      method: "POST",
      headers: {
          "Authorization": `Bearer ${accessToken}`,
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          name: playListName,   
          public: false,        
          description: "Created using Spotify API", 
      }),
  });

}
export default PlayList;
