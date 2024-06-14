import React, { useEffect, useState } from 'react';

export default function Header() {
    //state
    const [isActive, setIsActive] = useState(false);
    const [localS, setLocalS] = useState(null);

    //comportements
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setLocalS(localStorage.getItem('token'));
    }, []);

    const handleStorage = () => {
        localStorage.clear();
    }

    //affichage
    return (
        <>
            <header>
                <h1><a className='link' href="/">V.PARROT</a></h1>
                <nav className={isActive ? 'active' : ''}>
                    <ul>
                        <li><a className='link' href="/">Accueil</a></li>
                        <li><a className='link' href="/about" disabled>A propos</a></li>
                        <li><a className='link' href="/services">Services</a></li>
                        <li><a className='link' href="/secondHand">Occasions</a></li>
                        <li><a className='link' href="/contact">Contact</a></li>
                        { localS !== null ? (
                            <li><a className='link' href="/logout" onClick={handleStorage}>Déconnexion</a></li>
                        ) : (
                            <li><a className='link' href="/login">Connexion</a></li>
                        )}
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
