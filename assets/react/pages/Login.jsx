import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';

export default function Login() {
    //state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    
    //comportements
    const handleChangeUsername = (event) => {
        setUsername(event.target.value);
    }
        
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        //Copie du state
        //manipulation de la copie du state
        const usernameToLog = username;
        const passwordToLog = password;
        const userToLog = {"username": usernameToLog, "password": passwordToLog};
        //modification du state avec le setter
        axios.post('/api/login', userToLog)
        .then(response => {
          console.log(response.data);
          setUser(response.data.user);
        //   window.location.href = '/';
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

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
            <section className='section-connexion-container'>
            {user ? (
                <p>Bonjour {user}</p>
            ) : (
                <>
                <h2>Connectez-vous !</h2>
                <p>Connexion pour les employées seulement.</p>

                <form action="submit" onSubmit={handleSubmit}>
                    <input value={username} onChange={handleChangeUsername} type="text" placeholder='Nom utilisateur...' required/>
                    <input value={password} onChange={handleChangePassword} type="password" placeholder='Mot de passe...' required/>
                    <button>Se connecter</button>
                </form>
                </>
            )}
            </section>


        </main>
        <Footer/>
        </>
    );
}