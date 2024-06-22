import React from "react";
import { useUser } from "../context/UserContext";

const ProfileComponent = () => {
  const { user } = useUser();
  if (!user) {
    return <p>Pas d'utilisateur connecté</p>;
  }

  return (
    <div>
      <h2>Profil de l'utilisateur</h2>
      <p>Nom: {user}</p>
    </div>
  );
};

export default ProfileComponent;
