import React, { useContext } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../components/Context/UserContext';

const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  }

  if (user && user.uid) {
    return children
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default PrivateRouter;