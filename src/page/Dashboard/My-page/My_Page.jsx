import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { FaEye, FaParachuteBox } from 'react-icons/fa6';
import { FiEdit, FiTrash } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const My_Page = () => {

    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: parcelInfo = [], refetch } = useQuery({
        queryKey: ['myParcel', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcelInfo?email=${user.email}`)
            return res.data
        }
    })


    const handleDelete = id => {
        console.log(id);
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#CAEB66",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

      axiosSecure.delete(`/parcelInfo/${id}`)
      .then(res => {
        console.log(res.data);
        refetch()
        Swal.fire({
      title: "Deleted!",
      text: "Your parcel request has been deleted.",
      icon: "success"
    });
      })
    
  }
});        
    }

    return (
        <div className='w-11/12 mx-auto space-y-2'>
            <h3 className='font-bold text-xl flex gap-2 items-center'>Total {parcelInfo.length} Parcels Found <span className='text-secondary text-2xl'><FaParachuteBox></FaParachuteBox></span></h3>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-center'>
                            <th></th>
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Payment</th>
                            <th>Delivery Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            parcelInfo.map((parcel, index) => <tr key={parcel._id} className='text-center'>
                                <th>{index + 1}</th>
                                <td>{parcel.Parcel_Name}</td>
                                <td>{parcel.cost}</td>
                                <td>{
                                    parcel.paymentStatus === "paid" ? 
                                    <span className='text-green'>Paid</span> 
                                    :
                                    <Link to={`/dashboard/payment/${parcel._id}`}>
                                        <button className='btn btn-primary text-black btn-sm'>Pay</button>
                                    </Link>
                                    }</td>
                                <td>{parcel.deliverystatus}</td>
                                <td>
                                    <button className='btn btn-square mx-2 font-bold hover:bg-primary'><FiEdit></FiEdit></button>
                                    <button className='btn btn-square mx-2 font-bold hover:bg-secondary hover:text-white'><FaEye></FaEye></button>
                                    <button onClick={() => handleDelete(parcel._id)} className='btn btn-square mx-2 font-bold hover:bg-red-500 hover:text-white'><FiTrash></FiTrash></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default My_Page;