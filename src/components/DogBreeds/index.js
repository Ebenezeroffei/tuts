import React,{useState} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';
import Navbar from './Navbar';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import appContextValues from './utils';


const AppContext = React.createContext();
const DogBreeds = () => { 
    const [userDetails,setUserDetils] = useState({
        username: '',
        password: '',
    });

    const isLoggedIn = localStorage.getItem('isLoggedIn');

    appContextValues['userDetails'] = userDetails;
    appContextValues['setUserDetails'] = setUserDetils;

    return (
        <AppContext.Provider value={appContextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Navbar/>
                        </ProtectedRoute>
                    }>
                        <Route index element={<Home/>} />
                    </Route>
                    <Route path='/login' element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export {DogBreeds,AppContext};