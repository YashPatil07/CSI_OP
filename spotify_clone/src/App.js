import React, { useState, useEffect } from "react";
import Login from "./pages/login/Login";
import { getToken } from "./API/Auth";
import SpotifyWebApi from "spotify-web-api-js"; //connect spotify to rract
import Player from "./pages/player/Player";
import { useDataLayerValue } from "./context/DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const _token = getToken();
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("hey ", user);
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("7vgwtuBOAxsyQfCXWtAmOT").then((response) => {
        dispatch({
          type: "SET_DISPATCH",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
