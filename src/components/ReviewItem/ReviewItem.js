import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ pd }) => {
  const { name, price, img, shipping } = pd;
  return (
    <div className='oder-items d-flex justify-content-center'>
      <div className="border-3 rounded-3 shadow-lg p-4 card-width d-flex mb-3" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body ps-3">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Shipping: {shipping}</p>
        </div>
        <div>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;