export const getAlbumTracks = async (
  searchTerm,
  accessToken,
  setTrackResultList
) => {
  if (!searchTerm) {
    alert("Please enter a search term!");
    return;
  }

  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=50`,
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
  const songs = data.tracks.items;
  setTrackResultList(songs);
  console.log(data);

  return data;
};
