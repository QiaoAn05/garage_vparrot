import React from 'react';
import { createRoot } from 'react-dom/client';
import Services from '../pages/Services';
import '../../styles/app.css';
import '../../styles/services.css';

const container = document.getElementById('services');

if(container) {
    const root = createRoot(container);
    root.render(<Services/>);
}