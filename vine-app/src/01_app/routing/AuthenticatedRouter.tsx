import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import MyProfilePage from "~pages/MyProfilePage/MyProfilePage";
import TestPage from "~pages/TestPage/TestPage";
import TestSecondPage from "~pages/TestSecondPage/TestSecondPage";
import Routing from "./Routing";
import UsersMainTest from "~pages/UsersMainTest/UsersMainTest";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<TestPage />} ></Route>
      <Route path="/users" element={<UsersMainTest />} />
      <Route path="/users/myprofile" element={<MyProfilePage />} />
    </Route>,
  ),
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
