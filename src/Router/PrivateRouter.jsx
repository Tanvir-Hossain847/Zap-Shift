import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user, loading} = useAuth()

    if(loading){
        <div className="min-h-screen grid place-content-center">
            <span className="loading loading-bars loading-xl"></span>
        </div>

        if(!user){
            <Navigate to={'/login'}></Navigate>
        }
    }
    return children;
};

export default PrivateRouter;