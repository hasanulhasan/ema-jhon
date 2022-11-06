import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'
import { useLoaderData } from 'react-router-dom';
import { Toast } from 'bootstrap';

const Shop = () => {
  const product = useLoaderData();
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }

  useEffect(() => {
    fetch('http://localhost:5001/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product._id === id)
      // console.log(addedProduct)
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])

  const handleAddToCart = (selectedProduct) => {
    let newCart = []
    const exist = cart.find(product => product._id === selectedProduct._id)
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    setCart(newCart)
    addToDb(selectedProduct._id);
  }


  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(pd => <Product key={pd._id} product={pd} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  );
};

export default Shop;