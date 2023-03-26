import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const PrivateRoute: React.FC = () => {
    const { isAuthenticated, isAdmin } = useAuth();

    if (!isAuthenticated) {

        return <Navigate to="/login" />;
    }

    if (!isAdmin) {

        return <Navigate to="/access-denied" />;
    }

    return <Outlet />;
};

export default PrivateRoute;
