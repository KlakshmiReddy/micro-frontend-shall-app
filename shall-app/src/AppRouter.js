import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/products";
import ProductCart from "./components/productcart";
import HeaderComp from "./components/HeaderComp";

function AppRouter() {
  return (
    <BrowserRouter>
      <HeaderComp />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRouter;
