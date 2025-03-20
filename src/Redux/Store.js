import { configureStore } from "@reduxjs/toolkit";
import ShopReducer from "./Reducer";

const store = configureStore({
  reducer: ShopReducer,
});

export default store;
