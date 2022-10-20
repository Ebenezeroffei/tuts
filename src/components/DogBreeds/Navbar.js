import React from 'react';
import { Link,Outlet,useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate('/login');
    }
    return (
        <>
            <nav className='p-2 bg-green-400 flex items-center justify-between'>
                <div className='text-3xl font-semibold font-serif'>
                    Dogicon
                </div>
                <ul>
                    <Link to={'/'} className='text-gray-800 font-semibold mr-4'>Home</Link>
                    <span onClick={logout} className='text-red-600 font-semibold cursor-pointer'>Logout</span>
                </ul>
            </nav>
            <main className='p-3'>
                <Outlet/>
            </main>
        </>
    );
}

export default Navbar;