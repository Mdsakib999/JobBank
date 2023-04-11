import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import searchAnimation from "../assets/search-users.json";
import ShowCatagoryData from './ShowCatagoryData';
import { useLoaderData } from 'react-router-dom';
import FeaturedJobsData from './FeaturedJobsData';



const Home = () => {

    const featuredData = useLoaderData();

    return (
        <div >
            <div className='w-[88%] flex mx-auto gap-6 items-center'>
                <div className='w-[50%]'>
                    <h1 className='text-7xl font-bold'>One Step Closer To Your <span className='text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-300'>Dream Job</span></h1>
                    <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto eius, eos debitis dicta hic sapiente maxime corrupti, odio qui labore. Sunt quo eius dignissimos provident, sint est deleniti minima!</p>

                    <button className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition">Get Started
                    </button>
                </div>

                <div className='w-[45%]'>
                    <div className='w-[80%] ms-16'>
                        <Lottie animationData={searchAnimation} loop={true}></Lottie>
                    </div>
                </div>
            </div>


            {/* Jov Category List */}

            <div className='w-[90%] mx-auto'>
                <h1 className='font-bold text-6xl text-center mt-3'>Job Category List</h1>
                <p className='text-center my-4'>Explore thousands of job opportunities with all the information you need at your fingertips.</p>

                <LoadJobData></LoadJobData>
            </div>


            {/* Featured Jobs */}
            <div className='w-[90%] mx-auto'>
                <h1 className='font-bold text-6xl text-center mt-20'>Featured Jobs</h1>
                <p className='text-center my-6'>It's time to build your bright future. Explore thousands of job openings with all the information you need.</p>

                    <div className='grid lg:grid-cols-2 gap-8'>
                        {
                            featuredData.map(feater => <FeaturedJobsData 
                            key={feater.id}
                            feater ={feater}></FeaturedJobsData>)
                        }

                    </div>
                <div className='lg:w-[10%] mx-auto'>
                    <button className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition my-7">See All Jobs
                    </button>
                </div>
            </div>
            

        </div>
    );

     
};


// Jov Category List
const LoadJobData = () => {

    const [loadData, setLoadData] = useState([]);

    useEffect(()=>{
        fetch('/jobData.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    }, [])

    return (
        <div className='flex justify-evenly'>
            {
                loadData.map(data => <ShowCatagoryData
                key={loadData.id}
                data= {data}>
                </ShowCatagoryData>)
            }
        </div>
    );
}


// Featured Jobs


export default Home;