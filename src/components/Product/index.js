import React from "react";
import Button from "../Button";
import { useState } from "react";

function Product({ discount, id, name, price, addSale }) {
  const [filteredProduct] = useState({
    id: id,
    name: name,
    price: price,
    porcent: (discount * 100).toFixed(),
    discount: (price * discount).toFixed(2),
    newPrice: parseFloat((price - price * discount).toFixed(2)),
  });
  return (
    <>
      <h6>Produto Sorteado</h6>
      <div key={id}>
        <p>{name}</p>
        <p className="pOld">
          <s>R${price}</s>
        </p>
        <p>Você ganhou {(discount * 100).toFixed()}%</p>
        <p>Desconto: R${(price * discount).toFixed(2)}</p>
        <p>R${(price - price * discount).toFixed(2)}</p>
        <div className="group-buttons">
          <Button onClick={() => addSale(filteredProduct)}>Comprar</Button>
        </div>
      </div>
    </>
  );
}

export default Product;
