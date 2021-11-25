const initialState = {
  message: "",
  open: false,
  type: "",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_NOTIFICATION":
      return {
        ...state,
        message: action.payload.message,
        open: true,
        type: action.payload.type,
      };

    case "CLOSE_NOTIFICATION":
      return { ...state, open: false };

    default:
      return state;
  }
};

export default notificationReducer;
