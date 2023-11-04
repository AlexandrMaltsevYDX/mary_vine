import * as React from "react";
import List from "@mui/material/List";
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
            level={0}
            subItems={item.subItems}
            url={item.url}
          />
        ))}
      </>
   </List>
  );
};

export default SideBar;
