import React from 'react';
import { createRoot } from 'react-dom/client';
import SecondHand from '../pages/SecondHand';
import '../../styles/app.css';
import '../../styles/secondHand.css';

const container = document.getElementById('secondHand');

if(container) {
    const root = createRoot(container);
    root.render(<SecondHand/>);
}