import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Registration = () => {

    const {registerUser} = useAuth()

    const {register, handleSubmit, reset} = useForm()

    const handleRegistration = (data) =>{
        console.log(data);
        registerUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            reset()
        })
        .catch(error => {
            console.log(error);
            
        })
        

    }
    return (
        <form onSubmit={handleSubmit(handleRegistration)} className='mb-10'>
            <fieldset className="fieldset bg-primary rounded-box w-lg p-4">
                <h1 className='text-4xl font-bold text-secondary text-center'>Register Now !!</h1>

                <div className="my-2">

                    <label className="label text-secondary">Name</label>
                    <input type="name" {...register('name')} className="input w-full" placeholder="Name" />

                </div>


                <div className="my-2">

                    <label className="label text-secondary">Phone</label>
                    <input type="tel" {...register('phone')} className="input w-full" placeholder="Phone Number" />

                </div>

                <div className="my-2">

                    <label className="label text-secondary">Profile Picture</label>
                    <input type="file" {...register('photo')} className="file-input w-full" placeholder="Email" />

                </div>


                <div className="my-2">

                    <label className="label text-secondary">Email</label>
                    <input type="email" {...register('email')} className="input w-full" placeholder="Email" />

                </div>

                <div className="my-2">

                    <label className="label text-secondary">Password</label>
                    <input type="password" {...register('password')} className="input w-full" placeholder="Password" />

                </div>

                <button className="btn btn-neutral mt-4">Register</button>
                <button className="btn btn-secondary mt-4">Sign-Up With Google</button>
                <h1 className='mt-2 text-lg'>Already Have An Account <span><Link to={'/login'}>Login</Link></span> Now</h1>
            </fieldset>
        </form>
    );
};

export default Registration;