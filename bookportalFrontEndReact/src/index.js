import React from 'react';
import ReactDOM from 'react-dom/client';
import AxiosConfigurer from "./config/AxiosConfig";


import App  from './App';
AxiosConfigurer.configure();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

