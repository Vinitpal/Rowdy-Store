const getProducts = () => {
  return (dispatch) => {
    fetch("./data/products.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "GET_PRODUCTS", payload: data });
      });
  };
};

export { getProducts };
