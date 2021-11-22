const getProducts = () => {
  return (dispatch) => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "GET_PRODUCTS", payload: data });
      });
  };
};

const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: id,
  };
};

const deleteCartItem = (id) => {
  return {
    type: "DELETE_CART_ITEM",
    payload: id,
  };
};

const increaseCartItem = (id) => {
  return {
    type: "INC_CART_ITEM",
    payload: id,
  };
};

const decreaseCartItem = (id) => {
  return {
    type: "DEC_CART_ITEM",
    payload: id,
  };
};

const updateTotal = (amount) => {
  return {
    type: "UPDATE_TOTAL",
    payload: amount,
  };
};

const toggleCart = () => {
  return {
    type: "TOGGLE_CART",
  };
};

const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};

const resetTotal = () => {
  return {
    type: "RESET_TOTAL",
  };
};

const placeOrder = (obj) => {
  return {
    type: "PLACE_ORDER",
    payload: obj,
  };
};

const getNotification = (obj) => {
  return {
    type: "GET_NOTIFICATION",
    payload: obj,
  };
};

const closeNotification = (obj) => {
  return {
    type: "CLOSE_NOTIFICATION",
  };
};

export {
  getProducts,
  addToCart,
  deleteCartItem,
  increaseCartItem,
  decreaseCartItem,
  updateTotal,
  toggleCart,
  clearCart,
  resetTotal,
  placeOrder,
  getNotification,
  closeNotification,
};
