
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/perfil">Productos</Link></li>
       
      </ul> 
    </nav>
  );
}

export default Navigation;
