import React from 'react';
import { useBasket } from '../context/BasketContext';

function Statistics() {
  const { basket } = useBasket();

  const smartCategoryFilter = basket.filter(
    (item) => item.category === 'smartElectronics'
  );
  const smartCategoryItems = smartCategoryFilter.length;

  const peripheCategoryFilter = basket.filter(
    (item) => item.category === 'computerPeripherals'
  );

  const peripheCategoryItems = peripheCategoryFilter.length;

  return (
    <div className="statistics">
      <h2>Category Statistic</h2>
      <div className="statistics__bars">
        <div className="statistics__bars-title">
          <h3>Smart Electronics</h3>
          {smartCategoryItems}
          <div className="statistics__bars__bar__container">
            <div
              className="statistics__bars__bar"
              style={{
                width: basket.length
                  ? (smartCategoryItems * 100) / basket.length
                  : '0',
              }}></div>
          </div>
          <br />
          <hr />
          <h3>computerPeripherals</h3>
          {peripheCategoryItems}
          <div className="statistics__bars__bar__container">
            <div
              className="statistics__bars__bar"
              style={{
                width: basket.length
                  ? (peripheCategoryItems * 100) / basket.length
                  : '0',
              }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statistics;
