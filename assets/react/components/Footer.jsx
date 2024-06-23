import React from 'react';

export default function Footer() {
    return (
        <>
        <footer>
            <div className='footer-infos'>
                <div>
                    <h3>Nos réseaux</h3>
                    <a
                        target='blank'
                        className="icons8-facebook-nouveau"
                        href='https://www.facebook.com/'>
                    </a>
                    <a
                        target='blank'
                        className="icons8-instagram"
                        href='https://www.instagram.com/'>
                    </a>
                    <a
                        target='blank' 
                        className="icons8-x" 
                        href='https://x.com/'>
                    </a>
                </div>
                <div>
                    <h3>Nos horaires</h3>
                    <p>
                        Lundi à vendredi : 8h45 - 12h00, 14h00 - 18h00.
                        <br />
                        Samedi : 8h45 - 12h00
                        <br />
                        Dimanche : Fermé
                    </p>
                </div>
                <div>
                    <h3>Notre adresse</h3>
                    <p>15 rue de la brique, 31000, Toulouse</p>
                </div>
            </div>
            <div className='footer-bottom-infos'>
                <h1><a className='link' href="/">V.PARROT</a></h1>
                <p>Créé par Johan Perez / Studi 2024 / Dossier Projet</p>
            </div>
        </footer>
        </>
    );
}