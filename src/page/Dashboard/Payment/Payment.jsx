import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {

    const {id} = useParams()
    const axiosSecure = useAxiosSecure()
    const {isLoading, data: parcel} = useQuery({
        queryKey: ['parcels', id],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/parcelInfo/${id}`)
            return res.data
        }
    })
    console.log(parcel);
    

    if(parcel){
         <div className="min-h-screen grid place-content-center">
            <span className="loading loading-bars loading-xl"></span>
        </div>
    }

    return (
        <div className='w-11/12 mx-auto'>
            this is the payment module plaese pay first <h1>{parcel.Parcel_Name}</h1>
        </div>
    );
};

export default Payment;