import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  let total = 0;
  for (const products of cart) {
    total = total + products.price;
    console.log(total)
  }
  return (
    <div className='cart'>
      <h3>Oder Summary</h3>
      <p>You have added {cart.length} items</p>
      <p>Total price :${total} </p>
      <p>Total shipping: </p>
      <p>Tax: </p>
      <h3>Grand Total: </h3>
    </div>
  );
};

export default Cart;