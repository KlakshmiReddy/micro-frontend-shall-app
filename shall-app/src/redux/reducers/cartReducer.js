import { CartTypes } from "../action_types/cart_types";

const initialState = {
  cart: [],
};

export default function CartReducer(state = initialState, action = null) {
  switch (action.type) {
    case CartTypes.PRODUCT_ADD_REQUEST: {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case CartTypes.DELETE_CART_PRODUCT: {
      return {
        ...state,
        cart: action.payload,
      };
    }
    default:
      return state;
  }
}
