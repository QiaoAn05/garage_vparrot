import React, { useEffect, useState } from "react";

export default function UserForm({ handleAdd }) {
    //state
    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");

    const [errorPwd, setErrorPwd] = useState(null);

    //comportement
    useEffect(() => {
        if (newPassword !== newPasswordConfirmed) {
            setErrorPwd("Les mots de passe ne correspondent pas.")
        } else {
            setErrorPwd(null);
        }
        }, [newPassword, newPasswordConfirmed]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (errorPwd) {
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
        setNewPasswordConfirmed(event.target.value)
    }

    //affichage
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <h2>Création d'un employée</h2>
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
                    type="password"
                    placeholder="Choisir un mot de passe"
                    required
                />
                <input
                    value={newPasswordConfirmed}
                    onChange={handleChangePasswordConfirmed}
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    required
                />
                <button className="btn-submit">Ajouter un Employé</button>
                {errorPwd && <p className='error-password-message'>{errorPwd}</p>}
            </form>
        </>
    )
}