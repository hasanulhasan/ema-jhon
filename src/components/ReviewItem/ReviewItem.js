import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ pd, removeReviewItems }) => {
  const { name, price, img, shipping, id } = pd;
  return (
    <div className='oder-items d-flex justify-content-center'>
      <div className="border-3 rounded-3 shadow-sm p-4 card-width d-flex mb-3" >
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body ps-3">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Price: {price}</p>
          <p className="card-text">Shipping: {shipping}</p>
        </div>
        <div className='d-flex justify-content-center align-align-items-center'>
          <button onClick={() => removeReviewItems(id)} className='btn-style'><FontAwesomeIcon icon={faTrash} className='icon-style'></FontAwesomeIcon></button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;