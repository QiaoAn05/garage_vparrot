import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import User from '../components/User';
import UserForm from '../components/UserForm';

export default function Login() {
    //state
    const [connectedUserRole, setConnectedUserRole] = useState(null)
    const [connectedUsername, setConnectedUsername] = useState(null)

    const [users, setUsers] = useState([
        { id: 1, username: "Johan", role:["employee"], password: "hfnlezbezfbenmned" },
        { id: 2, username: "Michael", role:["employee"], password: "okelnlfe" },
        { id: 3, username: "Tony", role:["employee"], password: "jndfepmm" }
    ]);    

    //comportements
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
    
//fonction qui contient la manipulation du state user
    const handleAdd = (userToAdd) => {
        //copie du state
        const usersCopy = [...users];

        //manipulation sur la copie du state
        usersCopy.push(userToAdd)

        //actualiser le state
        setUsers(usersCopy);
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
                    <UserForm handleAdd={handleAdd}/>
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
                                <User key={user.id} userInfo={user} onClick={()=>handleDelete(user.id)} />
                            ))}
                        </tbody>
                    </table>
                </section>
                
            </main>
        </>
    );
}