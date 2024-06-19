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

    // const [newUsername, setNewUsername] = useState(null);
    // const [newPassword, setNewPassword] = useState(null);
    // const [newPasswordConfirmed, setNewPasswordConfirmed] = useState(null);
    
    //comportements
    useEffect(() => {
        setConnectedUsername(localStorage.getItem('tokenUsername'));
        setConnectedUserRole(localStorage.getItem('tokenRole'));
    }, []);
//To Do delete
    const handleDelete = () => {
        console.log("hello");
    }

    // const handleChangeName = (event) => {
    //     event.target.value
    //     console.log(event.target.value);
    // }
    // const handleChangePassword = (event) => {
    //     event.target.value
    //     console.log(event.target.value);
    // }
    // const handleChangePasswordConfirmed = (event) => {
    //     event.target.value
    //     console.log(event.target.value);
    // }

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
                {/* <form action="submit">
                    <h2>Création d'un employée</h2>
                    <input onChange={handleChangeName} type="text" placeholder="Entrer le nom de l'utilisateur" />
                    <input onChange={handleChangePassword} type="password" placeholder="Choisir un mot de passe" />
                    <input onChange={handleChangePasswordConfirmed} type="password" placeholder="Confirmer le mot de passe" />
                    <button>Ajouter un Employé</button>
                </form> */}
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
                                    <td><button onClick={handleDelete}>X</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                
            </main>
        </>
    );
}