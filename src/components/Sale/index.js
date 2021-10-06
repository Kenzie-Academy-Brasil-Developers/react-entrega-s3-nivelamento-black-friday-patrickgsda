import React from "react";
import "./styles.css";
import Button from "../Button";

export default function Sale({ saleTotal, products, remSale, hiddenSale }) {
  return (
    <>
      {hiddenSale && (
        <div key={products.id} className="sale">
          {products.length > 0 && (
            <div>
              <h6>Sacola</h6>
              <div>
                <h4>Total a pagar: R${saleTotal.toFixed(2)}</h4>
              </div>
            </div>
          )}
          <div key={products.id} className="form-info-group">
            {products.map((product) => {
              return (
                <div className="card" key={product.id}>
                  <p>{product.name}</p>
                  <p className="pOld">
                    <s>R${product.price}</s>
                  </p>
                  <p>Você ganhou {product.porcent}%</p>
                  <p>Desconto: R${product.discount}</p>
                  <p>R${product.newPrice}</p>
                  <div className="group-buttons">
                    <Button onClick={() => remSale(product.id)}>Excluir</Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
