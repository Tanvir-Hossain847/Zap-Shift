import React from 'react';
import BrandSlider from '../BrandSlider/BrandSlider';

const BrandSection = () => {
    return (
        <div className='space-y-10 my-20'>
            <h1 className='text-xl text-center font-bold text-secondary'>We've helped thousands of sales teams</h1>
            <div className="">
                <BrandSlider></BrandSlider>
            </div>
        </div>
    );
};

export default BrandSection;