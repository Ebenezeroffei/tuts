import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemperatureCalculator from './components/TemperatureCalculator';
import Todos from './components/Todos';
import Quiz from './components/Quiz'
import {Users} from './components/GithubUsers';
import UserDetail from './components/GithubUsers/UserDetail';
import DogBreeds from './components/DogBreeds'
import Home from './components/DogBreeds/Home';
import BreedDetail from './components/DogBreeds/BreedDetail';

AOS.init()

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='todos/' element={<Todos/>}/>
                <Route path='temperature-calculator/' element={<TemperatureCalculator/>}/>
                <Route path='quiz/' element={<Quiz/>}/>
                <Route path='github-users/' element={<Users/>}/>
                <Route path='github-users/:userId/' element={<UserDetail/>}/>
                <Route path='dog-breeds/' element={<DogBreeds/>}>
                    <Route index element={<Home/>}/>
                    <Route path=':breed/' element={<BreedDetail/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);