import React from 'react';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {
  const { name, price, ratings, img } = product;

  return (
    <div className='product-item'>
      <div>
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h4>Price : {price}</h4>
        <h5>Ratings: {ratings}</h5>
      </div>
      <button onClick={() => { handleAddToCart(product) }} className='btn-cart'>
        <p>Add to Cart</p>
      </button>

    </div>
  );
};

export default Product;