import React from 'react';
import ProductsTitle from './ProductsTitle';
import { useBasket } from '../context/BasketContext';
import Products from './Products';
import Statistics from './Statistics';

function ShoppingBasket() {
  const { basket } = useBasket();
  const getBasketTotal = basket?.reduce(
    (amount, item) => item.price + amount,
    0
  );
  return (
    <div className="shopping-basket">
      <ProductsTitle title="Your Shopping List" />
      <div className="shopping-basket__basket-and-subtotal">
        <div className="shopping-basket__basket__subtotal">
          <div className="shopping-basket__basket__subtotal-infos">
            <h3>Subtotal:</h3>
            <p>{`${basket.length} ${basket.length >= 2 ? 'itens' : 'item'}`}</p>
            <p>{`$ ${getBasketTotal.toFixed(2)}`}</p>
          </div>

          <Statistics />
        </div>
        <div className="shopping-basket__basket">
          <h3>Products </h3>

          {basket.map((item) => (
            <Products
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              type="REMOVE_FROM_BASKET"
              buttonContent="remove from basket"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasket;
