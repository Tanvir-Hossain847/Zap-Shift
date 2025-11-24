import React from 'react';

const Login = () => {
    return (
        <div>
            <fieldset className="fieldset bg-primary rounded-box w-lg p-4">
                <h1 className='text-4xl font-bold text-secondary text-center'>Login!!</h1>

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

export default Login;