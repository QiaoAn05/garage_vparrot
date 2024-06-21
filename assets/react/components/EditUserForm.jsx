import React, { useEffect, useState } from "react";
import { validPassword } from "../security/Regex";
import { validUsername } from "../security/Regex";

export default function EditUserForm({ user, handleUpdate, handleCancel }) {
    //state
    const [username, setUsername] = useState(user.username);
    const [password, setPassword] = useState(user.password);
    const [passwordConfirmed, setPasswordConfirmed] = useState(user.password);
    const role = ["employee"];
    const [errorPwd, setErrorPwd] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const [errorUsername, setErrorUsername] = useState(null);

    //comportements
    useEffect(() => {
        if (password !== passwordConfirmed) {
            setErrorPwd("Les mots de passe ne correspondent pas.");
        } else if (!validPassword.test(password)) {
            setErrorPwd("Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial.");
        } else {
            setErrorPwd(null);
        }
    }, [password, passwordConfirmed]);

    useEffect(() => {
        if (!validUsername.test(username)) {
            setErrorUsername("Le nom de l'utilisateur doit contenir entre 3 et 20 caractères et aucun chiffre ou caractère spécial.")
        } else {
            setErrorUsername(null);
        }
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        if (errorPwd) {
            return;
        }
        handleUpdate({ ...user, username, password, role });
    }

    const handleChangeShowPassword = () => {
        setShowPassword(!showPassword);
    }

    //affichage
    return(
        <>
            <form action="submit" onSubmit={handleSubmit}>
                <h2>Mise à jour d'un employée</h2>
                {errorUsername && <p className='error-username-message'>{errorUsername}</p>}
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
                    type={showPassword ? "text" : "password"}
                    placeholder="Choisir un mot de passe"
                    required
                />
                <input
                    value={passwordConfirmed}
                    onChange={(e)=>{setPasswordConfirmed(e.target.value)}}
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
                <button className="btn-submit">Valider</button>
                <button className="btn-cancel" type="button" onClick={handleCancel}>Annuler</button>
                {errorPwd && <p className='error-password-message'>{errorPwd}</p>}
            </form>
        </>
    )
}