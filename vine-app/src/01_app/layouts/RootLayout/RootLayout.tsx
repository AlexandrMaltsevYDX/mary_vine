import React , {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Routing from "~routing/Routing";
import styles from "./RootLayout.module.scss"
import Content from '~widgets/Content/Content';
import TopBar from '~widgets/TopBar/TopBar';
import SideBar from '~widgets/SideBar/SideBar';



// interface RootLayoutInterface {
//     children: React.ReactNode
// }

const RootLayout: React.FC = () =>  {
  return (
      <div className={styles.RootLayoutGrid}>
        <div className={styles.TopbarCell}><TopBar/></div>
        <div className={styles.ContentCell}><Content/></div>
        <div className={styles.SidebarCell}><SideBar/></div>
      </div>
  );
}

export default RootLayout