import React, { useContext } from 'react';
import { UserContext } from '../context/ContextProvider';
import { Navigate, useLocation } from 'react-router';

const ProtectedRoute = ({ children }) => {
    const { user } = useContext(UserContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;

};

export default ProtectedRoute;