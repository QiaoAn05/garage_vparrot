import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from '../pages/Home.jsx';
import '../../styles/app.css';
import '../../styles/home.css';

const container = document.getElementById('home');

if(container) {
    const root = createRoot(container);
    root.render(<Home/>);
}