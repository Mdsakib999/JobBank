import React from 'react';

const ShowAppliedJob = ({data}) => {
    const {id, companyLogo, title, companyName, location, salary, jobType} = data
    return (
        <div className='w-[70%] mx-auto'>
            <div className='border-solid border-2 border-slate-400 shadow-md rounded-md flex items-center my-7 p-3'>
                <div className='w-52 bg-slate-100 p-5 rounded-xl me-8'>
                    <img src={companyLogo} alt="" />
                </div>
                <div className='flex justify-between items-center'>
                    <div className=''>
                        <h3 className='text-2xl font-bold mt-4'>{title}</h3>
                        <p className='font-bold'>{companyName}</p>

                        <button className='border-solid border-2 border-indigo-600 px-4 my-2 me-3 py-1 rounded-lg font-bold text-blue-800 bg-sky-50 hover:bg-gradient-to-r from-blue-400 hover:to-indigo-700 hover:text-white'>{jobType}</button> 
                        <button className='border-solid border-2 border-indigo-600 px-4 my-2 py-1 rounded-lg font-bold text-blue-800 bg-sky-50 hover:bg-gradient-to-r from-blue-400 hover:to-indigo-700 hover:text-white'>Full Time</button>

                        <div className='flex'>
                            <p><span>
                            <i class="fa-sharp fa-solid fa-location-dot"></i>
                                </span> {location}</p>

                            <p className='ms-7'><span>
                            <i class="fa-solid fa-sack-dollar"></i>
                                </span> Salary: {salary}</p>
                        </div>

                    </div>

                    <div className='absolute right-64'>
                        <button className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition my-7">See All Jobs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowAppliedJob;