import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToLocal } from '../utils/fakeData';

const JobDetails = () => {

    const detailsData = useLoaderData()
    // console.log(detailsData)
    const {id} = detailsData

    const applyJobs = id => {
        
        addToLocal(id)
    }
    // console.log(detailsData)
    return (
        <div >
            <h1 className='text-4xl font-bold text-center mt-10 mb-20'>Job Details</h1>

            <div className='w-[85%] mx-auto'>

            <div className='lg:flex gap-5'>

                <div className='w-[90%] lg:w-[60%]'>
                    <h3><span className='font-bold'> Job Description:</span> {detailsData.jobDesc}</h3>
                    <h3 className='my-6'><span className='font-bold'>Job responsibility:</span> {detailsData.jobResponsibility}</h3>
                    <h3 className='font-bold'>Educational Requirements:</h3>
                    <p>{detailsData.education}</p>
                    <h3 className='font-bold mt-5'>Experience:</h3>
                    <p>{detailsData.experience} Years in this field.</p>
                </div>

                
                <div className='w-[80%] lg:w-[30%] p-7 bg-indigo-100 rounded-lg mt-7 lg:mt-0'>
                    <h3 className='text-2xl font-bold'>Job Details</h3>
                    <hr />
                    <p className='font-bold bg-slate-50 p-2 rounded-lg mt-3'><span className='me-2'><i class="fa-solid fa-calendar-days"></i> </span>Job Title: {detailsData.title}</p>


                    <p className=' font-bold bg-slate-50 p-2 rounded-lg mt-4'><span className='me-2'><i class="fa-solid fa-sack-dollar"></i></span> Salary: {detailsData.salary}</p>

                    <h3 className='text-2xl font-bold mt-7'>Contact Information</h3>
                    <hr className='font-bold text-black'/>
                    
                    <p className=' font-bold bg-slate-50 p-2 rounded-lg mt-3'><span className='me-2'><i class="fa-solid fa-phone-volume"></i> </span>Phone: {detailsData.phone}</p>

                    <p className=' font-bold bg-slate-50 p-2 rounded-lg mt-3'><span className='me-2'><i class="fa-sharp fa-solid fa-envelope"></i> </span>Email: {detailsData.email}</p>
                    <p className=' font-bold bg-slate-50 p-2 rounded-lg mt-3'><span className='me-2'><i class="fa-sharp fa-solid fa-location-dot"></i> </span>Address: {detailsData.location}</p>
                    
                </div>

                </div>
                    <div className='mb-24'>
                        
                        <button onClick={()=> applyJobs(id)} className='box mb-7 text-white text-center mt-6 w-[30%] lg:w-[25%] absolute right-56 px-5 py-3 font-bold rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition'>
                            Apply jobs
                        </button>
                    </div>

                    

            </div>

            
        </div>
    );
};

export default JobDetails;