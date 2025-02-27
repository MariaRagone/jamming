import "./Header.css";
import { useState } from "react";
import propTypes from "../propTypes";
import SpotifyAuth from "../../assets/SpotifyAuth";

const Header = ({ accessToken, setAccessToken }) => {
  const [userName, setUserName] = useState("");

  return (
    <div className="header">
      <div className="app-name">
        ja<span className="highlight">mmm</span>ing
      </div>
      <div className="login">
        <h6>Hi {userName ? userName : "there"}</h6>
        <SpotifyAuth
          accessToken={accessToken}
          setAccessToken={setAccessToken}
          setUserName={setUserName}
        />
      </div>
    </div>
  );
};
Header.propTypes = {
  setAccessToken: propTypes.setAccessToken,
  accessToken: propTypes.accessToken,
};
export default Header;
