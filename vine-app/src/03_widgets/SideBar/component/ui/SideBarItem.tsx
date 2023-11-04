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

  const commonProps = { 
    name, 
    root, 
    level, 
    subItems, 
    open, 
  };

  const handleClick = () => {
    console.log(open);
    setOpen(!open);
  };

  const isSideBarExpanded = useSelector(
    (state: RootState) => state.sideBar.expanded,
  );

  return (
    <>
      <ListItem
        onClick={() => handleClick()}
        sx={{ padding: "0px", height: "56px" }}
      >
        <ListItemConstructor {...commonProps} />
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
            level={isSideBarExpanded ? level + 1 : level}
          />
        ))}
      </Box>
    </>
  );
};

export default SideBarItem;
