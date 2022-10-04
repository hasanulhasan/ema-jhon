import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb'
import './Shop.css'

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([]);
  let [total, setTotal] = useState([]);
  // const [price, setPrice] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, [])
  // let total = 0;
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