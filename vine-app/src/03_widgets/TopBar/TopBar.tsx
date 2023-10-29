import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SideBarToggleButton from "~widgets/SideBarToggleButton/SideBarToggleButton";
import Box from "@mui/material/Box"

// tollar провайдит цвет фона
const TopBar: React.FC = () => {
  const testHandle = () => {
    console.log("hello");
  };

  return (
    <Toolbar sx={{ bgcolor: 'primary.main', height: "100%"}}>
      <SideBarToggleButton handl={testHandle} />
    </Toolbar>
  );
};

export default TopBar;
