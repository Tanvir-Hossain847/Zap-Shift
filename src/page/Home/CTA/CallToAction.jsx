import React from 'react';
import location from "../../../assets/location-merchant.png"
import top_bg from "../../../assets/be-a-merchant-bg.png"

const CallToAction = () => {
    return (
        <div className='bg-secondary rounded-xl max-w-6xl mx-auto'>
            <div className="">
                <img src={top_bg} alt="" />
            </div>
            <div className="flex justify-between px-10 -mt-20 items-center pb-5">
                <div className="space-y-5 w-3/6">
                    <h1 className='text-2xl font-bold text-white'>Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className='text-white opacity-75'>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div className="flex items-center gap-10">
                        <button className='btn btn-primary text-black'>Become A Marchent</button>
                        <button className='btn btn-ghost border-2 border-primary hover:text-secondary hover:border-secondary text-primary rounded-4xl'>Earn With ZapShift</button>
                    </div>
                </div>
                <div className="">
                    <img src={location} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CallToAction;