import React from 'react';
import {NavLink} from 'react-router-dom';

const StyledNavbar = () => {
    const inactive = "hover:text-gray-800 transition-all duration-150 mx-2";
    const active = "text-red-500 transition-all duration-150 mx-2";
    return (
        <>
            <nav className='bg-blue-500 p-4 flex justify-between items-end'>
                <h1 className='text-2xl text-white font-semibold'>Navbar</h1>
                <div className='text-white text-sm font-semibold'>
                    <NavLink className={({isActive}) => isActive ? active : inactive} to='/'>
                        Home
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? active : inactive} to='about-us/'>
                        About Us
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? active : inactive} to='contact-us/'>
                        Contact Us
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? active : inactive} to='users/'>
                        Users
                    </NavLink>
                    <NavLink className={({isActive}) => isActive ? active : inactive} to='logout/'>
                        Logout
                    </NavLink>
                </div>
            </nav>
        </>
    );
}

export default StyledNavbar;