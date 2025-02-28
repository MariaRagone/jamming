import "./SearchResults.css";
import Track from "../Track/Track";
import propTypes from "../propTypes";

const SearchResults = ({
  trackResultList,
  // resultsList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  playList,
}) => {
  return (
    <div className="search-results">
      <h2>Results</h2>
      {trackResultList.map((track) => {
        return (
          <div key={track.id}>
            <Track
              track={track}
              trackResultList={trackResultList}
              addTrackToPlayList={addTrackToPlayList}
              removeTrackFromPlaylist={removeTrackFromPlaylist}
              playList={playList}
            ></Track>
          </div>
        );
      })}
    </div>
  );
};

SearchResults.propTypes = {
  trackResultList: propTypes.trackResultList,

  resultsList: propTypes.resultsList,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  playList: propTypes.playList,
};

export default SearchResults;
