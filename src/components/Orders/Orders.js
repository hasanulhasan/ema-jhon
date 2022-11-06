import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const removeReviewItems = (id) => {
    const remaining = cart.filter(pd => pd._id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }
  return (
    <div>
      <div className='shop-container'>
        <div className="orders-container">
          {
            cart.map(pd => <ReviewItem key={pd._id} pd={pd} removeReviewItems={removeReviewItems}></ReviewItem>)
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart} clearCart={clearCart}>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;