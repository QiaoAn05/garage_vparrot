import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgMemory from '../../images/old-memory.jpg';

export default function SecondHand() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>OCCASIONS</h1>
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
            <h2>Découvrez nos voitures d'occasions</h2>
            <section className='filter-container'>
                <select name="filter" id="filter">
                    <option value=""></option>
                    <option value="">Prix</option>
                    <option value="">Années</option>
                    <option value="">Km</option>
                </select>
            </section>
            <section className='cards-container'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            <div className='card'></div>
            </section>
        </main>
        <Footer/>
        </>
    );
}