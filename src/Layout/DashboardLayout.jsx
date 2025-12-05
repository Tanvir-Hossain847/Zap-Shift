import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Logo from '../components/Logo/Logo';
import { FaChartSimple, FaDashcube, FaDoorClosed, FaDoorOpen, FaMap, FaMobileScreen, FaParachuteBox, FaScreenpal, FaShop, FaTag, FaUser } from 'react-icons/fa6';
import { FaCog } from 'react-icons/fa';

const DashboardLayout = () => {
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            {/* Sidebar toggle icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                        </label>
                        <div className="px-4"></div>
                    </nav>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-25 is-drawer-open:w-64">
                        <div className="p-3 is-drawer-close:hidden">
                        <Logo></Logo>
                        </div>
                        {/* Sidebar content here */}
                        <ul className="menu w-full grow p-4 space-y-2">
                            <h1 className='font-bold'>MENU</h1>
                            {/* List item */}
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                                    {/* Home icon */}
                                    <div className="flex items-center gap-2">
                                    <FaDashcube></FaDashcube>
                                    <span className="is-drawer-close:hidden">Dashboard</span>
                                    </div>
                                </button></NavLink>
                            </li>
                           

                            {/* List item */}
                            <li>
                                <NavLink to={'/dashboard/my-parcel'}><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                                    {/* Home icon */}
                                    <div className="flex items-center gap-2">
                                    <FaParachuteBox></FaParachuteBox>
                                    <span className="is-drawer-close:hidden">My Parcels</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Delivery">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaDoorOpen></FaDoorOpen>
                                    <span className="is-drawer-close:hidden">Delivery</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Invoice">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaChartSimple></FaChartSimple>
                                    <span className="is-drawer-close:hidden">Invoice</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Stores">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaShop></FaShop>
                                    <span className="is-drawer-close:hidden">Stores</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Pricing Plan">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaTag></FaTag>
                                    <span className="is-drawer-close:hidden">Pricing Plan</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Coverage Area">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaMap></FaMap>
                                    <span className="is-drawer-close:hidden">Coverage Area</span>
                                    </div>
                                </button></NavLink>
                            </li>
                        </ul>
                        <ul className="menu w-full grow p-4 space-y-2 mx-auto">
                            <h1 className='font-bold'>GENARAL</h1>
                            {/* List item */}
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                                    {/* Home icon */}
                                    <div className="flex items-center gap-2">
                                    <FaCog></FaCog>
                                    <span className="is-drawer-close:hidden">Settings</span>
                                    </div>
                                </button></NavLink>
                            </li>

                            {/* List item */}
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Password">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaMobileScreen></FaMobileScreen>
                                    <span className="is-drawer-close:hidden">Password</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Help">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaUser></FaUser>
                                    <span className="is-drawer-close:hidden">Help</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Stores">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaShop></FaShop>
                                    <span className="is-drawer-close:hidden">Stores</span>
                                    </div>
                                </button></NavLink>
                            </li>
                            <li>
                                <NavLink><button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Log Out">
                                    {/* Settings icon */}
                                    <div className="flex items-center gap-2">
                                    <FaDoorClosed></FaDoorClosed>
                                    <span className="is-drawer-close:hidden">Log Out</span>
                                    </div>
                                </button></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;