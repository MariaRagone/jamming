import "./Header.css";
import { useState } from "react";
import SpotifyAuth from "../../assets/SpotifyAuth";

function Header() {
  const [accessToken, setAccessToken] = useState("");
  const [userName, setUserName] = useState("");

  return (
    <div className="header">
      <div className="app-name">
        ja<span className="highlight">mmm</span>ing
      </div>
      <div className="login">
        <h2>Hi {userName ? userName : "there"}</h2>
        <SpotifyAuth
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserName={setUserName}
        />
      </div>
    </div>
  );
}

export default Header;
