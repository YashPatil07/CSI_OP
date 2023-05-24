import React from "react";
import "./Login.css";
import logo from "../../images/spotify-logo.png";
import { URL } from "../../API/Auth";

function Login() {
  return (
    <div className="login_page">
      <img src={logo} alt="spotify-logo" className="logo" />
      <a href={URL} className="login">
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
}

export default Login;
