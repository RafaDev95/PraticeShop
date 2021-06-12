import React from 'react';
import ProductsTitle from './ProductsTitle';
import Products from './Products';
import { products } from '../products/products';

function ProductList() {
  return (
    <div className="product-list">
      <div className="product-list__container">
        <ProductsTitle title="Product List" />
        {products.map((item) => (
          <Products
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            category={item.category}
            subCategory={item.subCategory}
            type="ADD_TO_BASKET"
            buttonContent="add to basket"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
