import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../page/Home/Shared/Navbar/Navbar';
import Footer from '../page/Home/Shared/Footer/Footer';

const HomeLayout = () => {
    return (
        <div className='mx-auto w-11/12 pt-5 space-y-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;