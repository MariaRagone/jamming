import "./Header.css";
import { useState } from "react";
import SpotifyAuth from "../../assets/SpotifyAuth";
function Header() {
  const [accessToken, setAccessToken] = useState("");

  return (
    <div className="header">
      <div className="app-name">
        ja<span className="highlight">mmm</span>ing
      </div>
      <div className="login">
        <SpotifyAuth
          accessToken={accessToken}
          setAccessToken={setAccessToken}
        ></SpotifyAuth>
      </div>
    </div>
  );
}

export default Header;
