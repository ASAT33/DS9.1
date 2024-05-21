import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Navigation2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      className={`sidebar ${sidebarOpen ? 'open' : ''}`}
      onMouseOver={openSidebar}
      onMouseOut={closeSidebar}
    >
      <div className="profile">
        <h2>Bienvenido</h2>
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Imagen de perfil"
          className="profile-image"
        />
        <h2>Nombre de Usuario</h2>
        <Link to="/" className='link-nav'><p>Inicio</p> </Link>
        <Link to="/perfil" className='link-nav'><p>Perfil</p></Link>
        <Link to="/contacto" className='link-nav'><p>Contacto</p> </Link>
        <Link to="/ajustes" className='link-nav'><p>Ajustes</p> </Link>
      </div>
    </div>
  );
}

export default Navigation2;
