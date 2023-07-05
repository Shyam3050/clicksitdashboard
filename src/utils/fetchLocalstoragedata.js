export const fetchUser = () => {
  const userInfo = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : "";
  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems"))
      : localStorage.clear();

  return cartInfo ? cartInfo : {
    cartItems : [],
    cartQty : 0
  };
};
