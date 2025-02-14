import React from "react";
import "./Tracklist.css";

const trackList = [
  {
    name: "My Jesus",
    artist: "Ann Wilson",
    album: "the Album",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
  },
  {
    name: "Levitating",
    artist: "Dua Lipa",
    album: "Future Nostalgia",
  },
  {
    name: "Watermelon Sugar",
    artist: "Harry Styles",
    album: "Fine Line",
  },
  {
    name: "drivers license",
    artist: "Olivia Rodrigo",
    album: "SOUR",
  },
  {
    name: "Good 4 U",
    artist: "Olivia Rodrigo",
    album: "SOUR",
  },
  {
    name: "Save Your Tears",
    artist: "The Weeknd",
    album: "After Hours",
  },
  {
    name: "Peaches",
    artist: "Justin Bieber",
    album: "Justice",
  },
  {
    name: "Montero (Call Me By Your Name)",
    artist: "Lil Nas X",
    album: "Montero",
  },
];
console.log(trackList);

function TrackList() {
  return (
    <div className="trackList">
      {trackList.map((track) => (
        <div key={track.name}>
          <p>Name: {track.name}</p>
          <p>Artist: {track.artist}</p>
          <p>Album: {track.album}</p>
        </div>
      ))}
    </div>
  );
}
export default TrackList;
