import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useUserContext } from '../src/context/UserProvider';

const PrivateRoute = ({ children, ...rest }) => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('token');

    return isAuthenticated ? (
        children
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      );
    };

export default PrivateRoute;
