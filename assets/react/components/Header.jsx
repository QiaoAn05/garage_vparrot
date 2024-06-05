import React from 'react';

export default function Header() {
    return (
        <>
        <header>
            <h1><a href="/">V.PARROT</a></h1>
            <nav>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/About">A propos</a></li>
                    <li><a href="/Services">Entretiens & Réparations</a></li>
                    <li><a href="/SecondHand">Occasions</a></li>
                    <li><a href="/Contact">Contact</a></li>
                    <li><a href="/Login">Connexion</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}