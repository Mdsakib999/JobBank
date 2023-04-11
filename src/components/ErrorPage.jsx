import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const {error, status} = useRouteError()
    return (
        <div className='w-[50%] mx-auto'>
            
            <img src="https://www.minddevelopmentanddesign.com/wp-content/uploads/2017/09/shutterstock_533238421-832x556.jpg" alt="" />
            <h1 className='text-4xl text-center font-bold'>{status}</h1>

        </div>
    );
};

export default ErrorPage;