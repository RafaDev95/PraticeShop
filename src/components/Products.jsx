import React from 'react';
import { useBasket } from '../context/BasketContext';

function Products({
  id,
  name,
  img,
  price,
  type,
  category,
  subCategory,
  buttonContent,
}) {
  const { dispatch } = useBasket();

  return (
    <>
      <div key={id} className="product_container">
        <img src={img} alt="" />
        <div className="product_container-infos">
          <p>{name}</p>
          <p>{`$${price}`}</p>
          <button
            onClick={() =>
              dispatch({
                type: type,
                item: {
                  name,
                  img,
                  price,
                  category,
                  subCategory,
                },
              })
            }>
            {buttonContent}
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
