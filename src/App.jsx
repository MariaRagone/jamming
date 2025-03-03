import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import SearchBar from "./Components/SearchBar/SearchBar";

const App = () => {
  const [accessToken, setAccessToken] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [trackResultList, setTrackResultList] = useState([]);

  const onSearchBarClick = async () => {
    const tracks = await getAlbumTracks(searchTerm, accessToken);
    const mappedTracks = tracks.map((track) => {
      return {
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.album.uri,
      };
    });
    setTrackResultList(mappedTracks);
  };
  return (
    <div>
      {!accessToken ? (
        <Header accessToken={accessToken} setAccessToken={setAccessToken} />
      ) : (
        <>
          <Header accessToken={accessToken} setAccessToken={setAccessToken} />
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            onClick={onSearchBarClick}
          />

          <Home trackResultList={trackResultList} accessToken={accessToken} />
        </>
      )}
    </div>
  );
};

const getAlbumTracks = async (searchTerm, accessToken) => {
  if (!searchTerm) {
    alert("Please enter a search term!");
    return;
  }

  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=20`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      method: "GET",
    }
  );

  if (!result.ok) {
    const errorDetails = await result.json();
    console.error("Error:", result.status, result.statusText, errorDetails);
    return;
  }

  const data = await result.json();

  return data.tracks.items;
};

export default App;
