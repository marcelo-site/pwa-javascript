import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import { Results } from "./components/Results";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/:code" element={<Results />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
