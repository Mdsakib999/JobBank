import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getFromLocal } from '../utils/fakeData';
import ShowAppliedJob from './ShowAppliedJob';

const AppliedJobs = () => {

    const localData = useLoaderData()
    // console.log(localData)

    let newData = []

    const job = getFromLocal()
    // console.log(job)

    for (const id in job){
        const foundData = localData.find(apply => apply.id == id)
        if(foundData){
            newData.push(foundData)
        }
    }

    // console.log(newData)

    

    
    return (
        <div>
            <h1 className='text-center text-4xl font-bold mt-7 mb-20'>Applied Jobs</h1>

            <div className='w-[70%] mx-auto text-right'>
                <button className='border-solid border-2 border-indigo-600 px-4 my-2 me-3 py-1 rounded-lg font-bold text-blue-800 bg-sky-50 hover:bg-gradient-to-r from-blue-400 hover:to-indigo-700 hover:text-white'>Onsite</button> 
                <button className='border-solid border-2 border-indigo-600 px-4 my-2 py-1 rounded-lg font-bold text-blue-800 bg-sky-50 hover:bg-gradient-to-r from-blue-400 hover:to-indigo-700 hover:text-white'>Remote</button>
            </div>

            {
                newData.map(data => <ShowAppliedJob
                    key={data.id}
                    data ={data}
                ></ShowAppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;