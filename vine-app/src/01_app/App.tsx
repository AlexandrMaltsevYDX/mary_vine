import styles from "./App.module.scss";
import { withRouter } from "~providers/with-router";
import Routing from "~routing/Routing";
import TestComponent from "~shared/TestComponent/TestComponent";
import RootLayout from "./layouts/RootLayout/RootLayout";
import AppRouter from "~routing/AppRouter";


// <RootLayout></RootLayout> 
// eslint-disable-next-line react-refresh/only-export-components
function App() { // ! eslint ???
  return (
    <AppRouter/>
    );
  }
  
// eslint-disable-next-line react-refresh/only-export-components
export default App; // ! eslint ???
// export default withRouter(App); // ! eslint ???
