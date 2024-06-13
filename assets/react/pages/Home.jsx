import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgMemory from '../../images/old-memory.jpg';
import ImgServices from '../../images/tool.jpg';
import ImgContact from '../../images/mailbox.jpg';
// import Dashboard from '../components/Dashboard';
import { AuthProvider } from '../context/AuthContext';

export default function Home() {
    return (
        <>
        <AuthProvider>
            <Header/>
        
            {/* <Dashboard/> */}
        </AuthProvider>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>GARAGE V.PARROT</h1>
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
            <section className='about'>
                <img src={ImgMemory} alt="photo de about" />
                <div>
                    <h2>Qui sommes-nous</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus alias omnis quae ab ullam odit atque, 
                    veniam suscipit voluptatibus quis nulla labore sapiente repellendus libero, rem molestiae dolorum eaque possimus?</p>
                    <a className='link-primary' href="#">En savoir plus...</a>
                </div>
            </section>
            <section className='services bg-dark'>
                <div>
                    <h2>Nos Services</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus alias omnis quae ab ullam odit atque, 
                    veniam suscipit voluptatibus quis nulla labore sapiente repellendus libero, rem molestiae dolorum eaque possimus?</p>
                    <a className='link-accent' href="#">En savoir plus...</a>
                </div>
                <img src={ImgServices} alt="photo de services" />
            </section>
            <section className='second-hand'>
                <img src="" alt="photo de second-hand" />
                <div>
                    <h2>Nos occasions</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus alias omnis quae ab ullam odit atque, 
                    veniam suscipit voluptatibus quis nulla labore sapiente repellendus libero, rem molestiae dolorum eaque possimus?</p>
                    <a className='link-primary' href="#">Découvrir nos modèles</a>
                </div>
            </section>
            <section className='contact bg-dark'>
                <div>
                    <h2>Nous contacter</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus alias omnis quae ab ullam odit atque, 
                    veniam suscipit voluptatibus quis nulla labore sapiente repellendus libero, rem molestiae dolorum eaque possimus?</p>
                    <a className='link-accent' href="#">Nous envoyer un message</a>
                </div>
                <img src={ImgContact} alt="photo de contact" />
            </section>
            <br />
        </main>
        <Footer/>
        </>
    );
}