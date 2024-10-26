import React from 'react';

function ListItem({ product }) {
  return (
    <div>
      <img src={'./1.jpg'} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Color: {product.color}</p>
      <p>Price: {product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}

export default ListItem;
