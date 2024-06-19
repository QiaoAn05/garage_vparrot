import React from 'react';
import { createRoot } from 'react-dom/client';
import Profile from '../pages/Profile';
import '../../styles/app.css';
import '../../styles/profile.css';

const container = document.getElementById('profile');

if(container) {
    const root = createRoot(container);
    root.render(<Profile/>);
}