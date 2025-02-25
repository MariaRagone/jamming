import "./SearchResults.css";
import Track from "../Track/Track";
import propTypes from "../propTypes";

const SearchResults = ({
  resultsList,
  addTrackToPlayList,
  removeTrackFromPlaylist,
  playList,
}) => {
  return (
    <div className="search-results">
      <h2>Results</h2>
      {resultsList.map((track) => {
        return (
          <div key={track.id}>
            <Track
              track={track}
              resultsList={resultsList}
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
  resultsList: propTypes.resultsList,
  addTrackToPlayList: propTypes.addTrackToPlayList,
  removeTrackFromPlaylist: propTypes.removeTrackFromPlaylist,
  playList: propTypes.playList,
};

export default SearchResults;
