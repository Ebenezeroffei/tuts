import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='bg-blue-500 p-4 flex justify-between items-end'>
                <h1 className='text-2xl text-white font-semibold'>Navbar</h1>
                <div className='text-white text-sm'>
                    <Link className='hover:text-gray-800 transition-all duration-150 mx-2' to='/'>
                        Home
                    </Link>
                    <Link className='hover:text-gray-800 transition-all duration-150 mx-2' to='about-us/'>
                        About Us
                    </Link>
                    <Link className='hover:text-gray-800 transition-all duration-150 mx-2' to='contact-us/'>
                        Contact Us
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default Navbar;