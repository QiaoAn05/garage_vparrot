import React from 'react';
import { createRoot } from 'react-dom/client';
import Contact from '../pages/Contact';
import '../../styles/app.css';
import '../../styles/contact.css';

const container = document.getElementById('contact');

if(container) {
    const root = createRoot(container);
    root.render(<Contact/>);
}