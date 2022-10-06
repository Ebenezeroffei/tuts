import React from 'react'
import { Navigate,useNavigate } from 'react-router-dom';

const ProtectedRoute = ({children,isLoggedIn}) => {
    return isLoggedIn ? children : <Navigate to='/login/'/>;
}

export default ProtectedRoute;