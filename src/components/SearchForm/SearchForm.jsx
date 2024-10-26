import './SearchForm.css';
import React, { useState } from 'react';

function SearchForm({ filters, onFilterChange, onSortChange, sortType }) {
  const handleSearchChange = (e) => onFilterChange({ search: e.target.value });

  return (
    <div>
      <input
        className="searchArea"
        type="text"
        placeholder="Search products..."
        value={filters.search}
        onChange={handleSearchChange}
      />

      <div className="btns">
        <button
          className="sortBtn"
          style={{ fontWeight: sortType === 'priceAsc' ? 'bold' : 'normal' }}
          onClick={() => onSortChange('priceAsc')}
        >
          Cheap first
        </button>
        <button
          className="sortBtn"
          style={{ fontWeight: sortType === 'priceDesc' ? 'bold' : 'normal' }}
          onClick={() => onSortChange('priceDesc')}
        >
          Expensive first
        </button>
        <button
          className="sortBtn"
          style={{ fontWeight: sortType === 'ratingDesc' ? 'bold' : 'normal' }}
          onClick={() => onSortChange('ratingDesc')}
        >
          Popular first
        </button>
      </div>
    </div>
  );
}

export default SearchForm;
