import React from 'react';
import Logo from '../components/Logo/Logo';
import authImg from "../assets/authImage.png"
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto min-h-screen py-5 space-y-15'>
            <Logo></Logo>
            <div className=" w-5/6 mx-auto flex gap-5 items-center ">
                <div className="">
                    <Outlet></Outlet>
                </div>
                
                <div className="">
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;