import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';

export default function LoginComponent() {
    //state
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const { setUser } = useUser();
    
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
        const usernameToLog = username;
        const passwordToLog = password;
        //manipulation de la copie du state
        const userToLog = {"username": usernameToLog, "password": passwordToLog};
        //modification du state avec le setter
        axios.post('/api/login', userToLog)
        .then(response => {
        //   console.log(response.data.token);
          setUser(response.data.user);
        //   const token = response.data.token.userIdentifier
          const tokenUsername = response.data.token.username;
          const tokenRole = response.data.token.userIdentifier;
          localStorage.setItem('tokenRole', tokenRole);
          localStorage.setItem('tokenUsername', tokenUsername);
        //   window.location.href = '/';
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error.message);
          setErrorMessage(error.message);
        });
    }

    //affichage
    return (
        <>
             <section className='section-connexion-container'>
                <h2>Connectez-vous !</h2>
                <p>Connexion pour les employées seulement.</p>
                {errorMessage ? <p className='errorMessage'>La requête n'a pas fonctionnée</p> : null}
              
                <form action="submit" onSubmit={handleSubmit}>
                    <input value={username} onChange={handleChangeUsername} type="text" placeholder='Nom utilisateur...' required/>
                    <input value={password} onChange={handleChangePassword} type="password" placeholder='Mot de passe...' required/>
                    <button>Se connecter</button>
                </form>
            </section>
        </>
    );
}