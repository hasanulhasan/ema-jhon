import React, { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../components/Context/UserContext';

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;