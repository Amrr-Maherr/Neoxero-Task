import axios from "axios";
import {
  ADD_TO_CART,
  GET_ALL_DATA,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
} from "./Actions";

const getData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);

      dispatch({
        type: GET_ALL_DATA,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_DATA,
        payload: error.response.data,
      });
    }
  };
};
export default getData;

// Action Creator لإضافة المنتج إلى سلة التسوق
export const addToCart = (product) => {
  return async (dispatch) => {
    try {

      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

      const isProductInCart = cartItems.find((item) => item.id === product.id);

      if (isProductInCart) {
        return false
      }

      cartItems.push(product);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      dispatch({
        type: ADD_TO_CART_SUCCESS,
        payload: product,
      });
      return true;
    } catch (error) {
      dispatch({
        type: ADD_TO_CART_ERROR,
        payload: error.message,
      });
      return false;
    }
  };
};
