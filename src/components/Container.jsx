import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import ShoppingBasket from './ShoppingBasket';

function Container() {
  return (
    <div className="view-container">
      <Header />
      <div className="view-container__list-and-basket">
        <ProductList />
        <ShoppingBasket />
      </div>
    </div>
  );
}

export default Container;
