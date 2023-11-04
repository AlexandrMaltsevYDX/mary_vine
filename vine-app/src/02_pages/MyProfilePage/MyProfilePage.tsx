import React from "react";
// import styles from "./TestPage.module.scss";
import MyCard from "~shared/MyCard/MyCard";
import { Suspense } from "react";
// js hello world
const MyProfilePage: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div>
        <MyCard/>
      </div>
    </Suspense>
  );
};

export default MyProfilePage;
