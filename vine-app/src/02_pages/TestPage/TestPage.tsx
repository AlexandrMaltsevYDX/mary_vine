import React from "react";
import styles from "./TestPage.module.scss";
import { Suspense } from "react";
// js hello world
const TestPage: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div className={styles.TestPage}>
        <p>TestPage</p>
      </div>
    </Suspense>
  );
};

export default TestPage;
