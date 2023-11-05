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


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<TestPage />} />
      <Route path="/myprofile" element={<MyProfilePage/>} /> //! пример с пропсом loader
    </Route>,
  ),
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
