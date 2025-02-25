import "./Buttons.css";
import propTypes from "../propTypes";

const SaveToSpotifyButton = ({ name }) => {
  return (
    <div className="save-to-spotify">
      <button className="search-button">{name}</button>
    </div>
  );
};

SaveToSpotifyButton.propTypes = propTypes.saveToSpotifyButton;

export default SaveToSpotifyButton;
