import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const removeReviewItems = (id) => {
    const remaining = cart.filter(pd => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }
  return (
    <div>
      <div className='shop-container'>
        <div className="orders-container">
          {
            cart.map(pd => <ReviewItem key={pd.id} pd={pd} removeReviewItems={removeReviewItems}></ReviewItem>)
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;