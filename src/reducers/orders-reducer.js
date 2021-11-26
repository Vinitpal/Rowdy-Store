import {
  setLocalStorage,
  getLocalStorage,
  randomIDGenerator,
  getTimeStamp,
} from "../utils";

const ordersReducer = (state = getLocalStorage("orders", []), action) => {
  switch (action.type) {
    case "PLACE_ORDER":
      const newState = [
        ...state,
        {
          cart: action.payload.cart,
          address: action.payload.address,
          total: action.payload.total,
          orderId: randomIDGenerator(),
          timestamp: getTimeStamp(),
        },
      ];
      setLocalStorage("orders", newState);
      return newState;

    default:
      return state;
  }
};

export default ordersReducer;
