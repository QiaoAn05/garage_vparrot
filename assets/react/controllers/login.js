import React from 'react';
import { createRoot } from 'react-dom/client';
import Login from '../pages/Login';
import '../../styles/app.css';
import '../../styles/login.css';

const container = document.getElementById('login');

if(container) {
    const root = createRoot(container);
    root.render(<Login/>);
}