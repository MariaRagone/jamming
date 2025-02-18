import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Home />
    </div>
  );
}

export default App;
