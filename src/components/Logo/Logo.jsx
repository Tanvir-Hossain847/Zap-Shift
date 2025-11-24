import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router';

const Logo = () => {
    return (
        <div className="">
        <Link to={'/'} className='flex items-end'>
           <img src={logo} alt="" /> 
           <h1 className='text-3xl font-bold -ms-2.5'>zapShift</h1>
        </Link>
        </div>
    );
};

export default Logo;