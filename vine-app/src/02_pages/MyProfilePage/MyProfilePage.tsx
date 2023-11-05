import React from "react";
// import styles from "./TestPage.module.scss";
import MyCard from "~shared/MyCard/MyCard";
import { Suspense } from "react";
import RootLayout from "~app/layouts/RootLayout/RootLayout";
// js hello world
const MyProfilePage: React.FC = () => {
  return (
    <RootLayout>
      <Suspense fallback="Loading...">
        <div>
          <MyCard />
        </div>
      </Suspense>
    </RootLayout>
  );
};

export default MyProfilePage;
