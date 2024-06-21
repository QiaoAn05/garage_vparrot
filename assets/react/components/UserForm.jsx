import React, { useEffect, useState } from "react";
import { validPassword } from "../security/Regex";
import { validUsername } from "../security/Regex";

export default function UserForm({ handleAdd }) {
    //state
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");
    const [showPassword, setShowPassword] = useState(false)

    const [errorPwd, setErrorPwd] = useState(null);
    const [errorUsername, setErrorUsername] = useState(null);

    //comportement
    useEffect(() => {
        if (newPassword !== newPasswordConfirmed) {
            setErrorPwd("Les mots de passe ne correspondent pas.");
        } else if (!validPassword.test(newPassword)) {
            setErrorPwd("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        } else {
            setErrorPwd(null);
        }
    }, [newPassword, newPasswordConfirmed]);

    useEffect(() => {
        if (!validUsername.test(newUsername)) {
            setErrorUsername("Le nom de l'utilisateur doit contenir entre 3 et 20 caractères et aucun chiffre ou caractère spécial.")
        } else {
            setErrorUsername(null);
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        if (errorPwd || errorUsername) {
            return;
        }
       
        //manipulation de la copie du state
        const id = new Date().getTime();
        const username = newUsername;
        const role = ["employee"];
        const password = newPassword;
        const userToAdd = {id, username, role, password}
        
        handleAdd(userToAdd)
        
        //réinitialiser les states
        setNewUsername("");
        setNewPassword("");
        setNewPasswordConfirmed("");
    }

    const handleChangeName = (event) => {
        setNewUsername(event.target.value);
    }
    const handleChangePassword = (event) => {
        setNewPassword(event.target.value);
    }
    const handleChangePasswordConfirmed = (event) => {
        setNewPasswordConfirmed(event.target.value);
    }

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    }

    //affichage
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <h2>Création d'un employée</h2>
                {errorUsername && <p className='error-username-message'>{errorUsername}</p>}
                <input
                    value={newUsername}
                    onChange={handleChangeName}
                    type="text"
                    placeholder="Entrer le nom de l'utilisateur"
                    required
                />
                <input
                    value={newPassword}
                    onChange={handleChangePassword}
                    type={showPassword ? "text" : "password"}
                    placeholder="Choisir un mot de passe"
                    required
                />
                <input
                    value={newPasswordConfirmed}
                    onChange={handleChangePasswordConfirmed}
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirmer le mot de passe"
                    required
                />
                <label>
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={handleChangeShowPassword}
                    />
                    {showPassword ? "Cacher le mot de passe": "Afficher le mot de passe"}
                </label>
                <button className="btn-submit">Ajouter un Employé</button>
                {errorPwd && <p className='error-password-message'>{errorPwd}</p>}
            </form>
        </>
    )
}