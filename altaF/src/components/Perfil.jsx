import React, { useState } from 'react';
import Header from '../components/Header';
import Navigation2 from '../components/Navigation2';


function Perfil() {
  const [user, setUser] = useState({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    bio: 'Soy Agricultor',
    avatar: 'public\Agro-Fast_plain.svg' 
  });

  return (
    <div>
      <Header />
      <Navigation2 />
      <div className="profile-container">
        <div className="profile-header">
          <img src={user.avatar} alt="Avatar" className="profile-avatar" />
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <div className="profile-bio">
          <h2>Biografía</h2>
          <p>{user.bio}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
