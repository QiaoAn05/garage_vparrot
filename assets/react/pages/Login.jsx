import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { UserProvider } from '../context/UserContext';
import ProfileComponent from '../components/ProfileComponents';
import LoginComponent from '../components/LoginComponent';

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
            
            {/* {user ? (
                <p>Bonjour {user}</p>
            ) : ( */}
                <>
                <UserProvider>
                <LoginComponent/>
                <ProfileComponent/>
                </UserProvider>
                {/* <h2>Connectez-vous !</h2>
                <p>Connexion pour les employées seulement.</p>
                {errorMessage ? <p className='errorMessage'>La requête n'a pas fonctionnée</p> : null}
              
                <form action="submit" onSubmit={handleSubmit}>
                    <input value={username} onChange={handleChangeUsername} type="text" placeholder='Nom utilisateur...' required/>
                    <input value={password} onChange={handleChangePassword} type="password" placeholder='Mot de passe...' required/>
                    <button>Se connecter</button>
                </form> */}
                </>
            {/* ) } */}
           


        </main>
        <Footer/>
        </>
    );
}