import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../src/context/UserProvider';

const PrivateRoute = ({ children, roles }) => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user')) || {};

    const isAuthorized = isAuthenticated && user && (!roles || roles.includes(user.role));

    return isAuthorized ? (
      children
  ) : (
      <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
