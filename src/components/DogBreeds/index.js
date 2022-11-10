import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';


const DogBreeds = () => { 

    return (
        <>
            <header>        
                <Navbar/>
            </header>
            <Outlet/>
        </>
    );
}

export default DogBreeds;