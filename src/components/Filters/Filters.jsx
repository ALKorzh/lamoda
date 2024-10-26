import React from 'react';
import './Filters.css';

function SortPanel({ filters, onFilterChange }) {
  const handleColorChange = (color) => {
    const newColors = filters.color.includes(color)
      ? filters.color.filter((c) => c !== color)
      : [...filters.color, color];
    onFilterChange({ color: newColors });
  };

  const handlePriceChange = (min, max) => onFilterChange({ price: [min, max] });

  return (
    <div className="filters">
      <div className="colorFilters">
        <h3 className="colorTitle">Color range:</h3>
        {['red', 'blue', 'green', 'yellow', 'black'].map((color) => (
          <label key={color}>
            <input
              className="colorFilter"
              type="checkbox"
              checked={filters.color.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
      <div className="priceFilters">
        <h3 className="priceTitle">Price range:</h3>
        <p className="priceDiapason">From</p>
        <input
          className="priceFilter"
          type="number"
          value={filters.price[0]}
          onChange={(e) => handlePriceChange(+e.target.value, filters.price[1])}
        />
        <p className="priceDiapason">To</p>
        <input
          className="priceFilter"
          type="number"
          value={filters.price[1]}
          onChange={(e) => handlePriceChange(filters.price[0], +e.target.value)}
        />
      </div>
    </div>
  );
}

export default SortPanel;
