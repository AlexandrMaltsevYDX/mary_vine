import React from "react";
import { Route, Routes } from "react-router-dom";
import MyProfilePage from "~pages/MyProfilePage/MyProfilePage";
import TestPage from "~pages/TestPage/TestPage";
import TestSecondPage from "~pages/TestSecondPage/TestSecondPage";


const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/myprofile" element={<MyProfilePage/>} /> //! пример с пропсом loader
    </Routes>
  );
};

export default Routing;
