import React,{useState} from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Error from './Error';
import Wrapper from './Wrapper';
import UsersWrapper from './UsersWrapper';
import {Users} from '../Practices';
import UserDetail from '../Practices/UserDetail';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Logout from './Logout';



const Router = () => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [user,setUser] = useState({
        username: '',
        password: '',
    });


    const onChangeHandler = (e) => {
        const {value,name} = e.target;
        setUser({
            ...user,
            [name]:value
        });
    }

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}>
                        <Wrapper/>
                    </ProtectedRoute>
                }>
                    <Route index element={<Home/>}/>
                    <Route path='about-us/' element={<AboutUs/>}/>
                    <Route path='contact-us/' element={<ContactUs/>}/>
                    <Route path='users/' element={<UsersWrapper/>}>
                        <Route index element={<Users/>}/>
                        <Route path=':userId/' element={<UserDetail/>}/>
                    </Route>
                </Route>
                <Route path='login/' element={<Login user={user} onChangeHandler={onChangeHandler} setIsLoggedIn={setIsLoggedIn}/>} />
                <Route path='logout/' element={<Logout setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>} />
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;