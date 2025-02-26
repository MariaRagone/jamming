import { useEffect } from "react";
import propTypes from "../Components/propTypes";
import Button from "../Components/Buttons/Button";
import {
  AuthEndpoint,
  responseType,
  redirectUri,
  clientId,
} from "./SpotifyApi";

export default function SpotifyAuth({
  setAccessToken,
  accessToken,
  setUserName,
}) {
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

    if (token) {
      const fetchProfile = async (accessToken) => {
        try {
          const result = await fetch(`https://api.spotify.com/v1/me`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${accessToken}`,
            },
          });
          const data = await result.json();
          setUserName(data.display_name);
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      };

      fetchProfile(token);
    }
  }, [accessToken, setAccessToken, setUserName]);

  function logout(e) {
    e.preventDefault();
    setAccessToken("");
    setUserName("");
    window.localStorage.setItem("token", null);
  }

  function login(e) {
    e.preventDefault();
    window.location.href = accessUrl;
  }

  return (
    <>
      {!accessToken ? (
        <Button type="submit" name={"Log In"} onClick={login}></Button>
      ) : (
        <Button type="submit" name={"Log Out"} onClick={logout}></Button>
      )}
    </>
  );
}

SpotifyAuth.propTypes = {
  setAccessToken: propTypes.setAccessToken,
  accessToken: propTypes.accessToken,
  setUserName: propTypes.accessToken,
};
