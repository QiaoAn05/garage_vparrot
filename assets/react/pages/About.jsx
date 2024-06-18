import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBannerInfos from '../components/HeroBannerInfos';

export default function About() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>A PROPOS</h1>
                    <HeroBannerInfos/>
                    <button className='btn-contact'><a href="/contact">Nous contacter</a></button>
                </div>
            </div>
            <p className='txt-center'>Page bientôt disponible</p>
        </main>
        <Footer/>
        </>
    );
}