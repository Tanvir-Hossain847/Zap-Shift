import React from 'react';
import Logo from '../../../../components/Logo/Logo';
import { Link } from 'react-router';
import { FaCircleArrowUp } from 'react-icons/fa6';
import useAuth from '../../../../Hooks/useAuth';

const Navbar = () => {
  const { user, signOutUser } = useAuth()
  const links = <>
    <Link to={'/'}><li><a>Home</a></li></Link>
    <Link to={'/coverage'}><li><a>Coverage</a></li></Link>
    <Link to={'/send-parcel'}><li><a>Send A Parcel</a></li></Link>
    <Link to={'/dashboard'}><li><a>Dashboard</a></li></Link>


    {
      user && <>
      <Link to={'/dashboard/my-parcel'}><li><a>My_Parcel</a></li></Link>
      </>
    }

  </>

  const handleLogOut = () =>{
    signOutUser()
    .then()
    .catch(error => {
      console.log(error);
    })
  }
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to={'/'}>
            <Logo></Logo>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {
            user ?
            <div className="space-x-2">
              <button onClick={handleLogOut} className='btn'>Log-Out</button>
              <Link to={'/rider'}><button className='btn btn-primary text-black'>Be A Rider</button></Link>
            </div> 
            :
            <div className="flex gap-3">
          <Link to={'/login'}><a className="btn">Login</a></Link>
          <Link to={'/rider'}><a className="btn btn-primary text-black">Be A Rider</a></Link>
          <div className="rotate-45 text-4xl">
          <FaCircleArrowUp></FaCircleArrowUp>
          </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;