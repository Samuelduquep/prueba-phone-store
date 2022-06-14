import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListPages from "./pages/ProductListPage";
import ProductDetailsPages from "./pages/ProductDetailsPages";
import Layout from "./components/Layout";
import { PhoneProvider } from "./context/PhoneProvider";

function App() {
  return (
    <PhoneProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductListPages />} />
            <Route path="product/:id" element={<ProductDetailsPages />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PhoneProvider>
  );
}

export default App;
