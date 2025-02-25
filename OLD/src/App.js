import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const resultsList = [
    {
      id: 1,
      name: "My Jesus",
      artist: "Ann Wilson",
      album: "the Album",
      uri: 1,
    },
    {
      id: 2,
      name: "Way Maker",
      artist: "Leeland",
      album: "Better Word",
      uri: 2,
    },
    {
      id: 3,
      name: "Graves Into Gardens",
      artist: "Elevation Worship",
      album: "Graves Into Gardens",
      uri: 3,
    },
    {
      id: 4,
      name: "Goodness of God",
      artist: "Bethel Music",
      album: "Victory",
      uri: 4,
    },
    {
      id: 5,
      name: "Who You Say I Am",
      artist: "Hillsong Worship",
      album: "There Is More",
      uri: 5,
    },
    {
      id: 6,
      name: "Battle Belongs",
      artist: "Phil Wickham",
      album: "Hymn of Heaven",
      uri: 6,
    },
    {
      id: 7,
      name: "The Blessing",
      artist: "Kari Jobe, Cody Carnes",
      album: "The Blessing",
      uri: 7,
    },
    {
      id: 8,
      name: "Build My Life",
      artist: "Pat Barrett",
      album: "Pat Barrett",
      uri: 8,
    },
    {
      id: 9,
      name: "King of Kings",
      artist: "Hillsong Worship",
      album: "Awake",
      uri: 9,
    },
    {
      id: 10,
      name: "I Can Only Imagine",
      artist: "MercyMe",
      album: "Almost There",
      uri: 10,
    },
  ];

  return (
    <div>
      <Header />
      <SearchBar />
      <Home resultsList={resultsList} />
    </div>
  );
};

export default App;
