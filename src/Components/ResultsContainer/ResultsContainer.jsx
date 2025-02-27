import propTypes from "../propTypes";
import "./ResultsContainer.css";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import SpotifyPlayList from "../SpotifyPlayList/SpotifyPlayList";

const ResultsContainer = ({
  resultsList,
  trackResultList,
  playList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  addPlayListToSpotify,
  userSpotifyList,
}) => {
  return (
    <div className="results-container">
      <SearchResults
        resultsList={resultsList}
        trackResultList={trackResultList}
        addTrackToPlayList={addTrackToPlayList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        playList={playList}
      />
      <PlayList
        resultsList={resultsList}
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addTrackToPlayList={addTrackToPlayList}
        addPlayListToSpotify={addPlayListToSpotify}
        userSpotifyList={userSpotifyList}
      />
      <SpotifyPlayList
        resultsList={resultsList}
        playList={playList}
        removeTrackFromPlaylist={removeTrackFromPlaylist}
        addPlayListToSpotify={addPlayListToSpotify}
        userSpotifyList={userSpotifyList}
      ></SpotifyPlayList>
    </div>
  );
};

ResultsContainer.propTypes = {
  resultsList: propTypes.resultsList,
  trackResultList: propTypes.trackResultList,
  playList: propTypes.playList,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  addPlayListToSpotify: propTypes.addPlayListToSpotify,
  userSpotifyList: propTypes.userSpotifyList,
};

export default ResultsContainer;
