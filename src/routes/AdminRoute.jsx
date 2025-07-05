import React from 'react';
import useAuth from '../hooks/useAuth';
import useUserRole from '../hooks/useUserRole';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();
    const location = useLocation();

    if (loading || roleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    if (!user || role !== 'admin') {
        return <Navigate to="/forbidden" state={{ from: location }} replace />;
    }

    return children;
};

export default AdminRoute;
