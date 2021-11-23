import { combineReducers } from "redux";
import cartReducer from "./cart-reducer";
import productsReducer from "./products-reducer";
import toggleCartReducer from "./toggleCart-reducer";
import totalReducer from "./total-reducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  toggleCart: toggleCartReducer,
  total: totalReducer,
});

export default rootReducer;
