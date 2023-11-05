import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";

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
    defaultValue: "Jhon",
    typogrphyStyle: {}, //! <-- add typografy styles
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

interface UserData {
  name: string;
  image: string;
  // Другие поля, если они присутствуют
}

interface MyCardStyles {
  MyCard: SxProps;
  Content: SxProps;
  name: SxProps;
  secondName: SxProps;
  position: SxProps;
  messengers: SxProps;
  copyAllData: SxProps;
  editAllData: SxProps;
  businessCard: SxProps;
  email: SxProps;
  phone: SxProps;
  birthday: SxProps;
}

const styles: MyCardStyles = {
  MyCard: {
    display: "grid",
    gridTemplateColumns: {
      md: "1fr",
      xs: "1fr",
    },
    gridTemplateRows: "50px auto",
    gridTemplateAreas: `
      "header"
      "text"
    `,
  },
  Content: {
    display: "grid",
    gridTemplateColumns: {
      lg: "30% 30% 1fr",
      md: "auto auto",
      xs: "1fr",
    },
    gridTemplateRows: {
      lg: "50px 50px 50px 50px 50px ",
      md: "50px 50px 50px 50px 50px auto",
      xs: "50px 50px 50px 50px 50px 50px 50px 50px 50px auto",
    },
    gap: "20px",
    gridTemplateAreas: {
      lg: `
      "name       email        businessCard"
      "secondName phone        businessCard"
      "position   birthday     businessCard"
      "messengers messengers   businessCard"
      "copyAllData editAllData businessCard"
    `,
      md: `
      "name       email        "
      "secondName phone        "
      "position   birthday     "
      "messengers messengers   "
      "copyAllData editAllData "
      "businessCard businessCard "
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
      "businessCard "
    `,
    },
  },
  businessCard: {
    padding: "20px",
    gridArea: "businessCard",
    border: `1px solid ${grey[400]}`,
    boxShadow: "none",
    // backgroundColor: grey[200], // !<-------
    display: "grid",
    gridTemplateColumns: "30% 30% 1fr",
    gridTemplateRows: "auto auto auto",
    gap: "20px",
    gridTemplateAreas: `
      "icon       name        secondName"
      "icon       email       phone"
      "messengers position  birthday"
    `,
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

async function fetchData(
  setState: React.Dispatch<
    React.SetStateAction<UserData | undefined>
  >,
) {
  try {
    const response = await fetch(
      "https://rickandmortyapi.com/api/character/1",
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: UserData = await response.json();
    setState(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export default function MyCard() {
  const [userData, setUserData] = useState<UserData | undefined>(
    undefined,
  );

  useEffect(() => {
    fetchData(setUserData); // ! <-- как этого избежать ?
  }, []); // Пустой массив зависимостей означает выполнение эффекта только при монтировании компонента

  return (
    <Card sx={styles?.MyCard}>
      <CardHeader
        title="Common Informations"
        sx={{
          alignItems: "flex-start",
          color: { md: "red", xs: "blue" },
        }}
      />

      <CardContent sx={styles?.Content}>
        {Object.values(fields).map((field) => (
          <TextField
            key={field.id}
            sx={styles[field.id as keyof MyCardStyles]}
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
        <Card sx={styles?.businessCard}>
          <CardMedia
            sx={{
              gridArea: "icon",
              borderRadius: "150px",
              padding: "16px",
              width: "150px",
            }}
            component="img"
            image="images/sample-avatar.jpg"
          />
          {Object.values(fields).map((field, index) => (
            <Typography
              key={field.id + index}
              sx={styles[field.id as keyof MyCardStyles]}
            >
              {field.defaultValue}
            </Typography>
          ))}
        </Card>
      </CardContent>
    </Card>
  );
}
