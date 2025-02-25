import { clientId } from "./Utilities/SpotifyApi";
import { clientSecret } from "./Utilities/SpotifyApi";
import { redirectUri } from "./Utilities/SpotifyApi";
import { scopes } from "./Utilities/SpotifyApi";

var app = express();
const querystring = require("querystring");

app.get("/login", function (req, res) {
  var state = generateRandomString(16);

  res.redirect(
    `https://accounts.spotify.com/authorize?`,
    querystring.stringify({
      response_type: `code`,
      client_id: clientId,
      scope: scopes,
      redirect_uri: redirectUri,
      state: state,
    })
  );
});

app.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var state = req.query.state || null;

  if (state === null) {
    res.redirect(
      "/#" +
        querystring.stringify({
          error: "state_mismatch",
        })
    );
  } else {
    var authOptions = {
      url: "https://accounts.spotify.com/api/token",
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code",
      },
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          new Buffer.from(client_id + ":" + client_secret).toString("base64"),
      },
      json: true,
    };
  }
});

// const getUsersSpotifyToken = async (accessToken) => {
//   let accessToken = localStorage.getItem("access_token");

//   const result = await fetch(`https://api.spotify.com/v1/me`, {
//     headers: {
//       authorization: `Bearer ${accessToken}`,
//     },
//   });

//   return await result.json();
// };
