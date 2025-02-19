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
    },
    {
      id: 2,
      name: "Way Maker",
      artist: "Leeland",
      album: "Better Word",
    },
    {
      id: 3,
      name: "Graves Into Gardens",
      artist: "Elevation Worship",
      album: "Graves Into Gardens",
    },
    {
      id: 4,
      name: "Goodness of God",
      artist: "Bethel Music",
      album: "Victory",
    },
    {
      id: 5,
      name: "Who You Say I Am",
      artist: "Hillsong Worship",
      album: "There Is More",
    },
    {
      id: 6,
      name: "Battle Belongs",
      artist: "Phil Wickham",
      album: "Hymn of Heaven",
    },
    {
      id: 7,
      name: "The Blessing",
      artist: "Kari Jobe, Cody Carnes",
      album: "The Blessing",
    },
    {
      id: 8,
      name: "Build My Life",
      artist: "Pat Barrett",
      album: "Pat Barrett",
    },
    {
      id: 9,
      name: "King of Kings",
      artist: "Hillsong Worship",
      album: "Awake",
    },
    {
      id: 10,
      name: "I Can Only Imagine",
      artist: "MercyMe",
      album: "Almost There",
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
