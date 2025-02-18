import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const resultsList = [
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

  return (
    <div>
      <Header />
      <SearchBar />
      <Home resultsList={resultsList} />
    </div>
  );
};

export default App;
