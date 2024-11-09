import React, { useContext } from "react";
import { CartContext } from "../Features/ContextProvider";

function ProductCard({ productItems }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div className="col">
      <div className="card h-10">
        <img
          src={productItems.thumbnail}
          className="card-img-top h-70 w-20"
          alt="..."
        />
        <div className="card-body">
          <h4 className="card-title">{productItems.title}</h4>
          <h5 className="">${productItems.price}</h5>
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADD", product: productItems })}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
