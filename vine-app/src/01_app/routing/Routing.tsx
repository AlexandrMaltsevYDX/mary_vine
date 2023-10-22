import React from "react";
import { Route, Routes } from "react-router-dom";
import TestPage from "~pages/TestPage/TestPage";
import TestSecondPage from "~pages/TestSecondPage/TestSecondPage";


const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
      <Route path="/test" element={<TestSecondPage />} />
    </Routes>
  );
};

export default Routing;
