import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Login() {
    //state
    const [userRole, setUserRole] = useState(null)
    const [username, setUsername] = useState(null)
    
   
    // console.log("identifier :", localS[0]);
    // console.log("user : ", localS[1]);
    
    //comportements
    useEffect(() => {
        setUsername(localStorage.getItem('tokenUsername'));
        setUserRole(localStorage.getItem('tokenRole'));
        // setUsername(localS.username);
    }, []);

    //affichage
    return (
        <>
            <Header/>
            <main>
                {/* <h1>Profil de {token.usename}</h1> */}
                <h1>Profil de {username}</h1>
                <section className='user-infos'>
                    <h2>Informations personnelles</h2>
                    <p>Rôle : {userRole}</p>
                    <p>Nom : {username}</p>
                </section>
                <form action="submit">
                    <h2>Création d'un employée</h2>
                    <input type="text" placeholder="Nom de l'utilisateur" />
                    <input type="password" placeholder="Mot de passe" />
                    <button>Ajouter un Employé</button>
                </form>
                
            </main>
        </>
    );
}