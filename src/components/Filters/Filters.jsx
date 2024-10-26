import React from 'react';

function SortPanel({ sortType, onSortChange }) {
  return (
    <div>
      <button
        style={{ color: sortType === 'priceAsc' ? 'blue' : 'black' }}
        onClick={() => onSortChange('priceAsc')}
      >
        Cheap first
      </button>
      <button
        style={{ color: sortType === 'priceDesc' ? 'blue' : 'black' }}
        onClick={() => onSortChange('priceDesc')}
      >
        Expensive first
      </button>
      <button
        style={{ color: sortType === 'ratingDesc' ? 'blue' : 'black' }}
        onClick={() => onSortChange('ratingDesc')}
      >
        Popular first
      </button>
    </div>
  );
}

export default SortPanel;
