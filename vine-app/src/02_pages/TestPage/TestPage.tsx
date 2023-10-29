import React from "react";
import styles from "./TestPage.module.scss";
import TopBar from "~widgets/TopBar/TopBar.tsx";
import SideBarToggleButton from "~widgets/SideBarToggleButton/SideBarToggleButton";
import ResponsiveDrawer from "~widgets/SideBar/SideBar";

// js hello world
const TestPage: React.FC = () => {
  const testHandle = () => {
    console.log("hello");
  };

  return (
    <div className={styles.TestPage}>
      <TopBar>
        <SideBarToggleButton handl={testHandle} />
      </TopBar>
      <p>TestPage</p>
      <ResponsiveDrawer />
    </div>
  );
};

export default TestPage;
