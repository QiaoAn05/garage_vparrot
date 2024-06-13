import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import Log from './Log';

export default function Header() {
    const [isActive, setIsActive] = useState(false);
    const { authUser, isLoggedIn } = useAuth();
    console.log(authUser);
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header>
                <h1><a className='link' href="/">V.PARROT</a></h1>
                {isLoggedIn ? (
        <p>Bienvenue, {authUser}</p>
      ) : (
        null
      )}
                <nav className={isActive ? 'active' : ''}>
                    <ul>
                        <li><a className='link' href="/">Accueil</a></li>
                        <li><a className='link' href="/About">A propos</a></li>
                        <li><a className='link' href="/Services">Entretiens & Réparations</a></li>
                        <li><a className='link' href="/SecondHand">Occasions</a></li>
                        <li><a className='link' href="/Contact">Contact</a></li>
                        {/* <li><a className='link' href="/login">Connexion</a></li> */}
                        <Log/>
                        {/* <li><a className='link' href="/logout">Déconnexion</a></li> */}
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
