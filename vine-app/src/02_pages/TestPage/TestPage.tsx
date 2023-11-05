import React from "react";
import styles from "./TestPage.module.scss";
import MyCard from "~shared/MyCard/MyCard";
import { Suspense } from "react";
import RootLayout from "~app/layouts/RootLayout/RootLayout";
// js hello world
const TestPage: React.FC = () => {
  return (
    <RootLayout>
      <div className={styles.TestPage}>
        <p>Вася ты дурак!</p>
      </div>
    </RootLayout>
  );
};

export default TestPage;
