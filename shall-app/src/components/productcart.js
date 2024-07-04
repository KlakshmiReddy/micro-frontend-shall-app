import React from "react";
import { useSelector, useDispatch } from "react-redux";
const CartProducts = React.lazy(() => import("cart/CartProducts"));
const ProductCart = () => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const onDeleteCartProduct = (product) => {
    const filteredData = cart.filter((item) => item.id !== product.id);
    dispatch({ type: "DELETE_CART_PRODUCT", payload: filteredData });
  };
  return <CartProducts cart={cart} onDeleteCartProduct={onDeleteCartProduct} />;
};

export default ProductCart;
