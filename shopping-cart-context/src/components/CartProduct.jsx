import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

const CartProduct = ({ product }) => {
  const { cart, dispatch } = useContext(CartContext);

  const handleIncrease = (id) => {
    const Index = cart.findIndex((item) => item.id === id);
    if (cart[Index].quantity < 10) {
      dispatch({ type: "INCREASE", id });
    }
  };
  const handleDecrease = (id) => {
    const Index = cart.findIndex((item) => item.id === id);
    if (cart[Index].quantity > 1) {
      dispatch({ type: "DECREASE", id });
    }
  };

  return (
    <div className="d-flex border mb-3">
      <img src={product.thumbnail} alt="" className="w-25 h-25" />
      <div className="detail ms-4">
        <h4>{product.title}</h4>
        <h4>{product.price}</h4>
        <div className="buttons">
          <button
            className="rounded-circle px-2"
            onClick={() => handleDecrease(product.id)}
          >
            <b>-</b>
          </button>
          <button className="rounded">{product.quantity}</button>
          <button
            className="rounded-circle px-2"
            onClick={() => handleIncrease(product.id)}
          >
            <b>+</b>
          </button>
        </div>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => dispatch({ type: "REMOVE", id: product.id })}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
