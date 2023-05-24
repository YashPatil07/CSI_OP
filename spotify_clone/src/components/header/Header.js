import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../../context/DataLayer";

function Header({ spotify }) {
    const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div class="header_left">
        <SearchIcon></SearchIcon>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for Artists,Songs"
        />
      </div>
      <div class="header_right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
