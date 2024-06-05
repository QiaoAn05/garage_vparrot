import React from 'react';

export default function Header() {
    return (
        <>
        <header>
            <h1><a className='link' href="/">V.PARROT</a></h1>
            <nav>
                <ul>
                    <li><a className='link' href="/">Accueil</a></li>
                    <li><a className='link' href="/About">A propos</a></li>
                    <li><a className='link' href="/Services">Entretiens & Réparations</a></li>
                    <li><a className='link' href="/SecondHand">Occasions</a></li>
                    <li><a className='link' href="/Contact">Contact</a></li>
                    <li><a className='link' href="/Login">Connexion</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}