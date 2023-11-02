import React, { useState } from "react";
import styles from "./RootLayout.module.scss";
import Content from "~widgets/Content/Content";
import TopBar from "~widgets/TopBar/TopBar";
import SideBar from "~widgets/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleSideBar,
  getSidbarData,
} from "~store/SideBar/SideBarSlice";

import { RootState } from "~store/store";

// interface RootLayoutInterface {
//     children: React.ReactNode
// }

const RootLayout: React.FC = () => {
  const isSideBarExpanded = useSelector(
    (state: RootState) => state.sideBar.expanded,
  );

  
  const RootLayoutStyle = 
    (isSideBarExpanded
    ? styles.RootLayoutGrid
    : styles.RootLayoutGrid_colapsed);
  

  return (
    <div className={RootLayoutStyle}>
      <div className={styles.TopbarCell}>
        <TopBar />
      </div>
      <div className={styles.ContentCell}>
        <Content />
      </div>
      <div className={styles.SidebarCell}>
        <SideBar />
      </div>
    </div>
  );
};

export default RootLayout;
