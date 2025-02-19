import React from "react";
import "./SearchResults.css";
import Track from "../Track/Track";

// const resultsList = [
//   {
//     name: "My Jesus",
//     artist: "Ann Wilson",
//     album: "the Album",
//   },
//   {
//     name: "Way Maker",
//     artist: "Leeland",
//     album: "Better Word",
//   },
//   {
//     name: "Graves Into Gardens",
//     artist: "Elevation Worship",
//     album: "Graves Into Gardens",
//   },
//   {
//     name: "Goodness of God",
//     artist: "Bethel Music",
//     album: "Victory",
//   },
//   {
//     name: "Who You Say I Am",
//     artist: "Hillsong Worship",
//     album: "There Is More",
//   },
//   {
//     name: "Battle Belongs",
//     artist: "Phil Wickham",
//     album: "Hymn of Heaven",
//   },
//   {
//     name: "The Blessing",
//     artist: "Kari Jobe, Cody Carnes",
//     album: "The Blessing",
//   },
//   {
//     name: "Build My Life",
//     artist: "Pat Barrett",
//     album: "Pat Barrett",
//   },
//   {
//     name: "King of Kings",
//     artist: "Hillsong Worship",
//     album: "Awake",
//   },
//   {
//     name: "I Can Only Imagine",
//     artist: "MercyMe",
//     album: "Almost There",
//   },
// ];
const SearchResults = ({ resultsList, addTrack, removeTrack, playList }) => {
  return (
    <div className="search-results">
      <h2>Results</h2>
      {resultsList.map((track) => {
        return (
          <div key={track.id}>
            <Track
              track={track}
              resultsList={resultsList}
              addTrack={addTrack}
              removeTrack={removeTrack}
              playList={playList}
            ></Track>
          </div>
        );
      })}
    </div>
  );
};
export default SearchResults;
