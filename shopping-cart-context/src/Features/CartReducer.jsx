export const totalItem = (cart) => {
  return cart.reduce((sum, product) => sum + product.quantity, 0);
};

export const totalPrice = (cart) => {
  return cart.reduce(
    (total, product) => total + product.quantity * product.price,
    0
  );
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.product];

    case "REMOVE":
      return state.filter((item) => item.id !== action.id);

    case "INCREASE":
      const IndexI = state.findIndex((item) => item.id === action.id);
      state[IndexI].quantity += 1;
      return [...state];

    case "DECREASE":
      const IndexD = state.findIndex((item) => item.id === action.id);
      state[IndexD].quantity -= 1;
      return [...state];

    default:
      state;
  }
};

export default CartReducer;
