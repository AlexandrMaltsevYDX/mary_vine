import { IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSideBarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";

// interface SideBarToggleButtonProps {
//     handl: Function
// }

const SideBarToggleButton: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      sx={{ padding: "28px", borderRadius: "0px" }}
      onClick={() => dispatch(toggleSideBar())}
    >
      <Menu />
    </IconButton>
  );
};

export default SideBarToggleButton;
