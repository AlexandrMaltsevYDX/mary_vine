import { SxProps } from "@mui/material";

export interface CommonInfoContentBlockStyleIterface {
  Content: SxProps;
  name: SxProps;
  secondName: SxProps;
  position: SxProps;
  messengers: SxProps;
  copyAllData: SxProps;
  editAllData: SxProps;
  email: SxProps;
  phone: SxProps;
  birthday: SxProps;
}

export const styles: CommonInfoContentBlockStyleIterface = {
  Content: {
    display: "grid",
    gridTemplateColumns: {
      lg: "auto auto",
      md: "auto auto",
      xs: "1fr",
    },
    gridTemplateRows: {
      lg: "50px 50px 50px 50px 50px ",
      md: "50px 50px 50px 50px  auto",
      xs: "50px 50px 50px 50px 50px 50px 50px 50px auto",
    },
    gap: "20px",
    gridTemplateAreas: {
      lg: `
      "name       email        "
      "secondName phone        "
      "position   birthday     "
      "messengers messengers   "
      "copyAllData editAllData "
    `,
      md: `
      "name       email        "
      "secondName phone        "
      "position   birthday     "
      "messengers messengers   "
      "copyAllData editAllData "
    `,
      xs: `
      "name"
      "secondName"
      "position"
      "email"
      "phone"
      "birthday"
      "messengers"
      "copyAllData  "
      "editAllData"
    `,
    },
  },
  name: {
    gridArea: "name",
  },
  secondName: {
    gridArea: "secondName",
  },
  email: {
    gridArea: "email",
  },
  phone: {
    gridArea: "phone",
  },
  birthday: {
    gridArea: "birthday",
  },
  position: {
    gridArea: "position",
  },
  messengers: {
    gridArea: "messengers",
  },
  copyAllData: {
    gridArea: "copyAllData",
  },
  editAllData: {
    gridArea: "editAllData",
  },
};



