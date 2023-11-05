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
import SignInModalWindow from "~widgets/SignInModalWindow/SignInModalWindow";
import SignUpModalWindow from "~widgets/SignUpModalWindow/SignUpModalWindow";
// tollar провайдит цвет фона
const TopBar: React.FC = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const toggleSignInModal = () => {
    setIsSignInModalOpen(!isSignInModalOpen);
  };

  const toggleSignUpModal = () => {
    setIsSignUpModalOpen(!isSignUpModalOpen);
  };

  return (
    <>
      <Toolbar
        disableGutters
        sx={{
          padding: "0",
          bgcolor: "primary.dark",
          height: "100%",
          justifyContent: "space-between",
          paddingRight: "15px",
        }}
      >
        <SideBarToggleButton />
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => toggleSignInModal()}>Sign In</Button>
          <Button onClick={() => toggleSignUpModal()}>Sign Up</Button>
          <Avatar alt="Remy Sharp" src="images/sample-avatar.jpg" />
        </ButtonGroup>
        <SignInModalWindow
          open={isSignInModalOpen}
          handleClose={() => toggleSignInModal()}
        />
        <SignUpModalWindow
          open={isSignUpModalOpen}
          handleClose={() => toggleSignUpModal()}
        />
      </Toolbar>
    </>
  );
};

export default TopBar;
