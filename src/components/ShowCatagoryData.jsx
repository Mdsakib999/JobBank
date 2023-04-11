import React from 'react';

const ShowCatagoryData = ({data}) => {
    const {title, job} = data;
    return (
        <div className='box mt-7 p-6 mb-5 rounded-lg bg-blue-100'>
            <div className='w-24 bg-white p-2 rounded-md'>
                <img src={data.Image} alt="" />
            </div>
            <h1 className='font-bold text-2xl mt-3'>{title}</h1>
            <p>{job} job Avilable</p>
        </div>
    );
};

export default ShowCatagoryData;