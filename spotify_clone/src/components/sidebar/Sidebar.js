import React from "react";
import "./sidebar.css";
import logo from "../../images/spotify-logo.png";
import SideBarOption from "../sidebaroption/SideBarOption";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";
import { useDataLayerValue } from "../../context/DataLayer";
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img src={logo} alt="" className="sidebar_logo" />
      <SideBarOption title="Home" Icon={HomeIcon} />
      <SideBarOption title="Search" Icon={SearchIcon} />
      <SideBarOption title="Your Library" Icon={LibraryMusicRoundedIcon} />
      <br />
      <strong className="sidebar_title">Playlist</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SideBarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
