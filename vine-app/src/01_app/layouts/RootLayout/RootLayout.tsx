import React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Routing from "~routing/Routing";
import styles from "./RootLayout.module.scss"



interface RootLayoutInterface {
    children: React.ReactNode
}

const RootLayout: React.FC = () =>  {
  return (
      <div className={styles.RootLayoutGrid}>
        <div className={styles.TopbarCell}>topbar</div>
        <div className={styles.ContentCell}>content</div>
        <div className={styles.SidebarCell}>sidebar</div>
      </div>
  );
}

export default RootLayout