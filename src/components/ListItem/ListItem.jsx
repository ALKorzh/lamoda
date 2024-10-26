import React from 'react';
import './ListItem.css';

function ListItem({ product }) {
  return (
    <div className="item">
      <div className="img-container">
        <img className="item-img" src={product.imageUrl} alt={product.name} />
      </div>

      <div className="text">
        <h3 className="title">{product.name}</h3>
        <p className="description">{product.description}</p>
        <div className="options">
          <p className="option">
            <b>Color: </b>
            {product.color}
          </p>
          <p className="option">
            <b>Price: </b>
            {product.price}
          </p>
          <p className="option">
            <b>Rating: </b>
            {product.rating}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
