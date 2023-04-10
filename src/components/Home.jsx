import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import searchAnimation from "../assets/search-users.json";




const LoadJobData = () => {

    const [loadData, setLoadData] = useState([]);

    useEffect(()=>{
        fetch('/jobCatagoryData.json')
        .then(res => res.json)
        .then(data => console.log(data))
    }, [])
}


const Home = () => {
    return (
        <div >
            <div className='w-[90%] flex mx-auto gap-6 items-center'>
                <div className='w-[50%]'>
                    <h1 className='text-7xl font-bold'>One Step Closer To Your <span className='text-transparent text-7xl bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-300'>Dream Job</span></h1>
                    <p className='my-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto eius, eos debitis dicta hic sapiente maxime corrupti, odio qui labore. Sunt quo eius dignissimos provident, sint est deleniti minima!</p>

                    <button className="px-5 py-3 font-bold text-white rounded-lg bg-gradient-to-r from-indigo-700 to-blue-400 hover:from-blue-400 hover:to-indigo-700 transition">Start Applying
                    </button>
                </div>

                <div className='w-[45%]'>
                    <div className='w-[80%] ms-16'>
                        <Lottie animationData={searchAnimation} loop={true}></Lottie>
                    </div>
                </div>
            </div>


            <div>
                <h1>Job Ctegory List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>


            

        </div>
    );
};

export default Home;