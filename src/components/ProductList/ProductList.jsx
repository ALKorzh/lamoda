import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ProductList.css';

function ProductList({ products }) {
  if (products.length === 0) return <p>Nothing was found for your request</p>;

  return (
    <div className="list">
      {products.map((product) => (
        <ListItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
