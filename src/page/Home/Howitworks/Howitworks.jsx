import React from 'react';
import { FaTruckMoving } from 'react-icons/fa6';

const Howitworks = () => {
    return (
        <div className='w-11/12 mx-auto text-secondary space-y-5 my-20'>
            <h1 className='text-3xl font-bold'>How It Works</h1>
            <div className="grid grid-cols-4 gap-10">
            <div className="bg-white p-5 rounded-xl space-y-3">
                <div className="text-4xl text-secondary">
                    <FaTruckMoving></FaTruckMoving>
                </div>
                <h1 className='text-xl font-bold'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="bg-white p-5 rounded-xl space-y-3">
                <div className="text-4xl text-secondary">
                    <FaTruckMoving></FaTruckMoving>
                </div>
                <h1 className='text-xl font-bold'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="bg-white p-5 rounded-xl space-y-3">
                <div className="text-4xl text-secondary">
                    <FaTruckMoving></FaTruckMoving>
                </div>
                <h1 className='text-xl font-bold'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            <div className="bg-white p-5 rounded-xl space-y-3">
                <div className="text-4xl text-secondary">
                    <FaTruckMoving></FaTruckMoving>
                </div>
                <h1 className='text-xl font-bold'>Booking Pick & Drop</h1>
                <p>From personal packages to business shipments — we deliver on time, every time.</p>
            </div>
            </div>
        </div>
    );
};

export default Howitworks;