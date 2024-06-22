import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import User from '../components/User';
import UserForm from '../components/UserForm';
import EditUserForm from '../components/EditUserForm';
import axios from 'axios';

export default function Login() {
    //state
    const [connectedUserRole, setConnectedUserRole] = useState(null)
    const [connectedUsername, setConnectedUsername] = useState(null)
    const [editingUser, setEditingUser] = useState(null);

    const [users, setUsers] = useState([]);    

    //comportements
    useEffect(() => {
        setConnectedUsername(localStorage.getItem('tokenUsername'));
        setConnectedUserRole(localStorage.getItem('tokenRole'));
    }, []);

    useEffect(() => {
        axios.get('/users/read')
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDelete = (id) => {
        //copie du state
        const usersCopy = [...users];
        //Manipulation sur la copie du state
        const usersUpdated = usersCopy.filter( user => user.id !== id)
        //actualiser le state avec le setter
        setUsers(usersUpdated);
        setEditingUser(null);

        axios.delete(`/user/delete/${id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('Error deleting car:', error);
            });
    }
    
//fonction qui contient la manipulation du state user
    const handleAdd = (userToAdd) => {
        //copie du state
        const usersCopy = [...users];

        //manipulation sur la copie du state
        usersCopy.push(userToAdd)

        //actualiser le state
        setUsers(usersCopy);

        axios.post('/user/create', userToAdd)
        .then(response => {
          console.log(response.data);
          window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

    const updateUser = (userToUpdate) => {
         //1. copie du state
         const usersCopy = [...users];
         //2. manipulation sur la copie du state
         const usersCopyUpdated = usersCopy.map((user) => user.id === userToUpdate.id ? userToUpdate : user);
         //3. modifier le state avec le setter
         setUsers(usersCopyUpdated);
         console.log("userToUpdate : ", userToUpdate.id);
         //Réinitialiser
         setEditingUser(null);

         axios.put(`/user/update/${userToUpdate.id}`, userToUpdate)
        .then(response => {
          console.log(response.data);
        //   window.location.reload();
        })
        .catch(error => {
          console.error(error);
        });
    }

    //affichage
    return (
        <>
            <Header/>
            <main>
                <h1 className='title'>Profil de {connectedUsername}</h1>
                <section className='user-infos'>
                    <div className='user-card'>
                        <h2>Informations personnelles</h2>
                        <p>Rôle : {connectedUserRole}</p>
                        <p>Nom : {connectedUsername}</p>
                    </div>
                </section>
                {connectedUserRole === "admin" && (
                    <>
                        <section className='users-table'>
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
                                        <User
                                            key={user.id}
                                            userInfo={user}
                                            onClick={()=>handleDelete(user.id)}
                                            onEdit={()=>setEditingUser(user)}
                                        />
                                    ))}
                                </tbody>
                            </table>
                        </section>

                        <section className='section-form'>
                            {editingUser ? (
                                <EditUserForm
                                    user={editingUser}
                                    handleUpdate={updateUser}
                                    handleCancel={()=>{setEditingUser(null)}}
                                />
                            ) : (
                                <UserForm handleAdd={handleAdd}/>
                            )}
                        </section>
                    </>
                )}
                
            </main>
        </>
    );
}