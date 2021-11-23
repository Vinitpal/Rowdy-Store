import { setLocalStorage, getLocalStorage } from "../utils.js";

const totalReducer = (state = getLocalStorage("total", 0), action) => {
  switch (action.type) {
    case "UPDATE_TOTAL":
      state = Number(state);
      const newTotal = state + action.payload;
      setLocalStorage("total", newTotal);
      return newTotal;

    case "RESET_TOTAL":
      setLocalStorage("total", 0);
      return 0;

    default:
      return state;
  }
};

export default totalReducer;
