import React from 'react';

const Registration = () => {
    return (
        <div className='mb-10'>
            <fieldset className="fieldset bg-primary rounded-box w-lg p-4">
                <h1 className='text-4xl font-bold text-secondary text-center'>Register Now !!</h1>

                <div className="my-2">

                    <label className="label text-secondary">Name</label>
                    <input type="name" className="input w-full" placeholder="Name" />

                </div>


                <div className="my-2">

                    <label className="label text-secondary">Phone</label>
                    <input type="tel" className="input w-full" placeholder="Phone Number" />

                </div>

                <div className="my-2">

                    <label className="label text-secondary">Profile Picture</label>
                    <input type="file" accept='image/*' className="input w-full" placeholder="Email" />

                </div>


                <div className="my-2">

                    <label className="label text-secondary">Email</label>
                    <input type="email" className="input w-full" placeholder="Email" />

                </div>

                <div className="my-2">

                    <label className="label text-secondary">Password</label>
                    <input type="password" className="input w-full" placeholder="Password" />

                </div>

                <button className="btn btn-neutral mt-4">Login</button>
                <button className="btn btn-secondary mt-4">Sign-In With Google</button>
            </fieldset>
        </div>
    );
};

export default Registration;