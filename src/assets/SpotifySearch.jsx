export const getAlbumTracks = async (searchTerm, accessToken) => {
  const result = await fetch(
    `https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  console.log(accessToken);
  if (!searchTerm) {
    alert("Please enter a search term!");
  }
  if (!result.ok) {
    const errorDetails = await result.json();
    console.error("Error:", result.status, result.statusText, errorDetails);
  }
  return await result.json();
};
