import React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSidbarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";
import { ListItemConstructor } from "./ListItem";

export interface SideBarItemInterface {
  name: string;
  root: boolean;
  level?: number;
  // url?: string;
  subItems?: SideBarItemInterface[];
  open?: boolean;
}

const SideBarItem: React.FC<SideBarItemInterface> = ({
  name,
  root,
  level = 1,
  // url,
  subItems,
}) => {
  const [open, setOpen] = React.useState(true);

  const commonProps = { name, root, level, subItems, open };

  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };

  const isSideBarExpanded = useSelector(
    (state: RootState) => state.sideBar.expanded,
  );

  return (
    <>
      <ListItem  onClick={() => handleClick()} sx={{ padding: "0px", height: "80px" }}>
        <ListItemConstructor {...commonProps}/>
        {/* <ListItemButton
          sx={{ height: "80px" }}
        >
          <ListItemIcon>
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
              fontWeight: "600",
              color: "primary.contrastText",
            }}
            sx={{ pl: `${level * 12}px`, pr: "8px" }}
          />
          {subItems &&
            (open ? (
              <ExpandLess sx={{ color: "primary.contrastText" }} />
            ) : (
              <ExpandMore sx={{ color: "primary.contrastText" }} />
            ))}
        </ListItemButton> */}
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
