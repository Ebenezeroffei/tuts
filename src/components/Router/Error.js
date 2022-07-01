import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <section className='text-center py-5'>
            <h1 className='text-red-600 text-8xl'>404</h1>
            <h2 className='text-gray-600 text-3xl font-semibold my-5'>Page Not Found</h2>
            <Link to='/' className='bg-blue-500 px-20 py-2 rounded text-white border-2 border-blue-500 hover:text-blue-500 hover:bg-white transtion-all duration-150'>
                Back To Home Page
            </Link>
        </section>
    );
}

export default Error;