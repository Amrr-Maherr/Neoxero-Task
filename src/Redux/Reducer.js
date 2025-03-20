import {
  GET_ALL_DATA,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
} from "./Actions";

const initialState = {
  products: [],
  cart: [],
  cartError: null,
};

const ShopReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_DATA:
      return { ...state, products: action.payload };
    case ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        cartError: null,
      };
    case ADD_TO_CART_ERROR:
      return {
        ...state,
        cartError: action.payload,
      };
    default:
      return state;
  }
};

export default ShopReducer;
