import React from 'react';
import styles from "./Content.module.scss";
import Routing from '~routing/Routing';



const Content: React.FC = () => {
  return (
    <div className={styles.Content}>
      <Routing/>
    </div>
  );
}

export default Content;