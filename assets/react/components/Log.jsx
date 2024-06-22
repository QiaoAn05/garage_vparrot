import React from "react";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const Log = () => {
    const {
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    } = useAuth();

    const LogOut = (e) => {
        e.preventDefault()
        setIsLoggedIn(false)
        setAuthUser(null)
        window.location.href = '/logout';
    }

    const LogIn = (e) => {
        e.preventDefault();
        //Copie du state
        //manipulation de la copie du state
        const usernameToLog = "admin";
        const passwordToLog = "admin";
        const userToLog = {"username": usernameToLog, "password": passwordToLog};
        //modification du state avec le setter
        axios.post('/api/login', userToLog)
        .then(response => {
          console.log(response.data.user);
          setIsLoggedIn(true)
          setAuthUser(response.data.user)
          console.log(authUser.user);
        //   window.location.href = '/';
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

    return (
        <>
        {isLoggedIn
        ? <li><a className='link' href="/logout" onClick={(e)=>{LogOut(e)}}>Déconnexion</a></li>
        : <li><a className='link' href="/" onClick={(e)=>{LogIn(e)}}>Connexion</a></li>
        }
        </>
    )
}

export default Log