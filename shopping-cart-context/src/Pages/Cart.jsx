import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";
import CartProduct from "../components/CartProduct";
import { totalItem, totalPrice } from "../Features/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((item) => (
            <CartProduct product={item}></CartProduct>
          ))}
        </div>
        <div className="col-4">
          <div className="bg-secondary p-2">
            <h5>Total items: {totalItem(cart)}</h5>
            <h5>Total Price: {totalPrice(cart)}</h5>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
