import { getStoredCart } from "../../../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
  //get product
  const productsData = await fetch('http://localhost:5001/products');
  const { products } = await productsData.json();
  // console.log(products)

  //get cart
  const savedCart = getStoredCart();
  const initialCart = [];
  // console.log('savedCart', savedCart)
  for (const id in savedCart) {
    const addedProduct = products.find(pd => pd._id === id)
    // console.log(id, addedProduct);
    if (addedProduct) {
      const quantity = savedCart[id];
      // console.log(id, quantity);
      addedProduct.quantity = quantity;
      initialCart.push(addedProduct);
    }
  }
  return { products, initialCart }
}