import { clientId } from "./SpotifyApi";

export const getAlbumTracks = async (searchTerm) => {
  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=50`,
    {
      headers: {
        authorization: `Bearer ${clientId}`,
      },
    }
  );
  return await result.json();
};
