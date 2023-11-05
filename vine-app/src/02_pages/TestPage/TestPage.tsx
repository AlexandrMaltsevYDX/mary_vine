import React from "react";
import styles from "./TestPage.module.scss";
import MyCard from "~shared/MyCard/MyCard";
import Crmpage from "~shared/CrmPage/Crmpage";
import ContentBlock from "~shared/ContentBlock/ContentBlock";
import CommonInfoContentBlock from "~pages/MyProfilePage/components/ui/CommonInfoContentBlock/CommonInfoContentBlock";
import DataTable from "~shared/ListBase/ListBase";

// js hello world
const TestPage: React.FC = () => {
  return (
    <Crmpage>
      <DataTable/>
    </Crmpage>
  );
};

export default TestPage;
