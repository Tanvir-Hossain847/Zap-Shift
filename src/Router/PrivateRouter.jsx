import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="min-h-screen grid place-content-center">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    if (!user) {
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
    }
    return children;
};

export default PrivateRouter;