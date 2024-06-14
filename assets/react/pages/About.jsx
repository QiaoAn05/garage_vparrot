import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>A PROPOS</h1>
                    <div className='hero-banner-infos'>
                        <p>
                            <b>Adresse : </b>
                            <br />
                            15 rue Beethoven, 76000, Toulouse
                        </p>
                        <p>
                            <b>Horaires d'ouverture : </b>
                            <br />
                            Lundi à vendredi : 8h45 - 12h00, 14h00 - 18h00.
                            <br />
                            Samedi : 8h45 - 12h00
                            <br />
                            Dimanche : Fermé
                        </p>
                    </div>
                    <button className='btn-contact'><a href="#contact">Nous contacter</a></button>
                </div>
            </div>
            <p>Page bientôt disponible</p>
        </main>
        <Footer/>
        </>
    );
}