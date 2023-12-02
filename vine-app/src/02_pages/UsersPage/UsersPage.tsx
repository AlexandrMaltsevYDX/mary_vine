import React from "react";
// import { Outlet } from "react-router-dom";
import Crmpage from "~shared/CrmPage/Crmpage";
import UsersTest from "~shared/UsersTest/UsersTest.tsx";
// js hello world
const UsersPage: React.FC = () => {
  return (
    <Crmpage>
      <UsersTest/>
    </Crmpage>
  );
};

export default UsersPage;
