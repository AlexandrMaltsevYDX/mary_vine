import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

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
  password: FieldData;
  passwordRedail: FieldData;
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
  password: {
    id: "password",
    label: "Password",
    defaultValue: "123123123123", //! <-- add typografy styles
  },
  passwordRedail: {
    id: "passwordRedail",
    label: "Password",
    defaultValue: "123123123123", //! <-- add typografy styles
  },
};

const SignUpModalWindow: React.FC = ({ open, handleClose }) => {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sing In</DialogTitle>
        <DialogContent>
          {Object.values(fields).map((field, index) => (
            <TextField
              key={index}
              sx={{ my: "10px", width: "100%" }}
              required
              id="outlined-required"
              label={field.label}
            />
          ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default SignUpModalWindow;
