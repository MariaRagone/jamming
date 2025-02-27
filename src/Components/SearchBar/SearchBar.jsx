import propTypes from "../propTypes";
import "./SearchBar.css";
import Button from "../Buttons/Button";
import { getAlbumTracks } from "../../assets/SpotifySearch";

const SearchBar = ({
  accessToken,
  searchTerm,
  setSearchTerm,
  // trackResultList = [],
  setTrackResultList,
}) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    getAlbumTracks(searchTerm, accessToken, setTrackResultList);
    // console.log(`Track Results ${trackResultList}`);
    // console.log(`Access Token ${accessToken}`);
    // console.log(`Search Term ${searchTerm}`);
  };

  return (
    <div className="search-bar-area">
      <form>
        <input
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
          type="text"
          placeholder="Search for a song, artist, or album..."
        ></input>
        <Button
          type="submit"
          name={"Find It!"}
          onClick={handleButtonClick}
          accessToken={accessToken}
        />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: propTypes.string,
  setSearchTerm: propTypes.func,
  trackResultList: propTypes.array,
  setTrackResultList: propTypes.func,
  accessToken: propTypes.accessToken,
  setAccessToken: propTypes.setAccessToken,
};
export default SearchBar;
