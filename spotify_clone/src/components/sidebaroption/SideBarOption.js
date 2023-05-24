import React from "react";
import "./sidebaroption.css";

function SideBarOption({ title, Icon }) {
  return (
    <div class="sideBarOption">
      <Icon className="sidebarOption_Icon"></Icon>
      <p>{title}</p>
    </div>
  );
}

export default SideBarOption;
