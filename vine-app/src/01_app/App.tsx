import styles from "./App.module.scss";
import { withRouter } from "~providers/with-router";
import Routing from "~routing/Routing";
import TestComponent from "~shared/TestComponent/TestComponent";


// eslint-disable-next-line react-refresh/only-export-components
function App() { // ! eslint ???
  return (
    <>
      <div className={styles.hello}>
        <h1>Hello world</h1>
        <h2>Test Routing</h2>
        <Routing/>
        <TestComponent></TestComponent>
      </div>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withRouter(App); // ! eslint ???
