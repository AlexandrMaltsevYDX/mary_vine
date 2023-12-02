import React from "react";
import Crmpage from "~shared/CrmPage/Crmpage";
import TopMenu from "./component/TopMenu";
import FileUploader from "./component/FileUploader";
import DataTable from "./component/FileList";
import {Button} from "@mui/material";
import {Box, SxProps} from "@mui/material";

// const styles: SxProps = {
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
// };

const InputPage = () => {
  return (
    <Crmpage>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "2rem",
        }}>
        <TopMenu />

        <DataTable />
        <Box
          sx={{
            mt: "5rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "5rem",
          }}>
          <FileUploader />
          <Button>Обработать</Button>
        </Box>
      </Box>
    </Crmpage>
  );
};

export default InputPage;
