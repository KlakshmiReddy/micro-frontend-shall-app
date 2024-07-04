import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";

function ProductList({ onSelect }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="App">
      <div className="container" style={{ marginTop: "100px" }}>
        <ProductCard products={data} onSelect={onSelect} />
      </div>
    </div>
  );
}

export default ProductList;
