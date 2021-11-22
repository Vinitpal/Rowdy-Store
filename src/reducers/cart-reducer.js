import { setLocalStorage, getLocalStorage } from "../utils.js";

const deleteItem = (cart, id) => {
  return cart.filter((el) => el.id !== id);
};

const cartReducer = (state = getLocalStorage("cart", []), action) => {
  let newState = [...state];
  let item = newState.find((el) => el.id === action.payload);

  switch (action.type) {
    case "CLEAR_CART":
      setLocalStorage("cart", []);
      return [];

    case "ADD_TO_CART":
      if (!item) {
        newState.push({ id: action.payload, qty: 1 });
      } else if (item && item.qty < 10) {
        item.qty += 1;
      }
      setLocalStorage("cart", newState);
      return newState;

    case "DELETE_CART_ITEM":
      newState = deleteItem(state, action.payload);
      setLocalStorage("cart", newState);
      return newState;

    case "INC_CART_ITEM":
      item.qty += 1;
      setLocalStorage("cart", newState);
      return newState;

    case "DEC_CART_ITEM":
      if (item.qty > 0) {
        item.qty -= 1;
      }
      if (item.qty === 0) {
        newState = deleteItem(state, action.payload);
      }
      setLocalStorage("cart", newState);
      return newState;

    default:
      return state;
  }
};

export default cartReducer;
