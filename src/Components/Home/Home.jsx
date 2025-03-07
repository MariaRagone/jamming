import { useState } from "react";
import "./Home.css";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import propTypes from "../propTypes";

const Home = ({ trackResultList, userProfileDetails, accessToken }) => {
  const [playList, setPlayList] = useState([]);
  const [userSpotifyList, setUserSpotifyList] = useState([]);

  const addTrackToPlayList = (trackToAdd) => {
    setPlayList((playList) => {
      return [...playList, trackToAdd];
    });
  };

  const removeTrackFromPlaylist = (trackToRemove) => {
    setPlayList((tracks) =>
      tracks.filter((track) => track.id !== trackToRemove.id)
    );
  };

  const addPlayListToSpotify = (playList) => {
    setUserSpotifyList((userSpotifyList) => {
      const duplicateTracks = playList.filter((trackToAdd) =>
        userSpotifyList.some((track) => track.id === trackToAdd.id)
      );
      if (duplicateTracks.length > 0) {
        alert(
          "Some tracks are already in your Spotify playlist and won't be added again."
        );
      }
      const newTracks = playList.filter(
        (trackToAdd) =>
          !userSpotifyList.some((track) => track.id === trackToAdd.id)
      );
      setPlayList((playList) =>
        playList.filter(
          (track) => !newTracks.some((newTrack) => newTrack.id === track.id)
        )
      );
      return [...userSpotifyList, ...newTracks];
    });
  };

  return (
    <div className="home">
      <span id="id"></span>
      <ResultsContainer
        userProfileDetails={userProfileDetails}
        trackResultList={trackResultList}
        playList={playList}
        userSpotifyList={userSpotifyList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addPlayListToSpotify={addPlayListToSpotify}
        accessToken={accessToken}
      />
    </div>
  );
};

Home.propTypes = {
  accessToken: propTypes.accessToken,
  resultsList: propTypes.resultsList,
  trackResultList: propTypes.trackResultList,
  onClick: propTypes.onClick,
  userProfileDetails: propTypes.userProfileDetails,
};

export default Home;
