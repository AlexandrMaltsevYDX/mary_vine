import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBarItem from "./component/ui/SideBarItem";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSidbarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";

const SideBar: React.FC = () => {
  const sideBarData = useSelector(
    (state: RootState) => state.sideBar.data,
  );

  return (
    <List
      sx={{
        width: "100%",
        padding: "0px",
        bgcolor: "primary.main",
      }}
    >
      <>
        {sideBarData.map((item, index) => (
          <SideBarItem
            key={index}
            name={item.name}
            root={item.root}
            subItems={item.subItems}
            level={0}
          />
        ))}
      </>
   </List>
  );
};

export default SideBar;
