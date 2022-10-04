import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>

      <h3>Oder Summary</h3>
      <p>You have added {cart.length} items</p>
      <p>Total price : </p>
      <p>Total shipping: </p>
      <p>Tax: </p>
      <h3>Grand Total: </h3>
    </div>
  );
};

export default Cart;