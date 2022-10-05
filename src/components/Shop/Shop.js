import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id)
      console.log(addedProduct)
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart)
    addToDb(product.id);
  }
  return (
    <div className='shop-container'>
      <div className="products-container">
        {
          products.map(pd => <Product key={pd.id} product={pd} handleAddToCart={handleAddToCart}></Product>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;