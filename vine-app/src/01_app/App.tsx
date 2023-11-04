import styles from "./App.module.scss";
import { withRouter } from "~providers/with-router";
import Routing from "~routing/Routing";
import TestComponent from "~shared/TestComponent/TestComponent";
import RootLayout from "./layouts/RootLayout/RootLayout";


// eslint-disable-next-line react-refresh/only-export-components
function App() { // ! eslint ???
  return (
    <RootLayout></RootLayout>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(App); // ! eslint ???
