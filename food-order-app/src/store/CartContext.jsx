import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
});

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    state.items.push(action.item);
  }

  if (action.type === "REMOVE_ITEM") {
  }

  return state;
};

export const CartContextProvider = ({ children }) => {
  useReducer(cartReducer, { item: [] });
  return <CartContext.Provider>{children}</CartContext.Provider>;
};

export default CartContext;
