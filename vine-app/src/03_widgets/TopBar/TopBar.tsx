import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SideBarToggleButton from "~widgets/SideBarToggleButton/SideBarToggleButton";
import Box from "@mui/material/Box";

// tollar провайдит цвет фона
const TopBar: React.FC = () => {
  return (
    <Toolbar
      disableGutters
      sx={{ padding: "0", bgcolor: "primary.dark", height: "100%" }}
    >
      <SideBarToggleButton />
    </Toolbar>
  );
};

export default TopBar;
