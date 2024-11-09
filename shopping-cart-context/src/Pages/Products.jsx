import React, { useState } from "react";
import Data from "../../Data.json";
import ProductCard from "../components/ProductCard";

function Products({}) {
  const [products, setProducts] = useState(Data.products);

  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {products.map((item) => (
          <ProductCard productItems={item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
