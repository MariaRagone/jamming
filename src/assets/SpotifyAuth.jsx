import { useEffect } from "react";
import propTypes from "../Components/propTypes";
import Button from "../Components/Buttons/Button";
import {
  AuthEndpoint,
  responseType,
  redirectUri,
  clientId,
} from "./SpotifyApi";

export default function SpotifyAuth({ setAccessToken, accessToken }) {
  const accessUrl = `${AuthEndpoint}?client_id=${clientId}&response_type=${responseType}&scope=playlist-modify-public&redirect_uri=${redirectUri}`;

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    window.localStorage.setItem("token", accessToken);

    if (!token) {
      const urlParams = new URLSearchParams(
        window.location.hash.replace("#", "?")
      );
      const ACCESS_TOKEN = urlParams.get("access_token");
      token = ACCESS_TOKEN;
      setAccessToken(token);
    }
  }, [accessToken, setAccessToken]);

  function logout(e) {
    e.preventDefault();
    setAccessToken("");
    window.localStorage.setItem("token", null);
  }

  return (
    <>
      {!accessToken ? (
        <>
          <Button type="submit" name={"Log In"} href={accessUrl}></Button>
        </>
      ) : (
        <Button type="submit" name={"Log Out"} onClick={logout}></Button>
      )}
    </>
  );
}

SpotifyAuth.propTypes = {
  setAccessToken: propTypes.setAccessToken,
  accessToken: propTypes.accessToken,
};
