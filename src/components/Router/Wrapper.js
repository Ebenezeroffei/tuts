import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import StyledNavbar from './StyledNavbar';


const Wrapper = ({isLoggedIn}) => {
    return (
        <>
            <StyledNavbar/>
            <Outlet/>
        </>
    );
}

export default Wrapper;