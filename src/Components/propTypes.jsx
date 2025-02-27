import PropTypes from "prop-types";

const trackPropType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  album: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
});

const propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  setAccessToken: PropTypes.func.isRequired,
  data: PropTypes.string,
  accessToken: PropTypes.string.isRequired,
  track: trackPropType,
  resultsList: PropTypes.arrayOf(trackPropType).isRequired,
  trackResultList: PropTypes.arrayOf(trackPropType),
  setTrackResultList: PropTypes.func.isRequired,
  playList: PropTypes.arrayOf(trackPropType).isRequired,
  userSpotifyList: PropTypes.arrayOf(trackPropType).isRequired,
  addTrackToPlayList: PropTypes.func.isRequired,
  removeTrackFromPlaylist: PropTypes.func.isRequired,
  addPlayListToSpotify: PropTypes.func.isRequired,
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  }).isRequired,
  saveToSpotifyButton: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  spotifyPlayList: PropTypes.shape({
    resultsList: PropTypes.arrayOf(trackPropType).isRequired,
    playList: PropTypes.arrayOf(trackPropType).isRequired,
    addTrackToPlayList: PropTypes.func.isRequired,
    removeTrackFromPlaylist: PropTypes.func.isRequired,
    addPlayListToSpotify: PropTypes.func.isRequired,
    userSpotifyList: PropTypes.arrayOf(trackPropType).isRequired,
  }).isRequired,
};

export default propTypes;
