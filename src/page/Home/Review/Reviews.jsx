import React from 'react';
import ReviewSlider from '../ReviewSlider/ReviewSlider';

const Reviews = ({reviewsPromise}) => {
    return (
        <div className='space-y-5 my-20'>
            <h1 className='text-2xl font-bold text-center text-secondary'>What Our Clients Say About Us</h1>
            <div className="">
                <ReviewSlider reviewsPromise={reviewsPromise}></ReviewSlider>
            </div>
        </div>
    );
};

export default Reviews;