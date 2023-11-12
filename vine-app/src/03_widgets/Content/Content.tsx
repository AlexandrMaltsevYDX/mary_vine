import React from 'react';
import styles from "./Content.module.scss";
import Routing from '~routing/Routing';
import AppRouter from '~routing/AppRouter';



const Content: React.FC = () => {
  return (
    <div className={styles.Content}> 
      {/* <Routing/> */}
      <AppRouter/>
    </div>
  );
}

export default Content;