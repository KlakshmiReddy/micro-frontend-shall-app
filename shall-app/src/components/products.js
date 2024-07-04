import React from "react";
import { useDispatch } from "react-redux";
const ProductList = React.lazy(() => import("ProductList/ProductList"));

const Products = () => {
  const dispatch = useDispatch();

  const onSelect = (item) => {
    dispatch({ type: "PRODUCT_ADD_REQUEST", payload: item });
  };

  return <ProductList onSelect={onSelect} />;
};

export default Products;
