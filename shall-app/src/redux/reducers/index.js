import { combineReducers } from "redux";
import CartReducer from "./cartReducer";

const RootReducer = combineReducers({
  cart: CartReducer,
});

export default RootReducer;
