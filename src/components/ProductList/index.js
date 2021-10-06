import React from "react";
import "./styles.css";
import Product from "../Product";

export default function ProductList({ discount, productFilter, addSale }) {
  return (
    <div className="form-info-group">
      {productFilter.map((product) => {
        return (
          <div key={product.id} className="card">
            <Product
              id={product.id}
              name={product.name}
              price={product.price}
              addSale={addSale}
              discount={discount}
            />
          </div>
        );
      })}
    </div>
  );
}
