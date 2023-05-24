import React from "react";
import "./body.css";
import Header from "../header/Header";
import {
  PlayCircleFilled,
  Favorite,
  MoreHoriz,
} from "@mui/icons-material/Search";
import { useDataLayerValue } from "../../context/DataLayer";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body_info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div class="info_Text">
          <strong>Playlist</strong>
          <h1>Discover Weekly</h1>
          <p>{discover_weekly.description}</p>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilled className="body__shuffle" />
            <Favorite fontSize="large" />
            <MoreHoriz />
          </div>
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
