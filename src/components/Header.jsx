import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='box w-[90%] mx-auto flex justify-between items-center p-6'>
            <div >
                <h3 className='font-bold text-4xl '>Dream<span className='text-indigo-500'>Job</span>Bank</h3>
                
            </div>

            <div>
                <ul className='flex'>
                    <li className='px-4 font-bold'>
                        <NavLink to="/" className={({isActive})=> isActive ? 'text-indigo-500' : '' }>
                            Home
                        </NavLink>
                    </li>
                    <li className='px-4 font-bold'>
                        <NavLink to="/AppliedJobs" className={({isActive})=> isActive ? 'text-indigo-500' : '' }>
                            Applied Jobs
                        </NavLink>
                    </li>
                    <li className='px-4 font-bold'>
                        <NavLink to="/blog" className={({isActive})=> isActive ? 'text-indigo-500' : '' }>
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div>

                <button className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition">Start Applying
                </button>
            </div>
        </div>
    );
};

export default Header;