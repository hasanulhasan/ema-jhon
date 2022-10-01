import React from 'react';
import './Product.css'

const Product = (props) => {
  const { name, price, ratings, img } = props.product;
  return (
    <div className='product-item'>
      <img src={img} alt="" />
      <h4>Name : {name}</h4>
      <h4>Price : {price}</h4>
      <h5>Ratings: {ratings}</h5>
    </div>
  );
};

export default Product;