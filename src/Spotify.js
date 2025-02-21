import { clientId } from "./Utilities/SpotifyApi";
import { clientSecret } from "./Utilities/SpotifyApi";
const getUsersSpotifyToken = async (accessToken) => {
  let accessToken = localStorage.getItem("access_token");

  const result = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return await result.json();
};
