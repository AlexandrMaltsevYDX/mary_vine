import React from "react";
import ReactDOM from "react-dom/client";
import App from "~app/App.tsx";
import "~global_styles/index.scss";
import { store } from "~store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material";
import { myTheme } from "~app/themes/my_thema";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <React.StrictMode>
      <ThemeProvider theme={myTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </Provider>
);
