import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImgMemory from '../../images/old-memory.jpg';
import ImgServices from '../../images/tool.jpg';
import ImgContact from '../../images/mailbox.jpg';
import HeroBannerInfos from '../components/HeroBannerInfos';
import CarTest from '../../images/car-test.jpg';

export default function Home() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>GARAGE V.PARROT</h1>
                    <HeroBannerInfos/>
                    <button className='btn-contact'><a href="/contact">Nous contacter</a></button>
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
                <img src={CarTest} alt="photo de second-hand" />
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