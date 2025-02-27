import { useState } from "react";
import propTypes from "../propTypes";
import "./SearchBar.css";
import Button from "../Buttons/Button";
import { getAlbumTracks } from "../../assets/SpotifySearch";

const SearchBar = ({ accessToken, trackResultList, setTrackResultList }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleButtonClick = (e) => {
    e.preventDefault();
    // alert(`Search Term: ${searchTerm}`);
    console.log(`Track Results ${trackResultList}`);
    getAlbumTracks(searchTerm, accessToken).then((res) => {
      setTrackResultList(res.albumTracks);
    });
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
  trackResultList: propTypes.array,
  setTrackResultList: propTypes.func,
  accessToken: propTypes.accessToken,
  setAccessToken: propTypes.setAccessToken,
};
export default SearchBar;
