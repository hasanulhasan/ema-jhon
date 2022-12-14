import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Main from './components/Main/Main';
import { ProductsAndCartLoader } from './components/Shop/Loaders/ProductsAndCartLoader';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import About from './components/About/About';
import Shipping from './components/Shipping/Shipping';
import PrivateRouter from './route/PrivateRouter';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: 'orders',
          loader: ProductsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'shipping',
          element: <PrivateRouter><Shipping></Shipping></PrivateRouter>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'Signup',
          element: <Signup></Signup>
        },
        {
          path: 'inventory',
          element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
        }
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
