import React from "react";
import styles from "./TestPage.module.scss";
import MyCard from "~shared/MyCard/MyCard";
import { Suspense } from "react";
// js hello world
const TestPage: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div className={styles.TestPage}>
        <MyCard/>
      </div>
    </Suspense>
  );
};

export default TestPage;
