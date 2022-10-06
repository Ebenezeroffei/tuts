import React,{useState} from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Login from './Login';
import appContextValues from './utils';


const AppContext = React.createContext();
const DogBreeds = () => { 
    const [userDetails,setUserDetils] = useState({
        username: '',
        password: '',
    });

    appContextValues['userDetails'] = userDetails;
    appContextValues['setUserDetails'] = setUserDetils;

    return (
        <AppContext.Provider value={appContextValues}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export {DogBreeds,AppContext};