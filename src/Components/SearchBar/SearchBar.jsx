import propTypes from "../propTypes";
import "./SearchBar.css";
import Button from "../Buttons/Button";

const SearchBar = ({ searchTerm, setSearchTerm, onClick }) => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    onClick();
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
        <Button type="submit" name={"Find It!"} onClick={handleButtonClick} />
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: propTypes.string,
  setSearchTerm: propTypes.func,
  onClick: propTypes.func,
};
export default SearchBar;
