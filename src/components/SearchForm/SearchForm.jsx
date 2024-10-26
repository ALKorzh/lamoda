import './SearchForm.css';
import React, { useState } from 'react';

function SearchForm({ filters, onFilterChange }) {
  const handleSearchChange = (e) => onFilterChange({ search: e.target.value });
  const handleColorChange = (color) => {
    const newColors = filters.color.includes(color)
      ? filters.color.filter((c) => c !== color)
      : [...filters.color, color];
    onFilterChange({ color: newColors });
  };
  const handlePriceChange = (min, max) => onFilterChange({ price: [min, max] });

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={filters.search}
        onChange={handleSearchChange}
      />
      <div>
        {['red', 'blue', 'green', 'yellow', 'black'].map((color) => (
          <label key={color}>
            <input
              type="checkbox"
              checked={filters.color.includes(color)}
              onChange={() => handleColorChange(color)}
            />
            {color}
          </label>
        ))}
      </div>
      <input
        type="number"
        value={filters.price[0]}
        onChange={(e) => handlePriceChange(+e.target.value, filters.price[1])}
      />
      <input
        type="number"
        value={filters.price[1]}
        onChange={(e) => handlePriceChange(filters.price[0], +e.target.value)}
      />
    </div>
  );
}

export default SearchForm;
