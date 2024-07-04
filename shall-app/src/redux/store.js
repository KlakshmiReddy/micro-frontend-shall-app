import RootReducer from "./reducers/index";
import { createStore } from "redux";

export const store = createStore(RootReducer);
