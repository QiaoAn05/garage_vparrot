import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBannerInfos from '../components/HeroBannerInfos';

export default function Contact() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>CONTACT</h1>
                    <HeroBannerInfos/>
                </div>
            </div>
            <p className='txt-center'>Page bientôt disponible</p>
        </main>
        <Footer/>
        </>
    );
}