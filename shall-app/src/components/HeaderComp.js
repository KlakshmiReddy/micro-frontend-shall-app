import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Header = React.lazy(() => import("cart/App"));

const HeaderComp = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigate = useNavigate();

  const onCart = () => {
    navigate("/cart");
  };

  return <Header cart={cart} onCart={onCart} />;
};

export default HeaderComp;
