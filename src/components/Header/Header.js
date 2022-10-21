import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import { AuthContext } from '../Context/UserContext';
import './Header.css'

const Header = () => {
  const { user } = useContext(AuthContext)
  return (
    <nav className='header'>
      <img src={logo} alt="" />
      <div>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/inventory">Inventory</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <span>{user?.email}</span>
      </div>
    </nav>
  );
};

export default Header;