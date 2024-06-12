import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
    return (
        <>
        <Header/>
        <main>
            <div className='hero-banner'>
                <div className='black-filter'>
                    <h1>CONNEXION</h1>
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
            <section className='section-connexion-container'>
                <h2>Connectez-vous !</h2>
                <p>Connexion pour les employées seulement.</p>

                <form action="submit">
                    <input type="text" placeholder='Nom utilisateur...' />
                    <input type="password" placeholder='Mot de passe...'/>
                    <button>Se connecter</button>
                </form>
            </section>


        </main>
        <Footer/>
        </>
    );
}