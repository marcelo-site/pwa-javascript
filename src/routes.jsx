import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import { BookDetails } from "./components/BookDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/book/:isbn" element={<BookDetails />} />
      <Route path="/pwa-javascript" element={<MainPage />} />
    </Routes>
  );
}
