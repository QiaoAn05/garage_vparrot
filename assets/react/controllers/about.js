import React from 'react';
import { createRoot } from 'react-dom/client';
import About from '../pages/About';
import '../../styles/app.css';
import '../../styles/about.css';

const container = document.getElementById('about');

if(container) {
    const root = createRoot(container);
    root.render(<About/>);
}