import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {

    const { signInUser, signINGoogle } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

        const { register, handleSubmit, formState: {errors}, reset } = useForm();
        const handleRegistration = (data) => {
            console.log(data);
            signInUser(data.email, data.password)
            .then(result => {
                console.log(result.user);
                reset()
                navigate(location.state || '/')
            })
            .catch(error => {
                console.log(error)
            })
        }

        const handleGoogleLogin = () =>{
            signINGoogle()
            .then(result => {
                console.log(result);
                navigate(location.state || '/')
            })
            .catch(error =>{
                console.log(error);
            }) 
        }
    
    return (
        <div>
            <form onSubmit={handleSubmit(handleRegistration)}>
            <fieldset className="fieldset bg-primary rounded-box w-lg p-4">
                <h1 className='text-4xl font-bold text-secondary text-center'>Login!!</h1>

                <div className="my-2">

                <label className="label text-secondary">Email</label>
                <input type="email" {...register("email", {
                    required: true,
                })} className="input w-full" placeholder="Email" />
                {errors.email?.type==='required' && <p className='text-secondary font-bold mt-2'>Email Field Is Required</p>}

                </div>

                <div className="my-2">

                <label className="label text-secondary">Password</label>
                <input type="password" {...register("password", {
                    required:true,
                })} className="input w-full" placeholder="Password" />
                {errors.password?.type==='required' && <p className='text-secondary font-bold mt-2'>Password Field Is Required</p>}
                </div>
                
                <button className="btn btn-neutral mt-4">Login</button>
                <button type='button' onClick={handleGoogleLogin} className="btn btn-secondary mt-4">Sign-In With Google</button>
            <h1 className='mt-2 text-lg'>Don't have an account yet <span><Link state={location.state} to={'/registration'}>Register</Link></span> now</h1>
            </fieldset>
            </form>
        </div>
    );
};

export default Login;