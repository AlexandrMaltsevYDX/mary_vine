import { SxProps } from "@mui/material";
import { grey } from "@mui/material/colors";

interface ContentBlockStyleIterface {
  ContentBlock: SxProps;

}


export const styles: ContentBlockStyleIterface = {
  ContentBlock: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "50px auto",
    gridTemplateAreas: `
      "title"
      "content"
    `,
  },
};



