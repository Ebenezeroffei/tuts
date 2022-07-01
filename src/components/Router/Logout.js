import React,{useEffect} from 'react';
import { Navigate } from 'react-router-dom';

const Logout = ({setIsLoggedIn,setUser}) => {

    useEffect(() => {
        setIsLoggedIn(false);
        setUser({
            username: '',
            password: '',
        });
    },[setIsLoggedIn,setUser]);

    return (
        <Navigate to='/login/'/> 
    );
}

export default Logout;