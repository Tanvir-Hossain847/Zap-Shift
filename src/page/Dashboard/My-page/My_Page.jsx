import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const My_Page = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data: parcelInfo = [] } = useQuery({
        queryKey: ['myParcel',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcelInfo?email=${user.email}`)
            return res.data
        }
    })
    return (
        <div>
            this is my parcel page: {parcelInfo.length}
        </div>
    );
};

export default My_Page;