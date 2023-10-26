import React from "react";
import styles from "./TestPage.module.scss";
import TopBar from "~widgets/TopBar/TopBar.tsx";
import SideBarToggleButton from "~widgets/SideBarToggleButton/SideBarToggleButton";


const TestPage: React.FC = () => {
  const testHandle = () => {
    console.log("hello")
  }
  
  return (
    <div className = { styles.TestPage}>
      <TopBar><SideBarToggleButton handl={testHandle}/></TopBar>
      <p>TestPage</p>
    </div>
  );
};

export default TestPage;
