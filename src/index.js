import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init()

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);