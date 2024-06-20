import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

export default function Login() {
    //state
    const [connectedUserRole, setConnectedUserRole] = useState(null)
    const [connectedUsername, setConnectedUsername] = useState(null)

    const [users, setUsers] = useState([
        { id: 1, username: "Johan", role:["employee"], password: "hfnlezbezfbenmned" },
        { id: 2, username: "Michael", role:["employee"], password: "okelnlfe" },
        { id: 3, username: "Tony", role:["employee"], password: "jndfepmm" }
    ]);

    const [newUsername, setNewUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newPasswordConfirmed, setNewPasswordConfirmed] = useState("");

    const [errorPwd, setErrorPwd] = useState(null);

    //comportements
    useEffect(() => {
        if (newPassword !== newPasswordConfirmed) {
            setErrorPwd("Les mots de passe ne correspondent pas.")
        } else {
            setErrorPwd(null);
        }
        }, [newPassword, newPasswordConfirmed]);

    useEffect(() => {
        setConnectedUsername(localStorage.getItem('tokenUsername'));
        setConnectedUserRole(localStorage.getItem('tokenRole'));
    }, []);

    const handleDelete = (id) => {
        //copie du state
        const usersCopy = [...users];
        //Manipulation sur la copie du state
        const usersUpdated = usersCopy.filter( user => user.id !== id)
        //actualiser le state avec le setter
        setUsers(usersUpdated);
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

    const handleSubmit = (event) => {
        event.preventDefault();

        if (errorPwd) {
            return;
        }

        //copie du state
        const usersCopy = [...users];
        //manipulation de la copie du state
        const id = new Date().getTime();
        const username = newUsername;
        const role = ["employee"];
        const password = newPassword;
        usersCopy.push({id, username, role, password})
        //actualiser le state
        setUsers(usersCopy);
        //réinitialiser les states
        setNewUsername("");
        setNewPassword("");
        setNewPasswordConfirmed("");
    }

    //affichage
    return (
        <>
            <Header/>
            <main>
                <h1>Profil de {connectedUsername}</h1>
                <section className='user-infos'>
                    <h2>Informations personnelles</h2>
                    <p>Rôle : {connectedUserRole}</p>
                    <p>Nom : {connectedUsername}</p>
                </section>

                <section className='section-form'>
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
                        <button>Ajouter un Employé</button>
                        {errorPwd && <p className='error-password-message'>{errorPwd}</p>}
                    </form>
                </section>

                <section>
                    <h2>Tous les utilisateurs</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Noms</th>
                                <th>Rôles</th>
                                <th>Mod. / Supp.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id}>
                                    <td>{user.username}</td>
                                    <td>{user.role}</td>
                                    <td><button onClick={() => handleDelete(user.id)}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                
            </main>
        </>
    );
}