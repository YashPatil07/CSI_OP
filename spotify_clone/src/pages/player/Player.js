import React from "react";
import "./player.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Footer from "../../components/footer/Footer";
import Body from "../../components/body/Body";
function Player({ spotify }) {
  return (
    <div className="player">
      <div class="player_body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
