import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "./Track.css";
import propTypes from "../propTypes";

const Track = ({
  playList = [],
  // userSpotifyList = [],
  track,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  // addPlayListToSpotify,
}) => {
  const isInPlayList = playList.some(
    (existingTrack) => existingTrack.id === track.id
  );

  return (
    <>
      {isInPlayList ? (
        <div className="added-track-card">
          <div className="track-header">
            <h1>{track.name}</h1>
            <span className="icon">
              <FontAwesomeIcon
                key={track.id}
                className="icon"
                icon={faMinus}
                onClick={() => removeTrackFromPlaylist(track)}
              />
            </span>
          </div>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
      ) : (
        <div className="track-card">
          <div className="track-header">
            <h1>{track.name}</h1>
            <span className="icon">
              <FontAwesomeIcon
                key={track.id}
                className="icon"
                icon={faPlus}
                onClick={() => addTrackToPlayList(track)}
              />
            </span>
          </div>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
      )}
    </>
  );
};

Track.propTypes = {
  playList: propTypes.playList,
  userSpotifyList: propTypes.userSpotifyList,
  track: propTypes.track,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  addPlayListToSpotify: propTypes.addPlayListToSpotify,
};

export default Track;
