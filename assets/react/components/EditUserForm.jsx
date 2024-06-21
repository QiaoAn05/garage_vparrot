import React, { useEffect, useState } from "react";

export default function EditUserForm({ user, handleUpdate, handleCancel }) {
    //state
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [passwordConfirmed, setPasswordConfirmed] = useState(user.password);
    const role = ["employee"];
    const [errorPwd, setErrorPwd] = useState(null);

    //comportements
    useEffect(() => {
        if (password !== passwordConfirmed) {
            setErrorPwd("Les mots de passe ne correspondent pas.")
        } else {
            setErrorPwd(null);
        }
        }, [password, passwordConfirmed]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errorPwd) {
            return;
        }
        handleUpdate({ ...user, username, password, role });
    }

    //affichage
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <h2>Mise à jour d'un employée</h2>
                <input
                    value={username}
                    onChange={(e)=>{setUsername(e.target.value)}}
                    type="text"
                    placeholder="Entrer le nom de l'utilisateur"
                    required
                />
                <input
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    type="password"
                    placeholder="Choisir un mot de passe"
                    required
                />
                <input
                    value={passwordConfirmed}
                    onChange={(e)=>{setPasswordConfirmed(e.target.value)}}
                    type="password"
                    placeholder="Confirmer le mot de passe"
                    required
                />
                <button className="btn-submit">Valider</button>
                <button className="btn-cancel" type="button" onClick={handleCancel}>Annuler</button>
                {errorPwd && <p className='error-password-message'>{errorPwd}</p>}
            </form>
        </>
    )
}