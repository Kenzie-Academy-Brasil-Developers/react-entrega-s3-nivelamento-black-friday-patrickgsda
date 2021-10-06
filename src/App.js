import "./App.css";
import { useState } from "react";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import Sale from "./components/Sale";
import iconSale from "./images/salew.svg";

function App() {
  const [useProduct] = useState([
    { id: 1, name: "Smart TV LED 50", price: 1999.0 },
    { id: 2, name: "PlayStation 5", price: 12000.0 },
    { id: 3, name: "Notebook Acer Nitro 5", price: 5109.72 },
    { id: 4, name: "Headset s fio Logitech G935", price: 1359.0 },
    { id: 5, name: "Tablet Samsung Galaxy Tab S7", price: 4844.05 },
    { id: 6, name: "Cadeira Gamer Cruiser Preta FORTREK", price: 1215.16 },
  ]);

  const [sale, setSale] = useState([]);
  const [saleOk, setSaleOk] = useState(false);
  const [saleTotal, setSaleTotal] = useState(0);
  const [porcentDiscount, setPorcentDiscount] = useState(0);
  const [productFilter, setProductFilter] = useState([]);

  function addSale(filtered) {
    const productVerifyDouble = sale.find((prod) => prod.id === filtered.id);
    if (!productVerifyDouble) {
      setSale([...sale, filtered]);
      totalSale(filtered.newPrice);
    }
  }

  function totalSale(product) {
    const reducer = (cartTotal, currentValue) => cartTotal + currentValue;
    setSaleTotal(sale.map((sale) => sale.newPrice).reduce(reducer, product));
  }

  function remSale(id) {
    const arrayProductDeleted = sale.filter((product) => product.id !== id);
    const removedItem = sale.find((sale) => sale.id === id);
    setSale([...arrayProductDeleted]);
    totalSale(-removedItem.newPrice);
    if (sale.length === 1) {
      hiddenSale();
    }
  }

  function randomProd() {
    const randomId = Math.floor(Math.random() * (7 - 1) + 1);
    const productActualFilter = useProduct.filter(
      (product) => product.id === randomId
    );
    setProductFilter(productActualFilter);
    randomDiscount();
  }

  function randomDiscount() {
    let randomDiscount = Math.floor(Math.random() * (90 - 40 + 1) + 40) / 100;
    setPorcentDiscount(randomDiscount);
  }

  function hiddenSale() {
    if (saleOk === false) {
      setSaleOk(true);
    } else if (saleOk === true) {
      setSaleOk(false);
    }
  }

  return (
    <div className="App">
      <div className="App-content">
        <h1>KenzieFriday</h1>
        <div className="App-form-sale">
          <div className="form-group-submitSale">
            <Button onClick={() => randomProd()} type="button">
              Gerar Promoção
            </Button>
            {sale.length > 0 && (
              <>
                <img
                  onClick={() => hiddenSale()}
                  className="iconSale"
                  src={iconSale}
                  alt="Sale"
                />
                <span onClick={() => hiddenSale()} className="count-sale-prods">
                  {sale.length}
                </span>
              </>
            )}
          </div>
          <Sale
            saleTotal={saleTotal}
            hiddenSale={saleOk}
            products={sale}
            remSale={remSale}
          />
          <ProductList
            discount={porcentDiscount}
            productFilter={productFilter}
            addSale={addSale}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
