import React from "react";
import MyCard from "~shared/MyCard/MyCard";
import Crmpage from "~shared/CrmPage/Crmpage";
import CommonInfoContentBlock from "~pages/MyProfilePage/components/ui/CommonInfoContentBlock/CommonInfoContentBlock";

const MyProfilePage: React.FC = () => {
  return (
    <Crmpage>
      <CommonInfoContentBlock/>
    </Crmpage>
  );
};

export default MyProfilePage;
