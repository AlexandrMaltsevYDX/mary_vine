import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import SideBarToggleButton from "~widgets/SideBarToggleButton/SideBarToggleButton";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
// tollar провайдит цвет фона
const TopBar: React.FC = () => {
  return (
    <Toolbar
      disableGutters
      sx={{ padding: "0", bgcolor: "primary.dark", height: "100%", justifyContent: "space-between", paddingRight: "15px" }}
    >
      <SideBarToggleButton />
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
        <Avatar alt="Remy Sharp" src="images/sample-avatar.jpg" />
      </ButtonGroup>
    </Toolbar>
  );
};

export default TopBar;
