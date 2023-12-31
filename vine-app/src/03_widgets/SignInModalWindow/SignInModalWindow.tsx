import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {useGetTokenMutation} from "~store/User/UserSlice";

export default function SignInModalWindow({open, handleClose}) {
  const [getToken, token] = useGetTokenMutation();

  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sing In</DialogTitle>
        <DialogContent>
          <DialogContentText>Enter your data</DialogContentText>
          <TextField
            required
            id="outlined-required"
            label="email"
            defaultValue="Hello World"
          />
          <TextField
            required
            id="outlined-required"
            label="password"
            defaultValue="Hello World"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Submit</Button>
          <Button
            onClick={() =>
              getToken({email: "test@test.test", password: "password"})
            }>
            Test Get Token
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

// ! <---- add export def
