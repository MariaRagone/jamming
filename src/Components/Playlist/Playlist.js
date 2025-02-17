import React, { useState } from "react";
import "./PlayList.css";
import Track from "../Track/Track";

const trackList = [
  {
    name: "My Jesus",
    artist: "Ann Wilson",
    album: "the Album",
  },
  {
    name: "Way Maker",
    artist: "Leeland",
    album: "Better Word",
  },
  {
    name: "Graves Into Gardens",
    artist: "Elevation Worship",
    album: "Graves Into Gardens",
  },
  {
    name: "Goodness of God",
    artist: "Bethel Music",
    album: "Victory",
  },
  {
    name: "Who You Say I Am",
    artist: "Hillsong Worship",
    album: "There Is More",
  },
  {
    name: "Battle Belongs",
    artist: "Phil Wickham",
    album: "Hymn of Heaven",
  },
  {
    name: "The Blessing",
    artist: "Kari Jobe, Cody Carnes",
    album: "The Blessing",
  },
  {
    name: "Build My Life",
    artist: "Pat Barrett",
    album: "Pat Barrett",
  },
  {
    name: "King of Kings",
    artist: "Hillsong Worship",
    album: "Awake",
  },
  {
    name: "I Can Only Imagine",
    artist: "MercyMe",
    album: "Almost There",
  },
];

const PlayList = () => {
  const [playListName, setPlayListName] = useState("");
  return (
    <div className="play-list">
      <form>
        <input
          onChange={(e) => {
            setPlayListName(e.target.value);
          }}
          value={playListName}
          type="text"
          placeholder="enter a playlist name..."
        ></input>
      </form>
      <h2>{playListName}</h2>
      {trackList.map((track) => {
        return (
          <div>
            <Track track={track} key={track.name}></Track>
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;

/* this is where the tracks will go when you add them to your saved list */
