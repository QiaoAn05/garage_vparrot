import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { UserProvider } from '../context/UserContext';
import ProfileComponent from '../components/ProfileComponents';
import LoginComponent from '../components/LoginComponent';
import HeroBannerInfos from '../components/HeroBannerInfos';

export default function Login() {
    //state
 
    
    //comportements


    //affichage
    return (
        <>
            <Header/>
            <main>
                <div className='hero-banner'>
                    <div className='black-filter'>
                        <h1>CONNEXION</h1>
                        <HeroBannerInfos/>
                        <button className='btn-contact'><a href="#contact">Nous contacter</a></button>
                    </div>
                </div>
                <UserProvider>
                    <LoginComponent/>
                </UserProvider>
            </main>
            <Footer/>
        </>
    );
}