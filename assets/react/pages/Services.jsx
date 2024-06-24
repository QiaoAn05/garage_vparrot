import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBannerInfos from '../components/HeroBannerInfos';

export default function Services() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>SERVICES</h1>
                    <HeroBannerInfos/>
                    <button className='btn-contact'><a href="/contact">Nous contacter</a></button>
                </div>
            </div>
            <div>
                <p className='txt-center'>Page bientôt disponible</p>
            </div>

        </main>
        <Footer/>
        </>
    );
}