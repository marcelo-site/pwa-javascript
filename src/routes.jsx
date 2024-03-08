import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import { Product } from "./components/product";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/product/:code" element={<Product />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}
