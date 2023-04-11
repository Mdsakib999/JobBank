import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedJobsData = ({feater}) => {

    const {id, companyLogo, title, companyName, location, salary, jobType} = feater
    return (
        <div className='w-[80%] mx-auto border-none shadow-xl rounded-lg mt-5 p-7'>
            <div className='w-48'>
                <img src={companyLogo} alt="" />
            </div>
            <h1 className='text-2xl font-bold mt-4'>{title}</h1>
            <h3 className='font-bold'>{companyName}</h3>

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

            <p className='mt-8'>
            <Link to={`/jobDetails/${id}`} className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition"> View Details</Link>
            </p>

        </div>
    );
};

export default FeaturedJobsData;
