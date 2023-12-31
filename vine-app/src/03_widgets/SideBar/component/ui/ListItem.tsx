import React from "react";
import styles from "./ListItem.module.scss";
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
import { SideBarItemInterface } from "./SideBarItem";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSideBarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";

export const ListItemExpanded: React.FC<SideBarItemInterface> = ({
  name,
  root,
  level = 1,
  // url,
  subItems,
  open,
}) => {
  return (
    <ListItemButton sx={{ padding: "0px", height: "56px" }}>
      <ListItemIcon
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          width: "66px",
          pl: "34px"
        }}
      >
        {root && (
          <SendIcon
            sx={{
              fontSize: "16px",
              color: "primary.contrastText",
            }}
          />
        )}
      </ListItemIcon>
      <ListItemText
        primary={name}
        // secondary="залупа лисы"
        primaryTypographyProps={{
          fontSize: "16px",
          // fontWeight: "600",
          color: "primary.contrastText",
        }}
        sx={{ pl: `${level * 8}px`, pr: "8px" }}
      />
      <ListItemIcon
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "60px",
          pr: "34px"
        }}
      >
        {subItems &&
          (open ? (
            <ExpandLess
              sx={{ color: "primary.contrastText", fontSize: "16px" }}
            />
          ) : (
            <ExpandMore
              sx={{ color: "primary.contrastText", fontSize: "16px" }}
            />
          ))}
      </ListItemIcon>
    </ListItemButton>
  );
};

export const ListItemColapsed: React.FC<SideBarItemInterface> = ({
  name,
  root,
  level = 1,
  // url,
  subItems,
  open,
}) => {
  return (
    <ListItemButton sx={{ padding: "0px", height: "56px" }}>
      {root ? (
        <ListItemIcon
          sx={{ // ! <-----
            display: "flex",
            justifyContent: "flexStart",
            width: "66px",
            pl: "34px"
          }}
        >
          {root && (
            <SendIcon
              sx={{
                fontSize: "16px",
                color: "primary.contrastText",
              }}
            />
          )}
        </ListItemIcon>
      ) : (
        <ListItemText
          primary={name[0]}
          // secondary="залупа лисы"
          primaryTypographyProps={{
            // fontWeight: "600",
            color: "primary.contrastText",
          }}
          sx={{
            // pl: `${level * 12}px`,
            // pr: "8px",
            display: "flex",
            justifyContent: "center",
            width: "80px",
          }}
        />
      )}
    </ListItemButton>
  );
};

export const ListItemConstructor: React.FC<SideBarItemInterface> = ({
  name,
  root,
  level = 1,
  // url,
  subItems,
  open,
}) => {
  const commonProps = { name, root, level, subItems, open };

  const isSideBarExpanded = useSelector(
    (state: RootState) => state.sideBar.expanded,
  );

  return (
    <>
      {isSideBarExpanded ? (
        <ListItemExpanded {...commonProps} />
      ) : (
        <ListItemColapsed {...commonProps} />
      )}
    </>
  );
};
