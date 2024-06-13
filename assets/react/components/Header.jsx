import React, { useState } from 'react';

export default function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };
    const valeur = localStorage.getItem('token');
    console.log(valeur);
    //ToDo : empty the localstorage when logout
    // Try to get the PHPSESSID	oo108279qt6l5gj1tt9hd3ie9t
    return (
        <>
            <header>
                <h1><a className='link' href="/">V.PARROT</a></h1>
                <nav className={isActive ? 'active' : ''}>
                    <ul>
                        <li><a className='link' href="/">Accueil</a></li>
                        <li><a className='link' href="/About">A propos</a></li>
                        <li><a className='link' href="/Services">Entretiens & Réparations</a></li>
                        <li><a className='link' href="/SecondHand">Occasions</a></li>
                        <li><a className='link' href="/Contact">Contact</a></li>
                        {!valeur && (
                        <li><a className='link' href="/login">Connexion</a></li>
                        )}
                        <li><a className='link' href="/logout">Déconnexion</a></li>
                    </ul>
                </nav>
                <button
                    type='button'
                    aria-label='toggle curtain navigation'
                    className={`nav-toggler ${isActive ? 'active' : ''}`}
                    onClick={toggleMenu}
                >
                    <span className="line l1"></span>
                    <span className="line l2"></span>
                    <span className="line l3"></span>
                </button>
            </header>
        </>
    );
}
