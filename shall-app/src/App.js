import React from "react";

const ProductList = React.lazy(() => import("ProductList/ProductList"));
const Header = React.lazy(() => import("cart/App"));
import { useSelector, useDispatch } from "react-redux";

function App() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const onSelect = (item) => {
    dispatch({ type: "PRODUCT_ADD_REQUEST", payload: item });
  };
  
  return (
    <div>
      <Header cart={cart} />
      <ProductList onSelect={onSelect} />
    </div>
  );
}

export default App;
