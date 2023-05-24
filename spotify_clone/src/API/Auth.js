
const client_id = "";
const redirectUrl = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

var str = window.location.hash ; 
export const getToken = () =>{
return str.split('#access_token=').pop().split("&token_type")[0]; 
 
} 

export const URL =
  "https://accounts.spotify.com/authorize?client_id=" +
  client_id +
  "&response_type=code&redirect_uri=" +
  redirectUrl +
  "&scope=" +
  scopes.join("%20") +
  "&response_type=token&show_dialog=true";

  