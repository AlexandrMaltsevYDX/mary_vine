import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyProfilePage from "~pages/MyProfilePage/MyProfilePage";
import TestPage from "~pages/TestPage/TestPage";
import UsersMainTest from "~pages/UsersMainTest/UsersMainTest";
import UsersPage from "~pages/UsersPage/UsersPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<TestPage />} ></Route>
      <Route path="/users" element={<UsersMainTest />} />
      <Route path="/users/myprofile" element={<MyProfilePage />} />
      <Route path="/users/users_list" element={<UsersPage />} />
    </Route>,
  ),
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
