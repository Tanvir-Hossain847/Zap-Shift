import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';


const Registration = () => {

    const { registerUser, updateUserProfile, signINGoogle} = useAuth()

    const { register, handleSubmit, reset } = useForm()

    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()


    const handleRegistration = (data) => {
        console.log(data);
        const profileImg = data.photo[0]
        registerUser(data.email, data.password)
            .then(result => {
                console.log(result.user);

                const formData = new FormData();
                formData.append('image', profileImg)
                const img_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

                axios.post(img_API_URL, formData)
                    .then(res => {
                        console.log('after image upload', res.data.data.url);


                        const userPofile = {
                            displayName: data.name,
                            photoURL: res.data.data.url
                        }
                        updateUserProfile(userPofile)
                            .then(() => {
                                console.log('user profile updated done');
                            }
                            )
                            .catch(error => {
                                console.log(error);

                            })
                    })
                navigate(location.state || '/')
                reset()
            })
            .catch(error => {
                console.log(error);
            })

            
        }


        const handleGoogleRegister = () => {
            signINGoogle()
            .then(() => {
                navigate(location.state || '/')
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
                <button type='button' onClick={handleGoogleRegister} className="btn btn-secondary mt-4">Sign-Up With Google</button>
                <h1 className='mt-2 text-lg'>Already Have An Account <span><Link state={location.state} to={'/login'}>Login</Link></span> Now</h1>
            </fieldset>
        </form>
    );
};

export default Registration;