import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSidbarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";

interface SideBarItemInterface {
  name: string;
  root: boolean;
  level?: number;
  // url?: string;
  subItems?: SideBarItemInterface[];
}

const SideBarItem: React.FC<SideBarItemInterface> = ({
  name,
  root,
  level = 1,
  // url,
  subItems,
}) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };

  return (
    <>
      <ListItem sx={{ padding: "0px", height: "80px" }}>
        <ListItemButton
          sx={{ height: "80px" }}
          onClick={() => handleClick()}
        >
          <ListItemIcon>{root && <SendIcon />}</ListItemIcon>
          <ListItemText
            primary={name}
            // secondary="жопа"
            primaryTypographyProps={{fontSize: "20px", fontFamily: "Roboto"}}
            sx={{ pl: `${level * 12}px`, pr: "8px"}}
          />
          {subItems && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      </ListItem>
      <Box
        className="er"
        sx={{
          width: "100%",
          padding: "0px",
          bgcolor: "primary.main",
          visibility: open ? "visible" : "hidden",
          overflow: open ? "visible" : "hidden",
          height: open ? "auto" : "0px",
        }}
      >
        {subItems?.map((item, index) => (
          <SideBarItem
            key={index}
            name={item.name}
            root={item.root}
            subItems={item.subItems}
            level={level + 1}
          />
        ))}
      </Box>
    </>
  );
};

export default SideBarItem;
