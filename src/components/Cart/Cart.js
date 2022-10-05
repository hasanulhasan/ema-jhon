import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const products of cart) {
    quantity = quantity + products.quantity;
    total = total + products.price * products.quantity;
    shipping = shipping + products.shipping;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className='cart'>
      <h3>Oder Summary</h3>
      <p>You have added {quantity} items</p>
      <p>Total price :${total} </p>
      <p>Total shipping: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h3>Grand Total: ${grandTotal}</h3>
    </div>
  );
};

export default Cart;