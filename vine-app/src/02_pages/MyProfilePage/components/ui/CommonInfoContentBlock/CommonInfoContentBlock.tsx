import React from "react";
import { styles, CommonInfoContentBlockStyleIterface } from "./CommonInfoContentBlock.styles";
import ContentBlock from "~shared/ContentBlock/ContentBlock";
import {
  Card,
  Button,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

interface FieldData {
  id: string;
  label: string;
  defaultValue: string;
}

interface NestedFieldData {
  name: FieldData;
  secondName: FieldData;
  position: FieldData;
  email: FieldData;
  phone: FieldData;
  birthday: FieldData;
  messengers: FieldData;
}

const fields: NestedFieldData = {
  name: {
    id: "name",
    label: "Name",
    defaultValue: "Jhon", //! <-- add typografy styles
  },
  secondName: {
    id: "secondName",
    label: "SecondName",
    defaultValue: "Dow", //! <-- add typografy styles
  },
  position: {
    id: "position",
    label: "Position",
    defaultValue: "Manager", //! <-- add typografy styles
  },
  email: {
    id: "email",
    label: "Email",
    defaultValue: "Manager@mm.com", //! <-- add typografy styles
  },
  phone: {
    id: "phone",
    label: "Phone",
    defaultValue: "+123123123123", //! <-- add typografy styles
  },
  birthday: {
    id: "birthday",
    label: "Birthday",
    defaultValue: "birthday", //! <-- add typografy styles
  },
  messengers: {
    id: "messengers",
    label: "Messengers",
    defaultValue: "messengers", //! <-- add typografy styles
  },
};

const CommonInfoContentBlock: React.FC = () => {
  return (
    <ContentBlock title={"Conmmon information"}>
      <CardContent sx={styles?.Content}>
        {Object.values(fields).map((field) => (
          <TextField
            key={field.id}
            sx={styles[field.id as keyof CommonInfoContentBlockStyleIterface]}
            id={`outlined-read-only-input-${field.id}`}
            label={field.label}
            defaultValue={field.defaultValue}
            InputProps={{
              readOnly: true,
            }}
          />
        ))}
        <Button variant="contained" sx={styles?.copyAllData}>
          Сopy All Data
        </Button>
        <Button variant="contained" sx={styles?.editAllData}>
          Edit All Data
        </Button>
      </CardContent>
    </ContentBlock>
  );
};

export default CommonInfoContentBlock;
