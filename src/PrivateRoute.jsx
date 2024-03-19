import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({ children, roles }) => {
    const location = useLocation();
    const isAuthenticated = !!localStorage.getItem('token');
    const role = localStorage.getItem('role'); 


    const isAuthorized = isAuthenticated && (!roles || roles.includes(role));

    return isAuthorized ? (
      children
    ) : (
      <Navigate to="/" state={{ from: location }} replace />
    );
};

export default PrivateRoute;
