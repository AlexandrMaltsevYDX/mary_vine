import React from "react";
import styles from "./Crmpage.module.scss";
import { Suspense } from "react";
import RootLayout from "~app/layouts/RootLayout/RootLayout";


interface CrmpageInterface {
  children: React.ReactNode;
  }

const Crmpage: React.FC<CrmpageInterface> = ({children}) => {
  return (
    <RootLayout>
      <Suspense fallback="Loading...">
        <div className={styles.Crmpage}>
          {children}
        </div>
      </Suspense>
    </RootLayout>
  );
};

export default Crmpage;
