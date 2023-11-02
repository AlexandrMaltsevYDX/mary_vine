import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import TestPage from "~pages/TestPage/TestPage";
import TestSecondPage from "~pages/TestSecondPage/TestSecondPage";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<TestPage />} />
      <Route path="/test" element={<TestSecondPage />} /> //! пример с пропсом loader
    </Route>,
  ),
);

function AuthenticatedRouter() {
  return <RouterProvider router={router} />;
}

export default AuthenticatedRouter;
