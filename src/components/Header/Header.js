import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Context/UserContext';
import './Header.css'

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
        {
          user?.uid ?
            <button onClick={logOut} className='btn btn-light fw-bolder ms-2 fs-4'>Sign Out</button>
            :
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
        }
      </div>
    </nav>
  );
};

export default Header;

{/* <button onClick={logOut} className='btn btn-light fw-bolder fs-4'><NavLink to="/login">Sign Out</NavLink></button> */ }